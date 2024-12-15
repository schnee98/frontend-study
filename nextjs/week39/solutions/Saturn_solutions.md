1. loading.tsx를 이용한 스트리밍과 컴포넌트에서 개별적으로 스트리밍하는 것에 대한 각각 단점을 설명하고, 이와 같은 단점들을 보완할 수 있는 방법을 설명해주세요.

- loading.tsx는 어떤 컴포넌트에서 느린 데이터 요청이 발생하면 로딩 시간이 길어질 수 있음.
- 컴포넌트마다 개별적으로 스트리밍하면 UI가 순차적으로 나타나면서 깜빡이는 현상이 발생할 수 있음.
- 보완방법: 컴포넌트를 섹션 단위(래퍼 컴포넌트 이용)로 묶어 스트리밍

2. 정적 코드와 동적 코드 사이의 경계선이라고도 할 수 있는 컴포넌트의 이름은?

- `<Suspense />`

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

- 정답

  ```tsx
  import { deleteInvoice } from "@/app/lib/actions";

  export function DeleteInvoice({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);

    return (
      <form action={deleteInvoiceWithId}>
        <button
          type="submit"
          className="rounded-md border p-2 hover:bg-gray-100"
        >
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-4" />
        </button>
      </form>
    );
  }
  ```
