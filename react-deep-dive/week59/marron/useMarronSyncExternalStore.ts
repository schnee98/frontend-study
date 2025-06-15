import { useEffect, useState } from "react";

// subscribe 함수는 store를 구독하고 구독을 취소하는 함수를 반환해야 합니다.
// getSnapshot 함수는 store에서 데이터의 스냅샷을 읽어야 합니다.

export function useMarronSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  getServerSnapshot?: () => Snapshot
): Snapshot {
  const getSnapshotFn =
    typeof window === "undefined" && getServerSnapshot
      ? getServerSnapshot
      : getSnapshot;

  // "undefined"는 Node.js (서버)에서, "object"는 브라우저 환경에서 실행 중
  // console.log(typeof window);

  const [snapshot, setSnapshot] = useState(() => getSnapshotFn());

  useEffect(() => {
    const checkForUpdates = () => setSnapshot(getSnapshot());

    const unsubscribe = subscribe(checkForUpdates);
    checkForUpdates(); // 초기값 강제 업데이트

    return unsubscribe;
  }, [subscribe, getSnapshot]);

  return snapshot;
}
