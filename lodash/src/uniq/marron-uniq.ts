function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export default uniq;
