const placeholder: unique symbol = Symbol("placeholder");
type Placeholder = typeof placeholder;

type CurriedArgs<T extends any[]> = Array<T[number] | Placeholder>;

type CurriedFunction<P extends any[], R> =
  (...args: CurriedArgs<P>) => R | CurriedFunction<P, R>;

const curry = <P extends any[], R>(
  func: (...args: P) => R
): CurriedFunction<P, R> => {

  const curried = (...args: CurriedArgs<P>): any => {
    if (!hasPlaceholder(args) && args.length >= func.length) {
      return func(...(args as P));
    }

    return (...nextArgs: CurriedArgs<P>) => {
      const merged = mergeArgs(args, nextArgs);
      return curried(...merged);
    };
  };

  return curried;
};

const hasPlaceholder = (args: unknown[]): boolean =>
  args.some((arg) => arg === curry.placeholder);

const mergeArgs = (oldArgs: unknown[], newArgs: unknown[]): unknown[] => {
  const result: unknown[] = [];

  oldArgs.forEach((arg) => {
    if (arg === curry.placeholder) {
      result.push(...newArgs.splice(0, 1));
    } else {
      result.push(arg);
    }
  });

  return result.concat(newArgs);
};

curry.placeholder = placeholder;

export default curry;