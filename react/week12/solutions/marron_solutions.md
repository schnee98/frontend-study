# 3장 리액트 훅 파헤치기

## useState, useEffect, useMemo, useCallback, useRef

1. useEffect의 경쟁상태란?

_답_

```
useEffect에서 비동기로 함수를 호출할 경우 응답이 이전 state로 나오는 문제가 발생할 수 있는데 이를 경쟁상태라 한다.
useEffect의 인수로 비동기 함수를 지정할 수 없지만 비동기 함수 실행 자체는 가능하다. 다만 비동기 함수가 내부에 존재하게 되면
useEffect 내부에서 비동기 함수가 생성되고 실행되는 것을 반복하므로 클린업 함수에서 이전 비동기 함수에 대한 처리를 추가하는 것이 좋다.
```

2. useMemo와 useCallback의 차이점에 대해 설명하시오.

_답_

```
useMemo는 결과값을, useCallback은 인수로 넘겨받은 콜백을 기억한다.
```

3. useRef와 useState의 차이점 두 가지에 대해 설명하시오.

_답_

```
useRef는 반환값인 객체 내부에 있는 current로 값에 접근 또는 변경할 수 있다.
useRef는 값이 변하더라도 렌더링을 발생시키지 않는다.
```
