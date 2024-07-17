# 👨‍🏫 week 19 - A

## ▣ [State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory)
## ▣ [렌더링 그리고 커밋](https://ko.react.dev/learn/render-and-commit)
## ▣ [스냅샷으로서의 State](https://ko.react.dev/learn/state-as-a-snapshot)

### 1️⃣ Q. 컴포넌트를 새로운 데이터로 업데이트하기 위해 필요한 두 가지는 무엇인지 React훅과 함께 설명해주세요
1. 렌더링 사이에 데이터를 `유지`  
2. React 가 새로운 데이터로 컴포넌트를 렌더링하도록 `유발`  

🔽  

`useState`훅은 이 두 가지를 제공합니다.  
1. 렌더링 간에 데이터를 유지하기 위한 `state 변수`  
2. 변수를 업데이트하고 React가 컴포넌트를 다시 렌더링하도록 유발하는 `state setter 함수`  

<br/>

### 2️⃣ Q. hook을 반복문에서 사용할 수 없는 이유는 무엇인가요?

<b>상태의 일관성을 유지하고 React가 각 상태를 올바르게 추적하도록 하기 위함입니다.</b>  

React는 컴포넌트가 렌더링될 때마다 이 상태들을 관리하기 위해 내부적으로 배열에 상태를 저장하고 인덱스를 증가시킵니다.  
이 방식으로 각 상태가 올바른 위치에 매핑됩니다.

React는 훅이 항상 같은 순서로 호출되는 것을 보장합니다.  
따라서 컴포넌트 렌더링 중 조건문이나 반복문 안에서 훅을 사용하면 호출 순서가 변경될 수 있어 React의 상태 관리 방식이 깨지게 됩니다.

<br/>

### 3️⃣ Q. 아래 코드의 결과 값과 그 이유는 무엇인가요?

button을 클릭했을 때 number 상태 값?

1) 
  ```js
  import { useState } from 'react';

  export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}>+3</button>
      </>
    )
  }
  ```
  결과 : `1`  


  이 경우에는 setNumber 함수가 동일한 값을 사용하여 상태를 업데이트합니다. React는 동일한 값을 여러 번 설정하는 경우 배치를 통해 최종 상태만을 반영하게 됩니다. 

  <br/>

  <details>
    <summary><b>*batching</b></summary>
    React는 state 업데이트를 하기 전에 이벤트 핸들러의 모든 코드가 실행될 때까지 기다립니다.  

    동일한 값으로 상태 업데이트 시, 중복된 호출은 무시되고 마지막 값만 적용됩니다.  
    서로 다른 값이나 함수형 업데이트는 개별적으로 처리되어 각각의 상태 업데이트가 반영됩니다.
  </details>

<br/>

2)
```js
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42);
      }}>Increase the number</button>
    </>
  )
}
```
결과 `42`  

이 경우에는 setNumber 함수가 다른 방식으로 상태를 업데이트합니다.  

React는 *함수형 업데이트(n => n + 1)와 직접 값 업데이트(number + 5, 42)를 구별하고 각각을 별도의 상태 업데이트로 처리합니다.    
이 경우 각 호출이 서로 다른 값을 생성하므로 React는 배치를 통해 각 호출을 차례대로 처리하게 됩니다.

  <br/>

  <details>
    <summary><b>*함수형 업데이트</b></summary>
  
  함수형 업데이트는 이전 상태를 인수로 받아 새로운 상태를 반환하는 함수입니다.   

  ```js
  setNumber(prevNumber => prevNumber + 1);
  ```

  여기서 prevNumber는 항상 최신 상태 값을 참조합니다.   
  따라서 함수형 업데이트는 캡처된 상태 값을 사용하지 않고, 현재 상태를 기준으로 상태를 업데이트합니다.
  (React가 상태를 업데이트하는 동안 최신 상태를 사용하도록 보장합니다.)
  </details>


<br/>

