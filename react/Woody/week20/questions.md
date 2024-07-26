# 👨‍🏫 week 20 - Q

## ▣ [state 업데이트 큐](https://ko.react.dev/learn/queueing-a-series-of-state-updates)
## ▣ [객체 State 업데이트하기](https://ko.react.dev/learn/updating-objects-in-state)
## ▣ [배열 State 업데이트하기](https://ko.react.dev/learn/updating-arrays-in-state)

### 1️⃣ Q. React에서는 컴포넌트의 상태(state)로 객체를 포함한 다양한 자바스크립트 값들을 관리할 수 있습니다. 그러나 상태로 사용되는 객체나 배열을 직접 변경하는 것은 권장되지 않습니다. 상태를 업데이트할 때는 새로운 객체나 배열을 생성하거나 기존 객체의 복사본을 만들어 사용해야 합니다. 이러한 방식을 사용하는 이유는 무엇인가요?

<br/>

### 2️⃣ Q. 기존 객체의 복사본을 만들어 사용한 아래의 코드의 문제는 무엇인가요?
```
  const nextList = [...list];
  nextList[0].seen = true; 
  setList(nextList);
```

<br/>


