function groupBy<T>(
  _collection: T[] | Record<any, T>,
  iteratee: (item: T) => string | number
): Record<string, T[]> {
  const collection = Array.isArray(_collection)
    ? _collection
    : Object.values(_collection);

  return collection.reduce<Record<string, T[]>>((result, item) => {
    const key = typeof iteratee === "string" ? iteratee : iteratee(item);

    if (result[key] == null) {
      result[key] = [];
    }

    result[key].push(item);

    return result;
  }, {});
}

export default groupBy;
