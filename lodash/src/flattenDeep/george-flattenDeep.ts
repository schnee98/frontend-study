const flattenDeep = <T>(nestedArray: T[]): T[] => {
  const flatArray: T[] = [];

  const dfs = (arr: T[]) => {
    arr.forEach((value) => {
      Array.isArray(value) ? dfs(value) : flatArray.push(value);
    });
  };

  dfs(nestedArray);

  return flatArray;
};

export default flattenDeep;
