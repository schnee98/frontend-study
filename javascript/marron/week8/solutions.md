# 브라우저 렌더링 과정

1. 브라우저 렌더링 과정을 간략하게 서술하세요.

_답_

```
브라우저는 html, css, js, 이미지 등 랜더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.

브라우저의 렌더링 엔진은 서버로부터 응답된 html, css를 파싱하여 DOM, CSSDOM을 생성하고 이들을 결합하여 렌더 트리 생성

브라우저의 자바스크립트 엔진은 서버로부터 응답된 js를 파싱하여 ast를 생성하고 바이트 코드로 변환하여 실행한다. 이때 js는
DOM API를 통해 DOM이나 CSSDOM을 변경할 수 있다. 변경된다면 변경 후 렌더트리로 결합

렌더 트리를 기반으로 html요소를 그린다.
```

# 비동기 프로그래밍

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
_답_
```
foo bar,
첫번째 코드는 동기처리. 3초 후에 foo함수 호출. bar 함수는 sleep 실행 종료 후 
호출되므로 블로킹된다. 실행순서가 보장되지만 앞의 태스크가 종료 후 실행되기 때문에 이후 태스크들이
블로킹되는 단점.

bar foo,
두번째 코드는 비동기처리. 블로킹처리하지 않고 실행
```

# 제너레이터, async/await
3. async와 await에 대해 설명하세요.

_답_
```
aysnc는 비동기함수. 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.
await는 async 함수 내부에서 사용해야한다. 비동기 코드를 동기적으로 작성할 수 있다. 
프로미스가 settled가 될 때까지 대기한다. 이후 프로미스가 settled 상태가 되면 다시 재개한다.
```
