1. 이벤트 핸들러 내부의 로직은 비반응형 로직, Effect 내부의 로직은 반응형 로직이라고 합니다. 이 둘의 차이점은 무엇일까요?

답:
- 이벤트 핸들러는 값이 변화해도 반응하여 재실행 되지 않는다.
- Effect는 값이 변화하면 재실행 된다.

2. 다음 코드의 문제점을 설명해주세요.

```js
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on('message', (receivedMessage) => {
      setMessages([...messages, receivedMessage]);
    });
    return () => connection.disconnect();
  }, [roomId, messages]);
  // ...
}
```

답: 서버에서 메시지를 받을 때 마다 Effect가 다시 실행되고, 연결도 재시작한다.

3. 다음 코드는 잘 작동하지만 문제점이 있습니다. 무엇일까요? 이를 개선하려면 어떻게 코드를 바꿔야할까요?

```js
function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ 진행사항 저장됨');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? '진행사항 저장' : '재연결 중...'}
    </button>
  );
}

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
```

답:
- isOnline 이 두 컴포넌트에서 같은 state임에도 불구하고 중복 정의된다.
- isOnline state를 App으로 끌어올리고 props로 내려준다