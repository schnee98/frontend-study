import { useEffect, useState } from "react";

function useSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  getServerSnapshot?: () => Snapshot
): Snapshot {
  const [state, setState] = useState<Snapshot>(() => {
    const isServer = window == null;

    if (isServer && getServerSnapshot) {
      return getServerSnapshot();
    }
    return getSnapshot();
  });

  useEffect(() => {
    const dispose = subscribe(() => setState(getSnapshot()));
    return dispose;
  }, [subscribe]);

  return state;
}

export default useSyncExternalStore;
