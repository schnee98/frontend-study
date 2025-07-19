export const memoize = <T>(
  fn: (...args: any[]) => T,
  resolver?: (...args: any[]) => string
) => {
  const cache = new Map();

  return (...args: any[]) => {
    const key = resolver ? resolver(...args) : args.reduce((acc, arg) => acc + arg, "");

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export default memoize;
