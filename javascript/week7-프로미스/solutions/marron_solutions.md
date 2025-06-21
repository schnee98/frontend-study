## promise

1. 비동기 처리를 병렬 처리할 때 사용하는 메서드는 무엇인가요? 아래의 비동기 처리를 병렬로 처리하세요.

```js
const requestData1 = () => {
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
};
const requestData2 = () => {
  new Promise((resolve) => setTimeout(() => resolve(2), 3000));
};
const requestData3 = () => {
  new Promise((resolve) => setTimeout(() => resolve(3), 3000));
};
```

_답_

```js
Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log) 매개변수 자동으로 전달해서 작동
  .catch(console.error);

    .then((res) => console.log(res)); 요롷게 하면 
```

2. 프로미스는 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 갖는다.
생성된 직후에는 어떤 상태인지, 비동기 처리가 성공적으로 수행됐을 때, 실패했을 때 어떤 상태인지 설명하세요.
 
 
 _답_
 
 ```
 기본적으로 pending 상태. 이후 비동기 처리가 성공하면 resolve 함수를 호출해 fulfilled 상태로 변경.
 비동기 처리가 실패하면 reject 함수를 호출해 rejected 상태로 변경한다.
 ```

3. 출력 결과를 설명하세요.
```js
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2));
  .then(() => console.log(3));
```

_답_
```
2 3 1 
promise의 콜백 함수가 마이크로 태스크 큐에 일시 저장되기 때문이다. 마이크로 태스크 큐의 우선순위가 태스크 큐보다 높다.
```