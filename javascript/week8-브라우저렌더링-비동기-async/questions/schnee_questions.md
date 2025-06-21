1. 리플로우와 리페인트에 대해서 설명해주세요.

2. script 태그의 async/defer 어트리뷰트의 차이와 이 둘의 사용목적을 말해주세요.

3. 다음 코드를 try/catch 문 안에서 에러 처리를 할 수 있도록 변경해주세요.

```
const foo = () => {
    try {
        const wrongUrl = "https://wrong.url";

        const response = fetch(wrongUrl);
        console.log(response);
    } catch (error) {
        console.error("error", error);
    }
}

foo();
```