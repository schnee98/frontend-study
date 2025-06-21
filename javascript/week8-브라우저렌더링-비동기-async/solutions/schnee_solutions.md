1. 리플로우와 리페인트에 대해서 설명해주세요.

답:
- 리플로우: 노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등 레이아웃에 영향을 주는 변경이 발생한 경우에 레이아웃을 다시 계산하는 작업
- 리페인트: DOM이나 CSSOM이 동적으로 변경될 경우 변경된 DOM과 CSSOM으로 재결합 된 렌더 트리를 다시 페인트하는 작업

2. script 태그의 async/defer 어트리뷰트의 차이와 이 둘의 사용목적을 말해주세요.

답:
- async: HTML 파싱과 자바스크립트 파일의 로드를 비동기적으로 병렬 처리한다. 이 후 파싱과 로딩이 끝나면 자바스크립트 파일을 실행(파싱)하고, DOMContentLoaded 이벤트를 실행한다.
- defer: HTML 파싱과 자바스크립트 파일의 로드를 비동기적으로 병렬 처리하고, DOMContentLoaded 이벤트를 실행한 후 자바스크립트 파일을 실행하여 파싱한다.
- 사용 목적: 자바스크립트 태그의 호출로 인해 DOM 생성이 중단되는 문제를 방지.

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

답:
```
const foo = async () => {
    try {
        const wrongUrl = "https://wrong.url";

        const response = await fetch(wrongUrl);
        console.log(response);
    } catch (error) {
        console.error("error", error);
    }
}
foo();
```