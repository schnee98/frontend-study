1. 이전 상태를 청소하고 싶을 때 주로 사용한다. useEffect에서 콜백이 실행될 때마다 클린업 함수가 존재한다면, 그 클린업 함수를 실행한 뒤 에 콜백을 실행한다. 따라서 이벤트를 추가하기 이전에 등록했던 이벤트 핸들러를 삭제할 때 유용
2. useMemo는 변수를 메모이제이션하는 역할, useCallback은 함수를 메모이제이션하는 역할.
3. (1) 반환값인 객체 내부에 있는 current로 값에 접근 또는 변경가능

   (2) 값이 변하더라도 렌더링을 발생시키지 않음
