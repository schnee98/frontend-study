## 1. useEffectEvent에 대해 설명하세요.
- useEffectEvent는 React의 실험적인 Hook으로, Effect 내부의 비반응형 로직을 분리하기 위해 사용됩니다. 주요 목적은 useEffect의 불필요한 재실행을 방지하는 것입니다.

## 2. 아래 코드는 input에 입력을 할 때마다 useEffect가 실행되어 채팅방에 매번 다시 연결하고 있습니다. useEffect가 입력할 때마다 재실행되는 이유를 설명하고 해결방법을 알려주세요. 

```
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}
```

- 위 코드에서 useEffect 훅이 예상보다 자주 실행되는 이유는 options 객체가 매 렌더링마다 새로운 객체로 생성되기 때문입니다. 자바스크립트에서 객체는 참조에 의해 비교되므로, options 객체가 매번 새로 생성되면 그 참조는 매 렌더링마다 달라집니다. 이로 인해 useEffect의 의존성 배열에 있는 options가 변경되었다고 React가 판단하고, useEffect 훅을 다시 실행하게 됩니다.

- 이 문제를 해결하기 위해 useEffect의 의존성 배열을 수정하여 options 객체를 직접 의존성으로 지정하는 대신, options 객체를 구성하는 원시 값들만을 의존성 배열에 포함시켜야 합니다.

- roomId가 변경될 때만 useEffect가 실행되도록 하기 위해, options 객체를 useEffect 내부에서 생성하고, roomId만을 의존성 배열에 포함시키면 됩니다. 이렇게 하면 roomId가 변경될 때만 useEffect가 실행됩니다.

```
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // roomId만 의존성 배열에 포함

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

```

## 3. Hook의 이름이 항상 use로 시작해야하는 이유를 설명하세요.
- use로 이름이 시작하면, state, Effect 및 다른 React 기능들이 “숨어” 있는지 알 수 있게 해줍니다. 예를 들어, 만약 컴포넌트 안에 getColor()라는 함수를 보았다면, 해당 함수의 이름이 use로 시작하지 않으므로 함수 안에 React state가 없다는 것을 확신할 수 있습니다. 반대로 use로 시작하는 함수의 경우 내부에 다른 React Hook을 사용하고 있음을 알 수 있습니다.