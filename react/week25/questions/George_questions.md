## 1. useEffectEvent에 대해 설명하세요.

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

## 3. Hook의 이름이 항상 use로 시작해야하는 이유를 설명하세요.