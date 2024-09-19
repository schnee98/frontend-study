## 1. useRef와 useState의 차이점을 설명하세요.

## 2. useRef는 React 내부적으로 useState를 사용하여 구현될 수 있습니다. 아래 코드에서 useState의 setter 함수가 사용되지 않는 이유를 설명하세요.

```
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```
