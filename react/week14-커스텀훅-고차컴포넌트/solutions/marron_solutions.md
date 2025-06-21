# 3.2 사용자 정의 훅과 고차 컴포넌트

1. 사용자 정의 훅과 고차 컴포넌트를 어떠한 경우에 사용해야하나요?

_답_

```
사용자 정의 훅: 내부에 리액트 훅을 사용, 내부에서 같은 로직을 공유하고자 할 때
고차 컴포넌트: 고차함수, 컴포넌트 자체를 재사용하기 위한 방법

단순히 리액트에서 제공하는 훅으로만 공통 로직을 격리할 수 있다면 사용자 정의 훅을 사용하는 것이 좋다.
```

2. 아래의 코드를 ChildComponent를 React.memo, useMemo를 사용해 리렌더링이 발생하지 않도록 변경해주세요.

```js
const ChildComponent = ({value} : {value: string} => {
  useEffect(() => {
    console.log("렌더링!")
  })

  return <>hi! {value}</>
})

function ParentComponent() {
  const [state, setState] = useState(1);

  function handleChange() {
    ...
  }

  return (
    <>
      <input type="number" value={state} onChange={handleChange}>
      <ChildComponent value="hello">
    </>
  )

}
```

_답_

```js
// React.memo
// ChildComponent memo로 감싸주기만 하면 된다
const ChildComponent = memo({value} : {value: string} => {
  useEffect(() => {
    console.log("렌더링!")
  })

  return <>hi! {value}</>
})

// useMemo
// component useMemo로 감싸주고 할당식을 사용
const MemoizedChildComponent = useMemo(() => {
  return <ChildComponent value="hello" />
}, [])

return (
    <>
      <input type="number" value={state} onChange={handleChange}>
      {MemoizedChildComponent}
    </>
)
```
