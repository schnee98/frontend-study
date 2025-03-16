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
- void 사용하면 비동기 함수의 반환값을 무시하고 실행할 수 있습니다.
- getItem(id)는 데이터를 가져오는 비동기 함수로, preload(id) 함수에서 호출하면 데이터 요청이 시작됩니다.
- 그러나 preload(id) 자체는 아무런 값을 반환하지 않아야 하므로, void를 사용하여 반환값을 무시하고 실행하도록 합니다.

### void를 사용하지 않으면?
```ts
export const preload = (id: string) => {
  getItem(id) // TypeScript 경고 발생 가능
}
```

- Typescript는 getItem(id)가 반환하는 Promise(T)를 사용하지 않았기 때문에 **“Promise가 처리되지 않았다”**는 경고를 발생시킬 수 있습니다.
- 또한, 만약 preload(id)가 await getItem(id)를 사용한다면, 워터풀이 발생할 수 있습니다.

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

### 답
- form action에는 Server Action(use server가 선언된 함수)의 참조만 허용합니다.
- 두 방식 모두 Server Action이 아닌 익명 함수를 생성하므로 Server Action으로 인식되지 않습니다.
- 또한, bind를 사용할 경우 양식을 제출할 때 formData를 자동으로 전달합니다. 하지만 위와 같은 방법을 사용할 경우 아래와 같은 에러 발생해 formData를 동적으로 전달하지 못 합니다.
  
```
2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)
actions.ts(76, 49): 'formData'의 인수가 제공되지 않았습니다.
```

- bind(null, userId)를 사용하면 userId를 첫 번째 인자로 고정하고 form이 제출될 때 자동으로 formData를 두 번째 인자로 전달할 수 있습니다.

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

### 답
1. export const revalidate = 60
   - 현재 페이지가 생성되고 60초 동안 캐싱됩니다.
   - 60초 이후 새로운 요청이 들어오면 새로운 정적 페이지 생성

2. generateStaticParams()
   - 빌드 시 반환된 id를 기반으로 블로그 상세 페이지들이 미리 생성됩니다.

3. export const dynamicParams = false
   - 빌드 시 생성된 경로만 허용합니다.
   - 존재하지 않는 경로는 404 반환



