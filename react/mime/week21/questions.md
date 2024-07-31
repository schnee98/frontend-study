# 리액트 공식문서 (2024.07.31(수))

[State를 사용해 Input 다루기](https://ko.react.dev/learn/reacting-to-input-with-state)<br/>
[State 구조 선택하기](https://ko.react.dev/learn/choosing-the-state-structure)<br/>
[컴포넌트 간 State 공유하기](https://ko.react.dev/learn/sharing-state-between-components)

## 문제

1. Panel, Accordion 컴포넌트는 각각 controlled 컴포넌트인가 uncontrolled 컴포넌트인가

```tsx
import { useState } from "react";

export default function Accordion() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<>
			<h2>Almaty, Kazakhstan</h2>
			<Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
				With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to
				1997, it was its capital city.
			</Panel>
			<Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
				The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often
				translated as "full of apples". In fact, the region surrounding Almaty is thought to be the
				ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a
				likely candidate for the ancestor of the modern domestic apple.
			</Panel>
		</>
	);
}

function Panel({ title, children, isActive, onShow }) {
	return (
		<section className="panel">
			<h3>{title}</h3>
			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
		</section>
	);
}
```

2. 이하 토스 멘토링 문제 중 1개 답은 GPT가 알려준거임

- Q19. 다음 코드 중 두 컴포넌트의 설계에 대한 설명으 올바른 것을 모두 고르세요.

  ```tsx
  interface InputAProps {
    defaultValue: string;
    onChange: (v: string) => void;
  }

  function InputA({ defaultValue, onChange }: InputAProps) {
    const [state, setState] = useState(defaultValue);

    return (
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          onChange(e.target.value);
        }}
      />
    );
  }

  interface InputBProps {
    value: string;
    onChange: (v: string) => void;
  }

  function InputB({ value, onChange }: InputBProps) {
    return (
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value);
        }
      />
    );
  }
  ```

  1. InputA와 InputB 모두 Controlled 패턴을 따르고 있다.

  2. InputA는 Uncontrolled, InputB는 Controlled 패턴을 따르고 있다.

  3. InputA를 사용하는 부모 컴포넌트는 사용자 입력 없이도 Input 엘리먼트의 값을 변경할 수 있다.

  4. InputA를 사용하면 input에 타이핑을 시도할 때 무한 렌더링이 발생한다.
