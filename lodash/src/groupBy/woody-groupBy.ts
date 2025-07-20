/**
 * 다양한 형태의 분류 기준(predicate)을 표준화된 함수로 변환
 * @param {Function|string|Array|Object} predicate - 분류 기준
 * @returns {Function} 각 요소를 그룹 키로 변환하는 함수
 */
function iteratee<T>(predicate: ValueIteratee<T>) {
  // 1. predicate가 이미 함수면 그대로 반환
  if (typeof predicate === "function") {
    return predicate;
  }

  // 2. predicate가 문자열이면, 해당 속성값을 반환하는 함수를 생성
  // 예) 'length' -> (obj) => obj.length
  if (typeof predicate === "string") {
    return (obj) => obj[predicate];
  }

  // 3. predicate가 배열이면([key, value]), 해당 키와 값이 일치하는지 확인하는 함수를 생성
  // 예: ['active', false] -> (obj) => obj.active === false
  if (Array.isArray(predicate)) {
    return (obj) => obj[predicate[0]] === predicate[1];
  }

  // 4. predicate가 객체이면, 모든 키-값 쌍이 일치하는지 확인하는 함수를 생성
  // 예: { active: false, age: 40 } -> (obj) => obj.active === false && obj.age === 40
  if (typeof predicate === "object" && predicate !== null) {
    return (obj) => {
      return Object.keys(predicate).every((key) => obj[key] === predicate[key]);
    };
  }

  // 그 외의 경우, 자기 자신을 반환하는 기본 함수를 반환
  return (value) => value;
}

type NotVoid = unknown;

type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends object ? object : T[P];
};

type PropertyName = string | number | symbol;

type IterateeShorthand<T> =
  | PropertyName
  | [PropertyName, any]
  | PartialShallow<T>;

type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>;

interface Dictionary<T> {
  [index: string]: T;
}

/**
 * 컬렉션의 각 요소들을 특정 기준(iteratee)에 따라 그룹으로 묶음
 * @param {Array|Object} collection - 그룹핑할 배열 또는 객체
 * @param {Function|string|Array|Object} predicate - 그룹핑 기준
 * @returns {Object} 그룹핑된 결과 객체
 */
function groupBy<T>(
  collection: T[] | Record<string, T>,
  predicate: ValueIteratee<T>
): Dictionary<T[]> {
  // 0. 유효성 검사: collection이 배열이 아니면 빈 객체 반환
  if (!Array.isArray(collection) && typeof collection !== "object") {
    return {};
  }

  // 1. iteratee 헬퍼 함수로 분류 기준을 표준화된 함수로 만들기
  const getGroupKey = iteratee(predicate);

  // 2. 결과를 담을 빈 객체 초기화
  const result = {};

  // 3. 배열 또는 객체의 모든 요소를 순회
  if (Array.isArray(collection)) {
    // 배열인 경우
    for (const item of collection) {
      const key = getGroupKey(item);
      if (key in result) {
        result[key].push(item);
      } else {
        result[key] = [item];
      }
    }
  } else {
    // 객체인 경우 - 값들만 순회
    for (const item of Object.values(collection)) {
      const key = getGroupKey(item);
      if (key in result) {
        result[key].push(item);
      } else {
        result[key] = [item];
      }
    }
  }

  // 6. 최종적으로 그룹핑된 객체를 반환
  return result;
}

export default groupBy;

//====================================================
// type NotVoid = unknown;

// type PartialShallow<T> = {
//   [P in keyof T]?: T[P] extends object ? object : T[P];
// };

// type PropertyName = string | number | symbol;

// type IterateeShorthand<T> =
//   | PropertyName
//   | [PropertyName, any]
//   | PartialShallow<T>;

// type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>;

// interface Dictionary<T> {
//   [index: string]: T;
// }

// interface LoDashStatic {
//   /**
//    * Creates an object composed of keys generated from the results of running each element of collection through
//    * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
//    * key. The iteratee is invoked with one argument: (value).
//    *
//    * @param collection The collection to iterate over.
//    * @param iteratee The function invoked per iteration.
//    * @return Returns the composed aggregate object.
//    */
//   groupBy<T>(
//     collection: List<T> | null | undefined,
//     iteratee?: ValueIteratee<T>
//   ): Dictionary<T[]>;
//   /**
//    * @see _.groupBy
//    */
//   groupBy<T extends object>(
//     collection: T | null | undefined,
//     iteratee?: ValueIteratee<T[keyof T]>
//   ): Dictionary<Array<T[keyof T]>>;
// }
//====================================================
// /**
//  * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
//  * this function returns the custom method, otherwise it returns `baseIteratee`.
//  * If arguments are provided, the chosen function is invoked with them and
//  * its result is returned.
//  *
//  * @private
//  * @param {*} [value] The value to convert to an iteratee.
//  * @param {number} [arity] The arity of the created iteratee.
//  * @returns {Function} Returns the chosen function or its result.
//  */
// function getIteratee() {
//   var result = lodash.iteratee || iteratee;
//   result = result === iteratee ? baseIteratee : result;
//   return arguments.length ? result(arguments[0], arguments[1]) : result;
// }

// /**
//  * Aggregates elements of `collection` on `accumulator` with keys transformed
//  * by `iteratee` and values set by `setter`.
//  *
//  * @private
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} setter The function to set `accumulator` values.
//  * @param {Function} iteratee The iteratee to transform keys.
//  * @param {Object} accumulator The initial aggregated object.
//  * @returns {Function} Returns `accumulator`.
//  */
// function baseAggregator(collection, setter, iteratee, accumulator) {
//   baseEach(collection, function (value, key, collection) {
//     setter(accumulator, value, iteratee(value), collection);
//   });
//   return accumulator;
// }

// /**
//  * A specialized version of `baseAggregator` for arrays.
//  *
//  * @private
//  * @param {Array} [array] The array to iterate over.
//  * @param {Function} setter The function to set `accumulator` values.
//  * @param {Function} iteratee The iteratee to transform keys.
//  * @param {Object} accumulator The initial aggregated object.
//  * @returns {Function} Returns `accumulator`.
//  */
// function arrayAggregator(array, setter, iteratee, accumulator) {
//   var index = -1,
//     length = array == null ? 0 : array.length;

//   while (++index < length) {
//     var value = array[index];
//     setter(accumulator, value, iteratee(value), array);
//   }
//   return accumulator;
// }

// /**
//  * Creates a function like `_.groupBy`.
//  *
//  * @private
//  * @param {Function} setter The function to set accumulator values.
//  * @param {Function} [initializer] The accumulator object initializer.
//  * @returns {Function} Returns the new aggregator function.
//  */
// function createAggregator(setter, initializer) {
//   return function (collection, iteratee) {
//     var func = isArray(collection) ? arrayAggregator : baseAggregator,
//       accumulator = initializer ? initializer() : {};

//     return func(collection, setter, getIteratee(iteratee, 2), accumulator);
//   };
// }
//====================================================
