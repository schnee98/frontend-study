# 👨‍🏫 week 22 - Q

## ▣ [State를 보존하고 초기화하기](https://ko.react.dev/learn/preserving-and-resetting-state)

## ▣ [state 로직을 reducer로 작성하기](https://ko.react.dev/learn/extracting-state-logic-into-a-reducer)

## ▣ [Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context)

### 1️⃣ Q. React는 컴포넌트를 무엇을 기반으로 식별하나요? 


<br/>

### 2️⃣ Q. Counter 컴포넌트의 상태를 유지하고 싶습니다. 아래의 코드에서는 왜 문제가 발생하나요? 해결 방법은 무엇인가요?
```js
export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter person="Taylor" />
      ) : (
        <Counter person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
```

<br/>

### 3️⃣ Q. Context를 사용하기 전에 고려할 것은 무엇이 있을까요?

<br/>
