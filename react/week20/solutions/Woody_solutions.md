# 👨‍🏫 week 20 - A

## ▣ [state 업데이트 큐](https://ko.react.dev/learn/queueing-a-series-of-state-updates)
## ▣ [객체 State 업데이트하기](https://ko.react.dev/learn/updating-objects-in-state)
## ▣ [배열 State 업데이트하기](https://ko.react.dev/learn/updating-arrays-in-state)

### 1️⃣ Q. React에서는 컴포넌트의 상태(state)로 객체를 포함한 다양한 자바스크립트 값들을 관리할 수 있습니다. 그러나 상태로 사용되는 객체나 배열을 직접 변경하는 것은 권장되지 않습니다. 상태를 업데이트할 때는 새로운 객체나 배열을 생성하거나 기존 객체의 복사본을 만들어 사용해야 합니다. 이러한 방식을 사용하는 이유는 무엇인가요?

React가 상태 변경을 감지하고 컴포넌트를 적절히 업데이트하기 위해서는 이전 상태와 새로운 상태가 명확히 구분되어야 하기 때문입니다.  

상태 객체나 배열을 직접 수정하게 되면, 메모리 상에서 해당 객체의 참조는 변경되지 않습니다.  
따라서 React는 이전 상태와 비교했을 때 차이점을 감지하지 못하고, 결과적으로 컴포넌트의 리렌더링이 발생하지 않을 수 있습니다.    

이는 데이터가 변경되었음에도 불구하고 UI가 업데이트되지 않는 문제로 이어질 수 있습니다.  

<br/>

### 2️⃣ Q. 기존 객체의 복사본을 만들어 사용한 아래의 코드의 문제는 무엇인가요?
```
  const nextList = [...list];
  nextList[0].seen = true; 
  setList(nextList);
```

스프레드 연산자는 `얕은 복사`이기 때문에 `nextList`와 `list`는 서로 다른 배열이지만,   
`nextList[0]`과 `list[0]`은 동일한 객체를 가리킵니다.  

배열을 복사하더라도 배열 내부 에 기존 항목을 직접 변경해서는 안됩니다.   
`nextList[0].seen`을 변경하면 `list[0].seen`도 변경됩니다.  
이것은 `state 변경`이므로 피해야 합니다.  

<br/>


