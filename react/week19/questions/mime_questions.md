# 리액트 공식문서 (2024.07.17(수))

[State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory)<br/>
[렌더링 그리고 커밋](https://ko.react.dev/learn/render-and-commit)<br/>
[스냅샷으로서의 State](https://ko.react.dev/learn/state-as-a-snapshot)

## 문제

1. 리액트에서 렌더링이란?
2. 이하 input에 값을 입력해도 value가 사라지지 않는다. 왜일까?

```js
export default function Clock({ time }) {
	return (
		<>
			<h1>{time}</h1>
			<input />
		</>
	);
}
```

3. +3의 버튼을 누르면 h1의 숫자는 어떻게 될까?

```
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
