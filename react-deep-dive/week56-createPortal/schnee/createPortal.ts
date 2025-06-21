import { ReactNode, ReactPortal } from "react";

export function createPortalPolyfill(
  children: ReactNode,
  container: Element | DocumentFragment,
  key?: string | null
) {
  if (!isValidElement(container)) {
    throw new Error("Target container is not a DOM element.");
  }

  return {
    $$typeof: Symbol.for("react.portal"),
    key: key ?? null,
    children,
    containerInfo: container,
    implementation: null,
  } as unknown as ReactPortal;
  // createPortal의 ReturnType (@types-react/ReactPortal)과
  // 실제 런타임에 생성된 createPortal의 인터페이스 타입이 다름... why?
}

function isValidElement(element: unknown) {
  return (
    element instanceof Element ||
    element instanceof Document ||
    element instanceof DocumentFragment
  );
}
