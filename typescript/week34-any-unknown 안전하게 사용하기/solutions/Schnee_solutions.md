1. 다음 `any` 타입을 가지고 있는 `result` 변수를 런타임에 오류없이 `getLength` 안에 넣어 실행하려면 어떻게 해야할까요?

```typescript
const result = getResult(); // 타입이 any

function getLength(array: any[]) {
  return array.length;
}

console.log(getLength(result));
```

답:

```typescript
const result = getResult(); // 타입이 any

function getLength(array: any[]) {
  return array.length;
}

if (Array.isArray(result)) {
  console.log(getLength(result)); // 타입이 any[]
}
```

2. 다음 함수는 자바스크립트의 어떤 특징 때문에 함수의 값을 캐시할 수 있을까요?

```typescript
function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;
  return function (...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  } as unknown as T;
}
```

답: 클로저

3. [scrollIntoViewIfNeeded](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded) 함수는 Element가 overflow 되어있다면 스크롤을 하고, 아니라면 스크롤을 하지 않는 함수입니다. 해당 함수는 비표준으로서 타입스크립트에서 사용하려고 할 때 오류가 나는데, 해당 함수를 오류가 나지 않도록 사용하는 방법을 코드로 작성해주세요.

```typescript
const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (ref?.current != null) {
    ref.current.scrollIntoViewIfNeeded(); // 에러
  }
}, []);
```

답:

```typescript
declare global {
  interface Element {
    scrollIntoViewIfNeeded(centerIfNeeded?: boolean) void
  }
}

// ...

const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (ref?.current != null) {
    ref.current.scrollIntoViewIfNeeded(); // 에러
  }
}, []);

```
