export const groupBy = <T>(
  collection: T[] | Record<string, T>,
  iteratee: string | ((value: T) => any)
) => {
  const iterateeFn =
    typeof iteratee === "function"
      ? iteratee
      : (value: T) => (value as any)[iteratee];

  const result: Record<string, T[]> = {};

  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  values.forEach((value) => {
    const key = iterateeFn(value);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(value);
  });

  return result;
};

export default groupBy;
