## 정답

1.

- Panel = controlled 컴포넌트
- Accordion = uncontrolled 컴포넌트

2.

### 코드 분석

**`InputA` 컴포넌트**

- `InputA`는 `defaultValue`를 초기값으로 사용하고, 내부적으로 상태(`state`)를 관리합니다. 사용자가 입력할 때 상태를 업데이트하고, `onChange` 콜백을 호출합니다. 이로 인해 `InputA`는 **Controlled** 컴포넌트입니다.

**`InputB` 컴포넌트**

- `InputB`는 `value`를 prop으로 받아서 입력 필드의 값을 제어합니다. `value`와 `onChange`를 부모로부터 받아서 입력 필드의 값을 컨트롤합니다. 이로 인해 `InputB`는 **Controlled** 컴포넌트입니다.

### 설명 분석

1. **`InputA와 InputB 모두 Controlled 패턴을 따르고 있다.`**
   - **해설**: `InputA`는 내부 상태를 사용하여 값을 제어하고, `InputB`는 부모로부터 받은 `value` prop으로 값을 제어합니다. 둘 다 입력 필드의 값을 부모 컴포넌트에서 제어할 수 있기 때문에 Controlled 패턴을 따릅니다. **정답입니다.**
2. **`InputA는 Uncontrolled, InputB는 Controlled 패턴을 따르고 있다.`**
   - **해설**: `InputA`는 내부 상태를 사용하여 값을 관리하므로 Controlled 패턴을 따릅니다. `InputB` 역시 Controlled 패턴을 따릅니다. 따라서 이 설명은 잘못되었습니다. **정답이 아닙니다.**
3. **`InputA를 사용하는 부모 컴포넌트는 사용자 입력 없이도 Input 엘리먼트의 값을 변경할 수 있다.`**
   - **해설**: `InputA`는 내부 상태를 사용하여 값을 관리하므로 부모 컴포넌트가 직접 `InputA`의 값을 변경할 수 없습니다. 부모 컴포넌트가 값을 변경하려면 `defaultValue` prop을 변경해야 합니다. 이 설명은 올바르지 않습니다. **정답이 아닙니다.**
     State는 첫 번째 렌더링 중에만 초기화됩니다.
4. **`InputA를 사용하면 input에 타이핑을 시도할 때 무한 렌더링이 발생한다.`**
   - **해설**: `InputA`는 `onChange` 핸들러가 호출될 때마다 상태를 업데이트하고, 상태 변경으로 인해 렌더링이 발생합니다. 하지만 무한 렌더링이 발생하지는 않습니다. 이 문제는 `InputB`와 같은 상태 관리 방식과는 다르게 동작할 수 있지만 무한 렌더링 문제는 아닙니다. **정답이 아닙니다.**

### 결론

올바른 설명은 다음과 같습니다:

1. **`InputA와 InputB 모두 Controlled 패턴을 따르고 있다.`**
