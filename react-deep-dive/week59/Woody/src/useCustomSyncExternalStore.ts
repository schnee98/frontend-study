import { useCallback, useEffect, useState } from "react";

export function useCustomSyncExternalStore<T>(
  subscribeCallback: (callback: () => void) => () => void,
  getSnapshot: () => T,
  getServerSnapshot?: () => T
): T {
  // 1. 초기 스냅샷 설정 (서버사이드 렌더링 고려)
  const [snapshot, setSnapshot] = useState(() => {
    if (typeof window === "undefined" && getServerSnapshot) {
      return getServerSnapshot();
    }
    return getSnapshot();
  });

  // 2. 스냅샷 업데이트 콜백 (getSnapshot을 의존성에서 제외)
  const updateSnapshot = useCallback(() => {
    const newSnapshot = getSnapshot();

    // 이전 값과 비교하여 실제 변경된 경우만 업데이트 (Object.is를 사용한 얕은 비교)
    setSnapshot((prevSnapshot) => {
      if (Object.is(prevSnapshot, newSnapshot)) {
        return prevSnapshot; // 동일하면 이전 상태 유지
      }
      return newSnapshot;
    });
  }, [getSnapshot]);

  // 3. 외부 스토어 구독
  useEffect(() => {
    // 3-1. 구독 직후 즉시 스냅샷 동기화
    updateSnapshot();

    // 3-2. 외부 스토어 구독 시작
    const unsubscribe = subscribeCallback(updateSnapshot);

    // 3-3. 외부 스토어 구독 해제
    return () => {
      unsubscribe();
    };
  }, [updateSnapshot, subscribeCallback]);

  return snapshot;
}
