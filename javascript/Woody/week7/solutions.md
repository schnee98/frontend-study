# 👩‍🏫 week 7 - A

## ▣ 45장: 프로미스

### 1️⃣ Q. 에러를 캐치하지 못하는 이유는 무엇인가요?

<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/cf5e46d9-10bd-4c6e-92d6-b0688c1917b2" width="500"/>

<i>\* 코드 실행 순서</i>

    1. 비동기함수인 setTimeout이 호출되면
    2. setTimeout 함수의 실행 컨텍스트가 생성되어 콜스택에 푸시되어 실행됩니다.
    3. setTimeout은 비동기 함수이므로 콜백 함수가 호출되는 것을 기다리지 않고 즉시 종료되어 콜 스택에서 제거됩니다.
    4. 이 후 타이머가 만료되면 setTimeout함수의 콜백 함수는 태스크 큐로 푸시되고
    5. 콜 스택이 비어졌을 때 이벤트 루프에 의해 콜스택으로 푸시되어 실행됩니다.

에러는 caller(호출자)방향으로 전파됩니다.

setTimeout 함수의 콜백함수가 실행될 때 setTimeout함수는 이미 콜스택에서 제거된 상태 이므로,  
setTimeout 함수의 콜백함수의 caller(호출자)는 setTimeout함수가 아닙니다.

따라서 setTimout함수의 콜백 함수가 발생시킨 에러는 catch블럭에서 캐치하지 못합니다.

### 2️⃣ Q. 프로미스의 상태정보에는 pending, fulfilled, rejected 가 있습니다. 각각의 상태 정보를 설명해주세요.

-   pending 상태는 비동기 처리가 아직 수행되지 않은 상태이자, 프로미스가 생성된 직후 기본 상태입니다.
-   fulfilled 상태는 비동기 처리가 수행되고, 성공한 상태이자, resolve 함수가 호출되었을 때의 상태입니다.
-   rejected 상태는 비동기 처리가 수행되고, 실패한 상태이자, reject 함수가 호출되었을 때의 상태입니다.

### 3️⃣ Q. 다음 fetch함수 사용 결과와 이유는 무엇인가요?

<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/ee1f9733-e598-4be8-b124-a039cdd936f1" width="500"/>

부적절한 URL이 지정되었기 때문에 404 Error가 발생하고, catch 후속처리 메서드에 의해서 'error'가 출력될 것처럼 보이지만,  
fetch함수가 반환하는 프로미스는 기본적으로 404,500 Error와 같은 HTTP Error가 발생해도 에러를 reject하지않고,  
불리언 타입의 ok상태를 false로 설정한 Response객체를 resolve합니다.  
그러므로 'ok'가 출력됩니다.  
<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/f3d15ab4-670b-4531-9e5d-6626b50e3746" width="600"/>

(오프라인 등의 네트워크 장애나 CORS에러에 의해 요청이 완료되지 못한 경우에만 프로미스를 reject합니다.
따라서, 명시적으로 에러를 처리할 필요가 있습니다.)
<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/9bc574e0-54d0-46db-be4c-68f532c6b3c9" width="400"/>
