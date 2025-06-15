import { useCallback } from "react";
import { useCustomSyncExternalStore } from "./useCustomSyncExternalStore";

// 캐시된 스냅샷
let cachedSnapshot = { width: 0, height: 0 };

// getSnapshot 함수
function getSnapshotWithCache() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // 값이 실제로 변경되었을 때만 새 객체 생성
  if (cachedSnapshot.width !== width || cachedSnapshot.height !== height) {
    cachedSnapshot = { width, height };
  }

  return cachedSnapshot;
}

export function useWindowSize() {
  const subscribeToWindowSize = useCallback((callback: () => void) => {
    console.log("🔔 외부 스토어 구독 시작");
    window.addEventListener("resize", callback);

    return () => {
      console.log("🔕 외부 스토어 구독 해제");
      window.removeEventListener("resize", callback);
    };
  }, []);

  return useCustomSyncExternalStore(
    subscribeToWindowSize,
    getSnapshotWithCache
  );
}
