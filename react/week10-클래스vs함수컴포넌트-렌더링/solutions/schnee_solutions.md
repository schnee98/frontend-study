1. 클래스 컴포넌트 대신 함수 컴포넌트가 권장되는 이유를 설명해주세요.

답:
- 데이터의 흐름을 추적하기 어렵다.
- 애플리케이션 내부 로직의 재사용이 어렵다.
- 기능이 많아질수록 컴포넌트의 크기가 커진다.
- 클래스는 함수에 비해 상대적으로 어렵다.
- 코드 크기를 최적화 하기 어렵다.
- 코드에 변경사항이 생겼을 때 앱을 다시 시작하지 않고 변경된 코드만 업데이트 하는데에 불리하다. (핫 리로딩)

2. 리액트에서 컴포넌트의 리렌더링을 발생시키는 원인들을 설명해주세요.

답:
- 클래스 컴포넌트의 setState가 실행되는 경우
- 클래스 컴포넌트의 forceUpdate가 실행되는 경우
- 함수 컴포넌트의 useState()의 setter가 실행되는 경우
- 함수 컴포넌트의 useReducer()의 dispatch가 실행되는 경우
- 컴포넌트의 key props가 변경되는 경우
- props가 변경되는 경우
- 부모 컴포넌트가 리렌더링될 경우

3. 다음 컴포넌트는 버튼을 클릭해도 브라우저에서 변화가 일어나지 않습니다. 그 이유를 설명해주세요.
```
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`카운트의 값은 ${count}입니다.`);
  }, [count]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(0)}>버튼</button>
    </div>
  );
}

export default Counter;
```

답: 클릭 이벤트로 인해 리액트에서 렌더링을 진행하였으나 렌더링된 컴포넌트의 type, props, key의 값들이 이전 가상 DOM의 값들과 변경된 사항이 없어 커밋 단계로 가지 않았기 때문에