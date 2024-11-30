# 아이템 6장 (45, 49 - 52)

1. dependencies와 devDependencies의 차이점을 설명하고 타입스크립트와 관련된 라이브러리는 일반적으로 어디에 속하는지 알려주세요.

2. let이나 const로 선언된 변수는 렉시컬 스코프인 반면 this 키워드는 \_**\_ 스코프이다.
   이 스코프의 값은 \_\_** 방식에 따라 달라집니다.

3. 다음의 코드에서 문제가 생기는 이유를 설명해주세요.

```ts
class C {
  vals = [1, 2, 3];
  logSquares() {
    for (const val of this.vals) {
      console.log(val * val);
    }
  }
}

const c = new C();
const method = c.logSquares;
method();
```
