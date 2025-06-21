## 정답

1. React에서 컴포넌트를 호출하는 것
2. React는 렌더링 간에 차이가 있는 경우에만 DOM 노드를 변경한다. 예를 들어 매초 부모로부터 전달된 다른 props로 다시 렌더링하는 컴포넌트가 있습니다. <input>에 텍스트를 입력하여 value를 업데이트 하지만 컴포넌트가 리렌더링될 때 텍스트가 사라지지 않는다. 마지막 단계에서 React가 <h1>의 내용만 새로운 time으로 업데이트하기 때문이다. <input>이 JSX에서 이전과 같은 위치로 확인되므로 React는 <input> 또는 value를 건드리지 않는다!
3. 1<br/>
   setNumber(number + 1)를 세 번 호출했지만, 이 렌더링에서 이벤트 핸들러에서 number는 항상 0이므로 state를 1로 세 번 설정합니다.

```
<button onClick={() => {
  setNumber(0 + 1);
  setNumber(0 + 1);
  setNumber(0 + 1);
}}>+3</button>
```
