function memoize(fn: Function, resolver?: Function) {
  const memoized = function (...args: any[]) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache ?? Map)();

  return memoized;
}

memoize.Cache = Map;

export default memoize;
