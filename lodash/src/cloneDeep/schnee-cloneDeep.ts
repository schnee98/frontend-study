function cloneDeep<T>(value: T, visited: WeakMap<any, any> = new WeakMap()): T {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (visited.has(value)) {
    return visited.get(value);
  }

  if (Array.isArray(value)) {
    const clonedArray = [] as any[];
    visited.set(value, clonedArray);
    value.forEach((item, index) => {
      clonedArray[index] = cloneDeep(item, visited);
    });
    return clonedArray as any;
  }

  const clonedObj = {} as any;
  visited.set(value, clonedObj);

  Object.entries(value).forEach(([key, val]) => {
    clonedObj[key] = cloneDeep(val, visited);
  });

  return clonedObj;
}

export default cloneDeep;
