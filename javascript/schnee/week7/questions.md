1. 다음 코드에서 에러 캐치되지 않는 이유를 설명해주세요.

```
try {
  setTimeout(() => { throw new Error("error") }, 1000);
} catch (error) {
  console.error(error);
}
```

2. Promise에는 resolve와 reject가 있습니다. 이 둘은 무엇이고 어떤 역할을 할까요?

3. 다음 코드가 좋지 않은 이유를 설명해주세요.

```
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

requestData1
  .then(() => requestData2)
  .then(() => requestData3);
```
