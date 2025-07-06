const INFINITY = 1 / 0;

type DeepArray<T> = T | DeepArray<T>[];

function baseFlatten<T>(array: DeepArray<T>[], depth: number): T[] {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (depth > 0 && Array.isArray(value)) {
      result.push(...baseFlatten(value, depth - 1));
    } else {
      result.push(value as T);
    }
  }

  return result;
}

function flattenDeep<T>(array: DeepArray<T>[], depth: number = INFINITY): T[] {
  const length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, depth) : [];
}

export default flattenDeep;

// /** Used as references for various `Number` constants. */
// var INFINITY = 1 / 0;

// /**
//  * The base implementation of `_.flatten` with support for restricting flattening.
//  *
//  * @private
//  * @param {Array} array The array to flatten.
//  * @param {number} depth The maximum recursion depth.
//  * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
//  * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
//  * @param {Array} [result=[]] The initial result value.
//  * @returns {Array} Returns the new flattened array.
//  */

//  function baseFlatten(array, depth, predicate, isStrict, result) {
//   var index = -1,
//       length = array.length;

//   predicate || (predicate = isFlattenable);
//   result || (result = []);

//   while (++index < length) {
//     var value = array[index];
//     if (depth > 0 && predicate(value)) {
//       if (depth > 1) {
//         // Recursively flatten arrays (susceptible to call stack limits).
//         baseFlatten(value, depth - 1, predicate, isStrict, result);
//       } else {
//         arrayPush(result, value);
//       }
//     } else if (!isStrict) {
//       result[result.length] = value;
//     }
//   }
//   return result;
// }
