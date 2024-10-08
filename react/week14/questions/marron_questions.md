# 3.2 사용자 정의 훅과 고차 컴포넌트

1. 사용자 정의 훅과 고차 컴포넌트를 어떠한 경우에 사용해야하나요?

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

// React.memo는 ChildComponent만 변경  
// useMemo는 ChildComponent를 useMemo로 감싼 함수 필요
```
