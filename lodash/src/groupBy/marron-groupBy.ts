function groupBy(collection, iteratee) {
  const result = {};

  for (const item of collection) {
    const key =
      typeof iteratee === "function" ? iteratee(item) : item[iteratee];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

export default groupBy;
