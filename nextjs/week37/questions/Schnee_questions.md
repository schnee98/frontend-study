1. 다음은 tailwind + clsx로 status의 상태 값에 따라 다른 클래스를 주도록 만든 코드입니다. 이를 css modules + clsx로 작성해주세요 (속성은 쓸 필요 X)

```typescript
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx("inline-flex items-center rounded-full px-2 py-1 text-sm", {
        "bg-gray-100 text-gray-500": status === "pending",
        "bg-green-500 text-white": status === "paid",
      })}
    >
      // ...
    </span>
  );
}
```

2. 폰트로 인해 누적 레이아웃 이동(Cumulative Layout Shift) 이 생기는 케이스 하나만 말해주세요.

3. Partial Rendering 에 대해서 설명해주세요.
