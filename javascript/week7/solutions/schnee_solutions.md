1. 다음 코드에서 에러 캐치되지 않는 이유를 설명해주세요.

```
try {
  setTimeout(() => { throw new Error("error") }, 1000);
} catch (error) {
  console.error(error);
}
```

답:
콜백 함수의 호출자가 `setTimeout`이 아니기 때문에 에러가 캐치 되지 않는다.
-> 호출자가 `setTimeout` 이려면, `setTimeout`이 콜백 함수의 하위 실행 컨텍스트여야 하는데,
비동기 콜백 함수는 콜 스택이 비어있을 때 실행되기 때문에 콜백 함수의 호출자가 아니다.

2. Promise에는 resolve와 reject가 있습니다. 이 둘은 무엇이고 어떤 역할을 할까요?

답:
- Promise의 콜백 함수
- resolve는 PromiseStatus를 fulfilled로 변경하고, 인자를 PromiseValue에 저장 후, 새로운 프로미스를 반환
- reject는 PromiseStatus를 rejected로 변경하고, 인자를 PromiseValue에 저장 후, 새로운 프로미스를 반환

3. 다음 코드가 좋지 않은 이유를 설명해주세요.

```
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

requestData1
  .then(() => requestData2)
  .then(() => requestData3);
```

답:
비동기 함수들이 서로 의존하지 않는데 순차적으로 실행되기 때문에 처리 시간이 불필요하게 길어진다.