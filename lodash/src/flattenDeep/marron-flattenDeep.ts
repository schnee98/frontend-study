function flattenDeep<T>(array: Array<T>) {
  if (!Array.isArray(array)) {
    return [];
  }

  const result: T[] = [];

  const flatten = (arr: any[]) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  };
  flatten(array);
  return result;
}

export default flattenDeep;
