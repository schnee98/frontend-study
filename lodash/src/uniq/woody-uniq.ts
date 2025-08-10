// export default function uniq<T>(array: T[]) {
//   return array && array.length ? Array.from(new Set(array)) : [];
// }

const LARGE_ARRAY_SIZE = 200;

interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

type List<T> = ArrayLike<T>;

export default function uniq<T>(array: List<T> | null | undefined): T[] {
  if (!array || !array.length) return [];

  if (array.length < LARGE_ARRAY_SIZE) {
    const result: T[] = [];

    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      // if (result.indexOf(item) === -1) result.push(item);
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Array.from(new Set(array)) 이렇게 하면 array가 List<T> (= ArrayLike<T>) 타입이라 Symbol.iterator가 없어서 Set 생성자에 직접 전달할 수 없음
  // 따라서 직접 for 루프를 돌면서 Set에 추가
  const uniqSet = new Set<T>();
  for (let i = 0; i < array.length; i++) {
    uniqSet.add(array[i]);
  }
  return Array.from(uniqSet);
}

/* ===============================================================
* 왜 작은 배열에서 Set이 비효율적인가?
* ================================================================
// Set 생성 과정의 오버헤드:
//  1. Set 객체 생성
//  2. 해시 테이블 초기화
//  3. 각 요소에 대한 해시 계산
//  4. Array.from으로 다시 배열 변환

// vs 선형 탐색:
//  1. 단순한 for 루프
//  2. === 비교 연산만

// 실제 성능 비교 (대략적)
// 2-3개 요소: 선형 탐색이 2-3배 빠름
// 5-8개 요소: 선형 탐색이 1.5-2배 빠름
// 10개 이상: Set이 점진적으로 더 빠름
// 100개 이상: Set이 훨씬 빠름


* ===============================================================
* `NaN` 처리에서 `indexOf`와 `includes`가 다르게 동작하는 이유 (NaN의 특수한 특성)
* ================================================================

### **왜 `indexOf`로 안 되고 `includes`로 되는가?**

```javascript
console.log(NaN === NaN);  // false ← 이게 문제!
```

**JavaScript에서 `NaN`은 자기 자신과도 같지 않습니다!** 이는 IEEE 754 표준에 따른 것입니다.

## **비교 알고리즘의 차이**

### **1. `indexOf` - Strict Equality (`===`) 사용**
```javascript
[NaN, 1, NaN].indexOf(NaN);  // -1 (찾지 못함!)
// 내부적으로 NaN === NaN을 체크하는데, 이게 false라서 못 찾음
```

### **2. `includes` - SameValueZero 사용**
```javascript
[NaN, 1, NaN].includes(NaN); // true (찾음!)
// 내부적으로 NaN을 특별 처리해서 NaN끼리는 같다고 판정
```

### **3. `Set` - SameValueZero 사용**
```javascript
new Set([NaN, NaN, 1]).size;  // 2 (NaN 하나로 합쳐짐)
// Set도 SameValueZero 알고리즘 사용
```

## **당신의 테스트가 실패한 이유**

```typescript
// ❌ indexOf 사용 (잘못된 버전)
if (result.indexOf(item) === -1) result.push(item);

// NaN이 들어올 때:
// result = [NaN]이고 item = NaN일 때
// result.indexOf(NaN) → -1 (NaN === NaN이 false라서)
// 조건이 true가 되어 NaN을 또 추가함!
```

```typescript
// ✅ includes 사용 (올바른 버전)  
if (!result.includes(item)) result.push(item);

// NaN이 들어올 때:
// result = [NaN]이고 item = NaN일 때  
// result.includes(NaN) → true (SameValueZero로 비교)
// 조건이 false가 되어 NaN을 추가하지 않음!
```

## **SameValueZero vs Strict Equality 비교표**

| 값 비교 | Strict Equality (`===`) | SameValueZero |
|---------|------------------------|---------------|
| `1 === 1` | `true` | `true` |
| `NaN === NaN` | `false` ❌ | `true` ✅ |
| `+0 === -0` | `true` | `true` |
| `undefined === undefined` | `true` | `true` |

## **어느 방법들이 SameValueZero를 사용하나?**

```javascript
// SameValueZero 사용 (NaN을 올바르게 처리)
Array.prototype.includes()  ✅
Set                        ✅  
Map                        ✅
Object.is() (거의 유사)     ✅

// Strict Equality 사용 (NaN 처리 문제)
Array.prototype.indexOf()  ❌
Array.prototype.lastIndexOf() ❌
=== 연산자               ❌
```

## **결론**

당신의 관찰이 완전히 정확합니다! **`uniq` 함수에서는 반드시 `includes`나 `Set`을 사용해야 합니다.**

이는 ECMAScript 명세에서 정의한 "값의 동일성" 기준에 따른 것이고, lodash도 동일한 SameValueZero 알고리즘을 사용합니다.



* ===============================================================
* `ArrayLike` 타입? + 왜 lodash가 ArrayLike를 사용하는지?
* ================================================================

`ArrayLike`는 **"배열 같은 객체"**를 나타내는 TypeScript 타입입니다. 
실제 배열은 아니지만 배열처럼 사용할 수 있는 객체들을 말합니다.

### **정의**
```typescript
interface ArrayLike<T> {
  readonly length: number;     // 길이 속성 필수
  readonly [n: number]: T;     // 숫자 인덱스로 접근 가능
}
```

## **실제로 어디서 만날 수 있나요?**

### 1. **브라우저 환경**
```javascript
// DOM 조작에서 자주 만남
const divs = document.querySelectorAll('div');     // NodeList<Element> (ArrayLike)
const imgs = document.getElementsByTagName('img'); // HTMLCollection<Element> (ArrayLike)

console.log(divs.length);    // ✅ 가능
console.log(divs[0]);        // ✅ 가능  
divs.push(newDiv);           // ❌ 에러! push 메서드 없음
```

### 2. **함수의 arguments 객체**
```javascript
function myFunction() {
  console.log(arguments.length);  // ✅ 가능
  console.log(arguments[0]);      // ✅ 가능
  arguments.push('new');          // ❌ 에러! 
}
```

### 3. **문자열**
```javascript
const str = "Hello";
console.log(str.length);  // 5
console.log(str[0]);      // "H"
str.push('!');            // ❌ 에러!
```

## **ArrayLike vs 실제 배열의 차이점**

| 구분 | 실제 배열 (`T[]`) | ArrayLike (`ArrayLike<T>`) |
|------|-------------------|----------------------------|
| **인덱스 접근** | `arr[0]` ✅ | `obj[0]` ✅ |
| **length 속성** | `arr.length` ✅ | `obj.length` ✅ |
| **배열 메서드** | `push, pop, map, filter` ✅ | ❌ 없음 |
| **for...of 루프** | ✅ 가능 | ❌ 불가능 |
| **Symbol.iterator** | ✅ 있음 | ❌ 없음 |
| **Set 생성자** | `new Set(arr)` ✅ | ❌ 직접 불가능 |

## **왜 lodash가 ArrayLike를 사용하나요?**

```typescript
// lodash 함수들은 이 모든 것들을 받을 수 있어야 함
_.uniq([1, 2, 3]);                    // 실제 배열
_.uniq(document.querySelectorAll('div')); // NodeList  
_.uniq({0: 'a', 1: 'b', length: 2});  // 수동 ArrayLike 객체
```

**이유:**
1. **유연성**: 다양한 배열 같은 객체들을 모두 처리
2. **브라우저 호환성**: 오래된 환경의 NodeList 등도 지원
3. **성능**: 불필요한 배열 변환 없이 직접 처리
4. **일관성**: 모든 유틸리티가 같은 인터페이스 사용

## **ArrayLike 처리 방법**

### ❌ **안되는 것들**
```typescript
const arrayLike: ArrayLike<number> = {0: 1, 1: 2, length: 2};

// 이것들은 모두 에러!
new Set(arrayLike);           // ❌ Iterable이 아님
[...arrayLike];               // ❌ Symbol.iterator 없음  
arrayLike.map(x => x * 2);    // ❌ map 메서드 없음
for (const item of arrayLike) // ❌ for...of 불가
```

### ✅ **되는 것들**
```typescript
// 1. 인덱스 기반 for 루프
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

// 2. Array.from으로 변환
const realArray = Array.from(arrayLike);
new Set(realArray);  // 이제 가능!

// 3. 직접 Set에 추가
const set = new Set<number>();
for (let i = 0; i < arrayLike.length; i++) {
  set.add(arrayLike[i]);
}
```

 * ===============================================================
 */

// /**
//  * The base implementation of `_.uniqBy` without support for iteratee shorthands.
//  *
//  * @private
//  * @param {Array} array The array to inspect.
//  * @param {Function} [iteratee] The iteratee invoked per element.
//  * @param {Function} [comparator] The comparator invoked per element.
//  * @returns {Array} Returns the new duplicate free array.
//  */
// function baseUniq(array, iteratee, comparator) {
//   var index = -1,
//     includes = arrayIncludes,
//     length = array.length,
//     isCommon = true,
//     result = [],
//     seen = result;

//   if (comparator) {
//     isCommon = false;
//     includes = arrayIncludesWith;
//   } else if (length >= LARGE_ARRAY_SIZE) {
//     var set = iteratee ? null : createSet(array);
//     if (set) {
//       return setToArray(set);
//     }
//     isCommon = false;
//     includes = cacheHas;
//     seen = new SetCache();
//   } else {
//     seen = iteratee ? [] : result;
//   }
//   outer: while (++index < length) {
//     var value = array[index],
//       computed = iteratee ? iteratee(value) : value;

//     value = comparator || value !== 0 ? value : 0;
//     if (isCommon && computed === computed) {
//       var seenIndex = seen.length;
//       while (seenIndex--) {
//         if (seen[seenIndex] === computed) {
//           continue outer;
//         }
//       }
//       if (iteratee) {
//         seen.push(computed);
//       }
//       result.push(value);
//     } else if (!includes(seen, computed, comparator)) {
//       if (seen !== result) {
//         seen.push(computed);
//       }
//       result.push(value);
//     }
//   }
//   return result;
// }

// /**
//  * Creates a duplicate-free version of an array, using
//  * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//  * for equality comparisons, in which only the first occurrence of each element
//  * is kept. The order of result values is determined by the order they occur
//  * in the array.
//  *
//  * @static
//  * @memberOf _
//  * @since 0.1.0
//  * @category Array
//  * @param {Array} array The array to inspect.
//  * @returns {Array} Returns the new duplicate free array.
//  * @example
//  *
//  * _.uniq([2, 1, 2]);
//  * // => [2, 1]
//  */
// function uniq(array) {
//   return array && array.length ? baseUniq(array) : [];
// }
