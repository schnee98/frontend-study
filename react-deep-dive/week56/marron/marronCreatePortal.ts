import { createRoot, Root } from "react-dom/client";

// key를 기준으로 DOM, Root 저장. 포탈 관리.
const mountedMap = new Map<string, Root>();

interface MarronCreatePortalProps {
  children: React.ReactNode;
  domNode: HTMLElement;
  key?: string;
}

export function marronCreatePortal({
  children,
  domNode,
  key = "default",
}: MarronCreatePortalProps): void {
  let root = mountedMap.get(key);

  if (!root) {
    const el = document.createElement("div");
    domNode.appendChild(el);
    root = createRoot(el);
    mountedMap.set(key, root);
  }

  root.render(children);
}

export function marronUnmountPortal(key: string = "default") {
  const root = mountedMap.get(key);
  if (root) {
    // 렌더링 사이클이 끝난 후 unmount 호출
    // requestAnimationFrame: 브라우저의 렌더링 주기에 맞춰 작업 예약
    requestAnimationFrame(() => {
      root.unmount();
      mountedMap.delete(key);
    });
  }
}
