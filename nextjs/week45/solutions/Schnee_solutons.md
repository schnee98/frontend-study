1. Waterfall 현상이 왜 좋지 않은지 설명하고, Waterfall 현상을 방지하는 방법 중 하나인 Preload 패턴에 대해서 설명해주세요.

답:

- Waterfall

  - 요청이 서로 의존하게 되면 요청이 **순차적으로 부르게 되며 한 요청이 다른 요청을 블로킹하게 됨**.
  - 위 요청 시간 흐름을 시각적으로 나타낼 때 보이는 모습이 폭포와 같다고 해서 Waterfall 현상이라함.

- Preload 패턴

  - 블로킹 (await으로 블로킹하는) 하는 요청이 있을 때, 그 앞에 필요한 요청을 미리 호출한다. (캐싱을 위함)

2. 아래 컴포넌트를 useActionState를 사용해서 수정해주세요.

```typescript
"use client";

import { useState } from "react";
import { createUser } from "@/app/actions";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, setState] = useState(initialState);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const response = await createUser(formData);

    setState(response);
    setPending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  );
}
```

답:

```typescript
"use client";

import { useActionState } from "react";
import { createUser } from "@/app/actions";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  );
}
```

3. ISR 과정에서 데이터를 revalidate 하는 도중 에러가 발생하면 어떻게 처리해야할까요?

슈니 생각:

- 따로 에러를 throw 하지 않는다.
- 대신 특정 횟수만큼 retry를 한다.
- retry를 계속 진행해도 revalidate가 성공적으로 되지 않으면 마지막으로 생성된 데이터 캐시를 보여준다.
