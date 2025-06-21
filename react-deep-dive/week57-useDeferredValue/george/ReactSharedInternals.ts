import type { Dispatcher } from "./ReactFiberHooks";

export const ReactSharedInternals: {
  H: Dispatcher | null;
} = {
  H: null,
};
