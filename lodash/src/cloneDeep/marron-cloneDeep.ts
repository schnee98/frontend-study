function cloneDeep<T>(value: T, cache = new WeakMap()): T {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  // 순환 참조 처리
  if (cache.has(value)) {
    return cache.get(value);
  }

  let clone;

  if (Array.isArray(value)) {
    clone = [];
    cache.set(value, clone);
    for (const item of value) {
      clone.push(cloneDeep(item, cache));
    }
  } else {
    clone = {};
    cache.set(value, clone);
    for (const key in value) {
      // key가 value 객체 자체의 속성인지 확인
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        clone[key] = cloneDeep((value as any)[key], cache);
      }
    }
  }

  return clone;
}

export default cloneDeep;
