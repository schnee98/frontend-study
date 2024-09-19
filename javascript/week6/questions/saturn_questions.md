1. 클릭 이벤트가 발생하면 이벤트 핸들러를 호출하도록 ( )에게 위임한다.
2. 이벤트 핸들러 프로퍼티 방식은 하나의 이벤트에 하나의 이벤트 핸들러만을 바인딩한다.
3. button 요소에서 클릭 이벤트가 발생하면 다음 예제의 출력 결과는?

```
<body>
  <p>이벤트 <button>버튼</button></p>
  <script>
    document.body.addEventListener("click", () => {
      console.log("Handler for body");
    });

    document.querySelector("p").addEventListener("click", () => {
      console.log("Handler for p");
    });

    document.querySelector("button").addEventListener("click", () => {
      console.log("Handler for button");
    });
  </script>
</body>
```
