# 브라우저 렌더링 과정, 비동기 프로그래밍, 제너레이터와 async/await

1. 브라우저 렌더링 과정을 간략하게 서술하세요.


2. 두 코드의 차이를 설명하시오.

```js
function sleep(func, delay) {
  const delayUntil = Date.now() + delay;
  while (Date.now() < delayUntil);
  func();
}

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

sleep(foo, 3 * 1000);
bar();
```

```js
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

setTimeout(foo, 3 * 1000);
bar();
```

3. async와 await에 대해 설명하세요.

