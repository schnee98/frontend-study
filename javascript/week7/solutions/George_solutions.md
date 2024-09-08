
### 1. promise 상태에서 대해 설명하세요.
 - 대기(pending): 비동기 처리가 아직 수행되지 않은 상태
 - 이행(fulfilled): 비동기 처리가 수행된 상태(성공)
 - 거부(rejected): 비동기 처리가 수행된 상태(거부)

### 2. `promise.all`, `promise.race`, `promise.allSettled`를 설명하세요.
 - promise.all : 
   - 여러 개의 비동기 처리를 모두 병렬 처리할때 사용한다.
   - 비동기 처리는 서루 의존하지 않고 개별적으로 수행된다.
   - 프로미스가 하나라도 rejected 상태가 되면 즉시 종료한다.
  
 - promise.race:
   - 모든 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve 하는 새로운 프로미스를 반환한다.
   - 프로미스가 rejected 상태가 되면 all메서드와 동일하게 처리된다.
  
 - promise.allSettled:
   - 전달 받은 프로미스가 모드 settled 상태가 되면 처리 결과를 배열로 반환한다.
   - fulfilled, rejected 상태와 상관 없이 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨있다.

### 3. 다음 예제는 부적절한 url이 지정되었지만 catch가 아닌 then의 "ok"가 출력 됩니다. 그 이유를 설명하고 에러를 처리할 수 있게 리펙토링 해보세요.
```
const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

fetch(wrongUrl)
.then(() => console.log("ok"))
.catch(() => console.log("error"))
```

 - fetch 함수가 반환하는 프로미스는 http 에러가 발생하면 에러를 reject하지 않고 Response 객체의 불리언 타입의 ok상태를 false로 설정한 Response 객체를 resolve한다.

```
const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

fetch(wrongUrl)
.then(response => {
    if (!response) throw new Error(response.statusText)
    return response.json()
})

```