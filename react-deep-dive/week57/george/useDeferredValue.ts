import { ReactSharedInternals } from "./ReactSharedInternals";

export function resolveDispatcher() {
  const dispatcher = ReactSharedInternals.H;
  if (dispatcher === null) {
    throw new Error(
      "Invalid hook call. Hooks can only be called inside of the body of a function component. ..."
    );
  }
  return dispatcher;
}

export function useDeferredValue<T>(value: T, initialValue?: T): T {
  return resolveDispatcher().useDeferredValue(value, initialValue);
}
