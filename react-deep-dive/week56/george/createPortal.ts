import { ReactNode } from "react";

import { REACT_SYMBOLS } from "@/shared/ReactSymbols";
import { isValidContainer } from "@/utils";

export interface PortalLike {
  $$typeof: symbol | number;
  key: string | null;
  children: ReactNode;
  containerInfo: Element | DocumentFragment;
};

export const createPortal = (
  children: ReactNode,
  container: Element | DocumentFragment,
  key?: string | number
): PortalLike => {

  if (!isValidContainer(container)) {
    throw Error("Target container is not a DOM element.");
  }

  return {
    $$typeof: REACT_SYMBOLS.REACT_PORTAL_TYPE,
    key: key === null ? null : String(key),
    children,
    containerInfo: container,
  };
};

// https://github.dev/facebook/react/tree/main/packages/react-reconciler/src/ReactPortal.js
