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


2. 프로미스는 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 갖는다.
생성된 직후에는 어떤 상태인지, 비동기 처리가 성공적으로 수행됐을 때, 실패했을 때 어떤 상태인지 설명하세요.
 

3. 출력 결과를 설명하세요.
```js
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2));
  .then(() => console.log(3));
```


fetch함수의 return 값은 무엇인가? response를 감싼 (promise 객체 return값이 promise)

const p = new Promise()
p(resolve).then
생성자를 만들어서 쓰는 방식.

Promise.resolve().then()
static 함수 갖고와서 객체를 가져와서
바로바로 사용.
const Promise = {
  rosolve()
  then()
  catch() 이런 형태
}

Response {type: 'cors', url: 'https://dummyjson.com/xxx', redirected: false, status: 404, ok: false, … }
