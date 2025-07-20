let FUNC_ERROR_TEXT = "Expected a function";

// 캐시가 가져야 할 최소한의 메서드를 정의하는 인터페이스
// Map과 WeakMap은 모두 이 인터페이스를 만족함
interface ICache {
  has(key: any): boolean;
  get(key: any): any;
  set(key: any, value: any): this;
  delete(key: any): boolean;
  clear(): void;
}

// 메모이제이션된 함수와 그 캐시의 타입을 정의
type MemoizedFunction = {
  (...args: any[]): any;
  cache: ICache;
};

// memoize 함수 자체에 정적(static)으로 Cache 속성을 추가하기 위한 타입
type Memoize = {
  (func: Function, resolver?: Function): MemoizedFunction;
  Cache: new () => ICache; // Cache는 생성자 함수(new 키워드 사용)
};

/**
 * memoize 함수 구현
 * @param func - 메모이제이션 할 원본 함수
 * @param resolver - (선택) 캐시 키를 생성하는 함수
 * @returns 메모이제이션된 함수
 */
export default function memoize(
  func: Function,
  resolver?: Function
): MemoizedFunction {
  // 1. 에러 처리
  if (
    typeof func != "function" ||
    (resolver != null && typeof resolver != "function")
  ) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  // 2. 메모이제이션 함수 생성
  const memoized: MemoizedFunction = (...args: any[]) => {
    // resolver가 있으면 resolver를 사용하고, 없으면 첫 번째 인수를 키로 사용
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    // 캐시에 해당 키가 있는지 확인하고 있으면 캐시
    if (cache.has(key)) {
      return cache.get(key);
    }

    // 없으면 원본 함수 실행 후 결과를 캐시에 저장하고 반환함
    const result = func.apply(this, args);
    cache.set(key, result);

    return result;
  };

  // memoize 함수의 'Cache' 속성을 확인하고, 있으면 그것을, 없으면 Map을 사용
  memoized.cache = new (memoize.Cache || Map)();

  return memoized;
}

// 'Cache'의 기본값을 Map으로 설정합니다.
// 사용자가 이 값을 WeakMap 등으로 덮어쓸 수 있습니다.
memoize.Cache = Map;

//====================================================
/**
 * 왜 Lodash는 MapCache를 만들었을까요?
 *
 * 가장 큰 이유는 '역사적 배경'과 '호환성' 때문입니다.
 * 시점의 차이: Lodash는 자바스크립트에 Map이 표준으로 도입되기(ES2015/ES6) 훨씬 이전부터 존재했던 라이브러리입니다. 당시에는 모든 브라우저에서 안정적으로 쓸 수 있는 Map과 같은 자료구조가 없었죠.
 * 크로스 브라우징: Lodash는 어떤 환경(오래된 브라우저 포함)에서도 동일하게 동작하는 것을 목표로 했습니다. 따라서 Map이 없는 구형 환경을 지원하기 위해 Map과 유사한 기능을 하는 MapCache를 직접 만들어서 라이브러리에 포함시킨 것입니다. 일종의 폴리필(Polyfill)인 셈이죠.
 * 따라서 오늘날 Node.js나 최신 브라우저처럼 ES6를 완벽하게 지원하는 환경에서 코드를 작성하신다면, 굳이 MapCache를 구현할 필요 없이 내장 Map을 사용하면 됩니다.
 */

// Add methods to `MapCache`.
// MapCache.prototype.clear = mapCacheClear;
// MapCache.prototype['delete'] = mapCacheDelete;
// MapCache.prototype.get = mapCacheGet;
// MapCache.prototype.has = mapCacheHas;
// MapCache.prototype.set = mapCacheSet;

/**
 * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
 * storing the result based on the arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
 * the this binding of the memoized function.
 *
 * @param func The function to have its output memoized.
 * @param resolver The function to resolve the cache key.
 * @return Returns the new memoizing function.
 */
// memoize: {
//   <T extends (...args: any) => any>(func: T, resolver?: (...args: Parameters<T>) => any): T & MemoizedFunction;
//   Cache: MapCacheConstructor;
// };

// /**
//  * Creates a map cache object to store key-value pairs.
//  *
//  * @private
//  * @constructor
//  * @param {Array} [entries] The key-value pairs to cache.
//  */
// function MapCache(entries) {
//   var index = -1,
//     length = entries == null ? 0 : entries.length;

//   this.clear();
//   while (++index < length) {
//     var entry = entries[index];
//     this.set(entry[0], entry[1]);
//   }
// }

// /**
//      * Creates a function that memoizes the result of `func`. If `resolver` is
//      * provided, it determines the cache key for storing the result based on the
//      * arguments provided to the memoized function. By default, the first argument
//      * provided to the memoized function is used as the map cache key. The `func`
//      * is invoked with the `this` binding of the memoized function.
//      *
//      * **Note:** The cache is exposed as the `cache` property on the memoized
//      * function. Its creation may be customized by replacing the `_.memoize.Cache`
//      * constructor with one whose instances implement the
//      * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
//      * method interface of `clear`, `delete`, `get`, `has`, and `set`.
//      *
//      * @static
//      * @memberOf _
//      * @since 0.1.0
//      * @category Function
//      * @param {Function} func The function to have its output memoized.
//      * @param {Function} [resolver] The function to resolve the cache key.
//      * @returns {Function} Returns the new memoized function.
//      * @example
//      *
//      * var object = { 'a': 1, 'b': 2 };
//      * var other = { 'c': 3, 'd': 4 };
//      *
//      * var values = _.memoize(_.values);
//      * values(object);
//      * // => [1, 2]
//      *
//      * values(other);
//      * // => [3, 4]
//      *
//      * object.a = 2;
//      * values(object);
//      * // => [1, 2]
//      *
//      * // Modify the result cache.
//      * values.cache.set(object, ['a', 'b']);
//      * values(object);
//      * // => ['a', 'b']
//      *
//      * // Replace `_.memoize.Cache`.
//      * _.memoize.Cache = WeakMap;
//      */
// function memoize(func, resolver) {
//   if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
//     throw new TypeError(FUNC_ERROR_TEXT);
//   }
//   var memoized = function() {
//     var args = arguments,
//         key = resolver ? resolver.apply(this, args) : args[0],
//         cache = memoized.cache;

//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     var result = func.apply(this, args);
//     memoized.cache = cache.set(key, result) || cache;
//     return result;
//   };
//   memoized.cache = new (memoize.Cache || MapCache);
//   return memoized;
// }

// // Expose `MapCache`.
// memoize.Cache = MapCache;

// /**
//  * Checks if `value` is suitable for use as unique object key.
//  *
//  * @private
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
//  */
// function isKeyable(value) {
//   var type = typeof value;
//   return type == "string" ||
//     type == "number" ||
//     type == "symbol" ||
//     type == "boolean"
//     ? value !== "__proto__"
//     : value === null;
// }

// /**
//  * Gets the data for `map`.
//  *
//  * @private
//  * @param {Object} map The map to query.
//  * @param {string} key The reference key.
//  * @returns {*} Returns the map data.
//  */
// function getMapData(map, key) {
//   var data = map.__data__;
//   return isKeyable(key)
//     ? data[typeof key == "string" ? "string" : "hash"]
//     : data.map;
// }

// /**
//  * Sets the map `key` to `value`.
//  *
//  * @private
//  * @name set
//  * @memberOf MapCache
//  * @param {string} key The key of the value to set.
//  * @param {*} value The value to set.
//  * @returns {Object} Returns the map cache instance.
//  */
// function mapCacheSet(key, value) {
//   var data = getMapData(this, key),
//     size = data.size;

//   data.set(key, value);
//   this.size += data.size == size ? 0 : 1;
//   return this;
// }
