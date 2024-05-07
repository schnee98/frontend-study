# 
1. 

_답_
```
```

2. 리액트 리렌더링이 일어나는 경우에 대해 설명하시오.

_답_
```
- setState가 실행되는 경우
- forceUpdate가 실행되는 경우 : 리렌더링을 자동으로 실행할 수 없을 때 실행 (render 내부에서 사용하면 안돼)

- useState의 setter 실행되는 경우
- useReducer의 dispatch 실행되는 경우
(useState, useReducer 모두 상태와 업데이트하는 함수를 배열로 제공.)
- 컴포넌트의 key props가 변경되는 경우
- props 변경되는 경우
- 부모 컴포넌트가 렌더링 되는 경우
```
