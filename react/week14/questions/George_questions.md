## 1. 아래 코드가 실행되도록 throttle을 고차함수로 만들어보세요.
```
const handleMouseMove = () => {
    console.log("실행");
};

const throttleMouseMove = throttle(handleMouseMove, 1000);

document.addEventListener('mousemove', throttleMouseMove);
```

## 2. 아래 코드가 실행되도록 debounce를 고차함수로 만들어보세요.
```
const handleMouseMove = () => {
    console.log("실행");
};

const debouncedMouseMove = debounce(handleMouseMove, 1000);

document.addEventListener('mousemove', debouncedMouseMove);
```
------

1. 사용자 정의 훅(custom hook)이란 무엇인가요?
2. 고차 컴포넌트(Higher Order Component)란 무엇인가요? 
3. 커스텀 훅과 고차 컴포넌트를 사용하는 기준을 설명해주세요.
4. 사용자 정의 훅과 고차 컴포넌트의 네이밍 규칙을 설명하세요.
5. React.memo는 무엇인가요?
6. React.memo가 필요한 상황을 설명해주세요.
7.  고차 컴포넌트 사용 시 주의해야 할 점은 무엇인가요?
8.  고차 컴포넌트에 적용된 두 가지 개념을 나열하세요.(힌트: 247페이지)
9. 주어진 코드를 React.memo와 useMemo를 사용해 리렌더링이 발생하지 않도록 변경하세요.
```
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