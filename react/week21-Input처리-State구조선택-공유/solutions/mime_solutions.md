## 정답

1.

- Panel = controlled 컴포넌트
- Accordion = uncontrolled 컴포넌트

2.

- **InputA와 InputB 모두 Controlled 패턴을 따르고 있다.**
  - **오답**: `InputA`는 내부 상태를 관리하기 때문에 Uncontrolled 컴포넌트입니다. 반면에 `InputB`는 Controlled 컴포넌트입니다.
- **InputA는 Uncontrolled, InputB는 Controlled 패턴을 따르고 있다.**
  - **정답**: `InputA`는 내부적으로 상태를 관리하기 때문에 Uncontrolled 컴포넌트입니다. 반면에 `InputB`는 부모로부터 `value`를 받아 상태를 제어하기 때문에 Controlled 컴포넌트입니다.
- **InputA를 사용하는 부모 컴포넌트는 사용자 입력 없이도 Input 엘리먼트의 값을 변경할 수 있다.**
  - **오답**: `InputA`는 초기 `defaultValue`만 부모 컴포넌트로부터 받고, 이후로는 내부 상태로 관리됩니다. 따라서 부모 컴포넌트는 사용자 입력 없이 값을 변경할 수 없습니다.
- **InputA를 사용하면 input에 타이핑을 시도할 때 무한 렌더링이 발생한다.**
  - **오답**: `InputA`는 `setState`를 사용하여 상태를 업데이트하고, `onChange` 콜백을 통해 부모 컴포넌트에 새로운 값을 전달합니다. 이 과정에서 무한 렌더링이 발생하지 않습니다.
