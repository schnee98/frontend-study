# 👩‍🏫 week 8 - A

## ▣ 38장: 브라우저의 렌더링 과정

## ▣ 42장: 비동기 프로그래밍

## ▣ 46장: 제너레이터와 async/await

### 1️⃣ Q. script 태그의 attribute에는 async, defer에 대해 설명해주세요.

-   async 어트리뷰트  
    HTML파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행됩니다.  
     <b>단, 자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이 때 HTML 파싱이 중단됩니다.</b>

    <img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/744a6bff-8bd4-4cc2-837b-3a0d880fef96" width="500"/>

-   defer 어트리뷰트  
    async 어트리뷰트와 마찬가지로 HTML파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행됩니다.  
     <b>단, 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후 진행 됩니다.</b>

    <img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/dad12af7-9a61-447e-8d21-252d21a2eaf3" width="500"/>

### 2️⃣ Q. 브라우저 환경에서 아래 예제가 어떻게 동작할지 이야기해보세요.

   <img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/8c1fa052-d212-417f-8051-3007db1854bb" width="500"/>

<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/edca94ce-0799-4ab0-8221-db0063b5f61e" width="500"/>
<img src="https://github.com/codesquad-members-2024/fe-newsstand-react/assets/96780693/d043288f-c33b-49d3-bad9-933d7bf719e3" width="500"/>

### 3️⃣ Q. 제너레이터 함수의 정의는 무엇이고, 일반 함수와 어떻게 다른가요?

제너레이터 함수는 JavaScript에서 특별한 유형의 함수로, function\* 키워드를 사용해 정의합니다.  
이 함수는 호출될 때 실행이 즉시 시작되지 않고, 대신 제너레이터 객체를 반환합니다.  
제너레이터 객체는 함수의 실행을 제어할 수 있는 수단을 제공하며, next() 메소드를 호출할 때마다 함수 내의 다음 yield 표현까지 실행하고 다시 중단됩니다.

-   정의 방식: 제너레이터 함수는 function\* 키워드를 사용해 정의하고, 일반 함수는 function 키워드를 사용합니다.

-   실행 제어: 제너레이터 함수는 yield 키워드를 사용하여 함수의 실행을 중간에 멈추고 다시 시작할 수 있습니다. 이러한 특징 덕분에 함수의 실행을 외부에서 제어할 수 있으며, 이터러블 및 이터레이터 프로토콜을 사용하여 반복적으로 데이터를 생성할 수 있습니다.

-   반환 값과 상태: 일반 함수는 호출 시 즉시 실행되어 값을 반환하고 종료되지만, 제너레이터 함수는 제너레이터 객체를 반환하고, 이 객체를 통해 함수의 실행 상태를 관리할 수 있습니다.  
    next() 메소드를 호출하면 { value, done } 형태의 객체가 반환되어 현재 yield된 값과 함수의 실행 완료 여부를 알 수 있습니다.

-   유연성: 제너레이터는 필요에 따라 값을 계산하고 반환하는 데 사용되므로, 큰 데이터 셋을 다룰 때나 계산 비용이 높은 연산을 수행할 때 메모리 효율성을 증가시킬 수 있습니다.  
     일반 함수는 호출될 때마다 시작부터 끝까지 실행되어야 하며, 중간에 실행을 멈출 수 없습니다.
