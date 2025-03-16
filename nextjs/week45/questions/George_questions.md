## 1. Preload 패턴을 사용할 때 void를 사용하는 이유가 무엇인가요?
```ts
import { getItem } from '@/utils/get-item'
 
export const preload = (id: string) => {
  void getItem(id)
}
export default async function Item({ id }: { id: string }) {
  const result = await getItem(id)
  // ...
}
```

## 2. Server Action에 추가 인수를 전달할 때, 일반적으로 `const updateUserWithId = updateUser.bind(null, userId)` 와 같은 방법을 권장합니다.
그러나 아래와 같은 방식으로 사용하면 문제가 발생합니다. 아래 방식의 문제점과 bind를 사용해야 하는 이유를 설명하세요.

```
'use server'
export async function updateUser(userId: string, formData: FormData) {}

// 올바른 방식
const updateUserWithId = updateUser.bind(null, userId)
return (
    <form action={updateUserWithId}>...</form>
)

// 잘못 된 방식 1.
const updateUserWithId = () => updateUser(userId)
return (
    <form action={updateUserWithId}>...</form>
)
// 잘못 된 방식 2.
<form action={() => updateUser(userId)}>...</form>
```

## 3. 아래 코드에 적용된 ISR을 설명해주세요.
```ts
interface Post {
  id: string
  title: string
  content: string
}
 
export const revalidate = 60
 
export const dynamicParams = false
 
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
    (res) => res.json()
  )
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
```