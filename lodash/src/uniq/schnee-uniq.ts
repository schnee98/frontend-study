function uniq<T>(array: T[]): T[] {
  const result: T[] = [];

  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

export default uniq;
