1. loading.tsx를 이용한 스트리밍과 컴포넌트에서 개별적으로 스트리밍하는 것에 대한 단점을 각각 설명하고, 이와 같은 단점들을 보완할 수 있는 방법을 설명해주세요.

2. 정적 코드와 동적 코드 사이의 경계선이라고도 할 수 있는 컴포넌트의 이름은?

3. ID를 URL에 노출되지 않게 안전하게 서버 액션에 전달하세요.

```tsx
import { deleteInvoice } from "@/app/lib/actions";

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <form action={deleteInvoice}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
```
