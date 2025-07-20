function memoize(func, resolver) {
  const cache = new Map();

  const memoized = (...args) => {
    const key = resolver ? resolver(...args) : args[0];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };

  memoized.cache = cache;
  return memoized;
}

export default memoize;
