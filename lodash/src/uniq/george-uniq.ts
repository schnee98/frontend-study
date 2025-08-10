const uniq = <T>(array: T[]) => {
  const result = new Set();

  for (const item of array) {
    result.add(item);
  }

  return Array.from(result);
}

export default uniq;