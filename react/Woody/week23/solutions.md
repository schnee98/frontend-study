# 👨‍🏫 week 23 - A

## ▣ [Reducer와 Context로 앱 확장하기](https://ko.react.dev/learn/scaling-up-with-reducer-and-context)

## ▣ [Ref로 값 참조하기](https://ko.react.dev/learn/referencing-values-with-refs)

## ▣ [Ref로 DOM 조작하기](https://ko.react.dev/learn/manipulating-the-dom-with-refs)

### 1️⃣ Q. useRef와 useState의 각각의 특징들을 말해주세요.

### useRef

-   **`useRef(initialValue)` 는 객체(`{ current: initialValue }`)을 반환합니다.**

-   **useRef는 `가변성(Mutable)` 데이터를 다룹니다.**  
    이 말은, ref.current 값을 자유롭게 변경할 수 있으며, 이러한 변경은 리렌더링을 트리거하지 않습니다.
-   **state를 바꿔도 리렌더 되지 않습니다.**

-   **렌더링 중에는 current 값을 읽거나 쓰면 안 됩니다.**  
    렌더링 중에 값을 수정하게 되면, 예상치 못한 동작이나 버그를 일으킬 수 있기 때문입니다.  
    ref는 일반적으로 렌더링 후 (예: useEffect 내에서) 접근하는 것이 안전합니다.

-   **렌더링 프로세스 외부에서 current 값을 수정 및 업데이트할 수 있습니다.**  
    "렌더링 프로세스 외부" : 컴포넌트가 렌더링되지 않는 시점, 즉 React의 렌더링 사이클 외부에서의 작업을 의미합니다.  
    컴포넌트가 이미 렌더링이 끝나고 난 이후, 혹은 렌더링이 시작되기 전의 상태입니다.  
    예를 들어, useEffect 훅에서 실행되는 코드나, 사용자 이벤트 핸들러(버튼 클릭 등)에서 발생하는 코드가 이에 해당합니다.

### useState

-   **`useState(initialValue)` 은 state 변수의 `현재 값`과 `setter 함수` [value, setValue] 를 반환합니다.**
-   **useState로 관리되는 상태는 `immutable(불변)`합니다.**  
    이 말은, 상태 값을 직접 변경할 수 없고, 새로운 값을 설정하기 위해서는 setState 함수를 사용해야 합니다.
-   **state를 바꾸면 리렌더 됩니다.**
-   **언제든지 state를 읽을 수 있습니다.**

<br/>

### 2️⃣ Q. useRef를 사용할 상황은 무엇이 있을까요?

컴포넌트가 일부 값을 저장해야 하지만 렌더링 로직에 영향을 미치지 않는 경우, refs를 선택합니다.

-   timeout IDs를 저장
-   다음 페이지에서 다루는 DOM 엘리먼트 저장 및 조작
-   JSX를 계산하는 데 필요하지 않은 다른 객체 저장

<br/>

### 3️⃣ Q. ref콜백이란 무엇인가요?

일반적으로 ref 속성에 useRef로 생성된 객체를 전달하는 방식으로 ref를 사용하지만,

**ref콜백이란 ref 속성에 함수를 전달하는 방법입니다.**

**`여러 개의 ref를 관리`하거나, `동적`이고 `조건적`인 ref 설정이 필요한 경우 사용할 수 있습니다.**

    ex )

    -   map이나 for 루프를 사용하여 여러 개의 DOM 요소를 생성할 때, 각 요소에 대한 ref를 동적으로 할당해야 할 때

    -   조건에 따라 DOM 요소를 렌더링할지 말지를 결정하거나, 특정 조건을 만족하는 요소만 ref에 할당해야 할 때

**ref 콜백 함수는 해당 DOM 요소가 생성(마운트)되거나 제거(언마운트)될 때 자동으로 호출됩니다.**

-   ref 콜백의 동작 방식

    렌더링 시점 :

    React는 컴포넌트를 렌더링할 때, 각 JSX 요소를 생성합니다.  
    이때, ref 속성이 콜백 함수로 설정되어 있으면, React는 해당 요소가 DOM에 추가되거나 제거될 때 이 콜백 함수를 호출합니다.

    -   요소가 DOM에 추가될 때:  
        요소가 처음으로 DOM에 추가되면, React는 그 요소의 참조를 ref 콜백 함수에 전달합니다.  
        (즉 콜백 함수의 첫 번째 인자는 해당 요소를 가리키는 DOM 노드입니다.)

    -   요소가 DOM에서 제거될 때:  
        React는 요소가 DOM에서 제거될 때도 ref 콜백 함수를 호출합니다.  
        이 경우, 콜백 함수는 null을 인자로 받습니다.  
        (이를 통해 콜백 함수가 해당 요소가 DOM에서 제거되었음을 알 수 있습니다.)
