# 👨‍🏫 week 22 - A
## ▣ [State를 보존하고 초기화하기](https://ko.react.dev/learn/preserving-and-resetting-state)

## ▣ [state 로직을 reducer로 작성하기](https://ko.react.dev/learn/extracting-state-logic-into-a-reducer)

## ▣ [Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context)

### 1️⃣ Q. React는 컴포넌트를 무엇을 기반으로 식별하나요? 

`컴포넌트 트리`의 `구조`와 `위치`를 기반으로 식별합니다.

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
`삼항 연산자`를 사용하면 한 번에 하나의 컴포넌트만 렌더링됩니다.  
React는 이 두 컴포넌트를 동일한 위치에 렌더링된다고 간주합니다.  

이로 인해 두 컴포넌트는 동일한 상태를 공유하게 되며, 상태가 유지됩니다.

```js
export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

```
`&&` 연산자를 사용하여 `조건부 렌더링`을 수행하면 React는 두 컴포넌트를 서로 다른 위치에 렌더링된 별개의 컴포넌트로 인식합니다.  
따라서 각 컴포넌트의 상태가 `독립적`으로 관리되며, 상태가 초기화되지 않습니다.

<br/>

### 3️⃣ Q. Context를 사용하기 전에 고려할 것은 무엇이 있을까요?
어떤 props를 여러 레벨 깊이 전달해야 한다고 해서 해당 정보를 context에 넣어야 하는 것은 아닙니다.

1. **Props 전달하기로 시작하기**   
데이터의 흐름이 props를 통해 분명해져 코드를 유지보수 하기에도 좋습니다.  

2. **컴포넌트를 추출하고 JSX를 children으로 전달하기**   

  ```js
  <Layout posts={posts} />
  ⬇
  <Layout><Posts posts={posts} /><Layout>
  ```
  
  이렇게 하면 데이터를 지정하는 컴포넌트와 데이터가 필요한 컴포넌트 사이의 층수가 줄어듭니다.


만약 이 접근 방법들이 잘 맞지 않는다면 context를 고려해보세요.

<br/>
