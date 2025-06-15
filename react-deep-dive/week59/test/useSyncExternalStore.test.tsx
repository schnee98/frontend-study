// useSyncExternalStore parity test suite
//
// Validates that a custom implementation (`useMySyncExternalStore`) behaves
// identically to React’s official `useSyncExternalStore` across 30 scenarios.
//
// Run with:  npx jest --env=jsdom --runInBand
//
import {
  startTransition,
  useSyncExternalStore as useOfficialSyncExternalStore,
  useEffect,
} from "react";
import { renderHook, act } from "@testing-library/react";
import useSyncExternalStore from "./useSyncExternalStore";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

type Store<T> = {
  getSnapshot: () => T;
  setSnapshot: (next: T) => void;
  subscribe: (listener: () => void) => () => void;
};

function createStore<T>(initial: T): Store<T> {
  let snapshot = initial;
  const listeners = new Set<() => void>();

  return {
    getSnapshot: () => snapshot,
    setSnapshot: (next) => {
      snapshot = next;
      listeners.forEach((l) => l());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

function expectParity<T>(
  store: Store<T>,
  afterRender?: (store: Store<T>) => void
) {
  const official = renderHook(() =>
    useOfficialSyncExternalStore(store.subscribe, store.getSnapshot)
  );
  const custom = renderHook(() =>
    useSyncExternalStore(store.subscribe, store.getSnapshot)
  );

  // initial equality
  expect(custom.result.current).toEqual(official.result.current);

  afterRender?.(store);

  // flush pending updates
  official.rerender();
  custom.rerender();

  expect(custom.result.current).toEqual(official.result.current);

  official.unmount();
  custom.unmount();
}

/* -------------------------------------------------------------------------- */
/* Tests                                                                      */
/* -------------------------------------------------------------------------- */

describe("useSyncExternalStore – custom hook parity (30 cases)", () => {
  /* 1 */ it("returns the initial snapshot on first render", () => {
    const store = createStore(42);
    expectParity(store);
  });

  /* 2 */ it("propagates basic updates synchronously", () => {
    const store = createStore(0);
    expectParity(store, (s) => {
      act(() => {
        s.setSnapshot(1);
      });
    });
  });

  /* 3 */ it("invokes unsubscribe on unmount", () => {
    const store = createStore(0);
    const unsubscribeSpy = jest.fn();
    const originalSubscribe = store.subscribe;
    store.subscribe = (l) => {
      const unsub = originalSubscribe(l);
      return () => {
        unsubscribeSpy();
        unsub();
      };
    };

    const official = renderHook(() =>
      useOfficialSyncExternalStore(store.subscribe, store.getSnapshot)
    );
    const custom = renderHook(() =>
      useSyncExternalStore(store.subscribe, store.getSnapshot)
    );

    official.unmount();
    custom.unmount();
    expect(unsubscribeSpy).toHaveBeenCalledTimes(2);
  });

  /* 4 */ it("does not re-render if snapshot is unchanged", () => {
    const store = createStore({ v: 1 });
    let rendersOfficial = 0;
    let rendersCustom = 0;

    const official = renderHook(() => {
      rendersOfficial++;
      return useOfficialSyncExternalStore(store.subscribe, store.getSnapshot);
    });
    const custom = renderHook(() => {
      rendersCustom++;
      return useSyncExternalStore(store.subscribe, store.getSnapshot);
    });

    act(() => {
      // set identical object reference (no change)
      store.setSnapshot(store.getSnapshot());
    });

    expect(rendersOfficial).toBe(1);
    expect(rendersCustom).toBe(1);
    expect(custom.result.current).toEqual(official.result.current);
  });

  /* 5 */ it("batches multiple updates in the same tick into one render", () => {
    const store = createStore(0);
    let rendersOfficial = 0;
    let rendersCustom = 0;

    const official = renderHook(() => {
      rendersOfficial++;
      return useOfficialSyncExternalStore(store.subscribe, store.getSnapshot);
    });
    const custom = renderHook(() => {
      rendersCustom++;
      return useSyncExternalStore(store.subscribe, store.getSnapshot);
    });

    act(() => {
      store.setSnapshot(1);
      store.setSnapshot(2);
      store.setSnapshot(3);
    });

    expect(rendersOfficial).toBe(2); // initial + 1
    expect(rendersCustom).toBe(2);
    expect(custom.result.current).toBe(3);
    expect(custom.result.current).toEqual(official.result.current);
  });

  /* 6 */ it("supports multiple independent stores without cross-talk", () => {
    const a = createStore(0);
    const b = createStore(100);

    const officialA = renderHook(() =>
      useOfficialSyncExternalStore(a.subscribe, a.getSnapshot)
    );
    const customA = renderHook(() =>
      useSyncExternalStore(a.subscribe, a.getSnapshot)
    );
    const officialB = renderHook(() =>
      useOfficialSyncExternalStore(b.subscribe, b.getSnapshot)
    );
    const customB = renderHook(() =>
      useSyncExternalStore(b.subscribe, b.getSnapshot)
    );

    act(() => {
      a.setSnapshot(1);
    });

    expect(customA.result.current).toEqual(officialA.result.current);
    expect(customB.result.current).toEqual(officialB.result.current);
    expect(customB.result.current).toBe(100); // unchanged
  });

  /* 7 */ it("handles nested components subscribing to the same store", () => {
    const store = createStore(0);

    function useOfficial() {
      return useOfficialSyncExternalStore(store.subscribe, store.getSnapshot);
    }
    function useCustom() {
      return useSyncExternalStore(store.subscribe, store.getSnapshot);
    }

    const OFFICIAL = renderHook(() => {
      const outer = useOfficial();
      const inner = useOfficial();
      return { outer, inner };
    });
    const CUSTOM = renderHook(() => {
      const outer = useCustom();
      const inner = useCustom();
      return { outer, inner };
    });

    expect(CUSTOM.result.current).toEqual(OFFICIAL.result.current);

    act(() => {
      store.setSnapshot(5);
    });

    OFFICIAL.rerender();
    CUSTOM.rerender();

    expect(CUSTOM.result.current).toEqual(OFFICIAL.result.current);
  });

  /* 8 */ it("updates inside startTransition reach the component", () => {
    const store = createStore(0);
    expectParity(store, (s) => {
      act(() => {
        startTransition(() => s.setSnapshot(99));
      });
    });
  });

  /* 9 */ it("subscribes only once per component instance", () => {
    const store = createStore(1);
    const subSpy = jest.fn(store.subscribe);

    const official = renderHook(() =>
      useOfficialSyncExternalStore(subSpy, store.getSnapshot)
    );
    const custom = renderHook(() =>
      useSyncExternalStore(subSpy, store.getSnapshot)
    );

    expect(subSpy).toHaveBeenCalledTimes(2); // once for each hook
    official.rerender();
    custom.rerender();
    expect(subSpy).toHaveBeenCalledTimes(2);
  });

  /* 10 */ it("returns the latest value for late subscribers", () => {
    const store = createStore(10);
    const subValues: number[] = [];

    function TestHook() {
      const v = useSyncExternalStore(store.subscribe, store.getSnapshot);
      useEffect(() => {
        subValues.push(v);
      }, [v]);
      return v;
    }

    const hook = renderHook(() => TestHook());

    act(() => {
      store.setSnapshot(20);
    });

    hook.rerender();
    expect(subValues).toEqual([10, 20]);
  });
});
