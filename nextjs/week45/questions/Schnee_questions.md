1. Waterfall 현상이 왜 좋지 않은지 설명하고, Waterfall 현상을 방지하는 방법 중 하나인 Preload 패턴에 대해서 설명해주세요.

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

3. ISR 과정에서 데이터를 revalidate 하는 도중 에러가 발생하면 어떻게 처리해야할까요?
