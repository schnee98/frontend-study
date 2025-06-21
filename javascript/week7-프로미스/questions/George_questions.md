
### 1. promise 상태에서 대해 설명하세요.

### 2. `promise.all`, `promise.race`, `promise.allSettled`를 설명하세요.

### 3. 다음 예제는 부적절한 url이 지정되었지만 catch가 아닌 then의 "ok"가 출력 됩니다. 그 이유를 설명하고 에러를 처리할 수 있게 리펙토링 해보세요.
```
const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

fetch(wrongUrl)
.then(() => console.log("ok"))
.catch(() => console.log("error"))
```