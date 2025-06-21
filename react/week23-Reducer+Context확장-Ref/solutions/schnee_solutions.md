11. 다음은 리액트에서 제공한 useRef의 일부분입니다. useRef가 useState로 구현되어 있는데 useRef의 값을 바꾸어도 리렌더링이 되지 않는 이유는 무엇일까요?

```js
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

답: ref는 객체이고, current의 값을 바꾸는 동작은 ref의 참조 값을 바꾸지 않기 때문에 ref가 변경되었다고 인식하지 않는다.

2. Ref를 탈출구라고 부르는 이유는 무엇일까요?

답: Ref를 활용해 리액트 외부의 시스템이나 브라우저 API (DOM) 을 사용할 수 있기 때문에 (리액트 외부로 탈출하여 값을 사용한다라는 뜻으로 추정)

3. useRef 를 이용해 input 태그에 마우스 커서를 올리면 input 이 포커스 되고, 마우스 커서를 input 밖으로 움직이면 포커스 전 상태로 되돌리는 코드를 작성해주세요.

힌트: focus, blur

```js
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
    </>
  )
}
```

답:

```js
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleMouseOver() {
    inputRef.current.focus();
  }

  function handleMouseLeave() {
    inputRef.current.blur();
  }

  return (
    <>
      <input
        ref={inputRef}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
```