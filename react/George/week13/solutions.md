## 1. useEffect와 useLayoutEffect의 차이점을 설명하고 useLayoutEffect는 언제 사용하면 좋은지 설명하세요.

- useLayoutEffect는 브라우저에 변경 사항이 반영되기 전에 실행되는 반면 useEffect는 브라우저에 변경 사항이 반영된 이후에 실행된다.
- DOM은 계산 됐지만 이것이 화면에 반영되기 전에 하고 싶은 작업이 있을때 사용하는것이 좋다 
ex) 특정 요소에 따라 DOM 요소를 기반으로 한 애니메이션, 스크롤 위치를 제어하는 등

## 2. 훅의 규칙을 설명하세요.
- 최상위에서만 훅을 호출해야한다.
- 반복문, 조건문, 중첩된 함수 내에서 훅을 실행할 수 없다.
- 훅을 호출할 수 있는 것은 리엑트 함수 컴포넌트, 사용자 정의 훅 두 가지 경우뿐이다.
- 일반 JS함수에서는 훅을 사용할 수 없다.

## 3. fowardRef와 useImperativeHandle을 설명하세요.
### fowardRef
- 상위 컴포넌트에서 하위 컴포넌트로 ref를 props로 넘겨줄때 일반 예약어(ref)는 props로 사용할 수 없다. 따라서 예약어로 지정된 ref대신 다른 이름으로 props를 내려줘야 한다.
- fowardRef를 사용하면 예약어로 props를 사용할 수 있으며 좀 더 확실하게 ref를 전달할 것임을 예측할 수 있고 네이밍 규칙으로부터 일관성을 유지할 수 있다.

### useImperativeHandle
- useImperativeHandle은 부모에게서 넘겨받은 ref를 원하는 대로 수정하고 노출되는 값을 바꿀 수 있는 훅이다.