import { Flat } from "lodash";

type RecursiveArray<T> = T extends Array<infer U> ? RecursiveArray<U> : T;
type List<T> = Array<T>;

function flattenDeep<T>(array: List<T | RecursiveArray<T>> | null | undefined) {
  if (array == null) {
    return [];
  }

  const result: T[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item as T);
    }
  }

  return result;
}

export default flattenDeep;
