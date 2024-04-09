## 1. 등록한 이벤트를 지우는 방법 설명해주세요.

답:
- addEventListener로 등록한 이벤트들은 removeEventListener로 지우고, 호출할 시에 등록한 함수를 변수에 담아서 매개변수로 호출한다.
- addEventListener로 등록할 시에 함수 안에 removeEventListener를 arguments.callee와 함께 호출한다.
- 이벤트 핸들러 프로퍼티에 null을 저장한다.

## 2. 이벤트 전파를 중지시키는 stopPropagation 메서드의 사용 목적을 말해주세요.

답:
- 하위 DOM 요소의 이벤트가 상위 요소에서 처리되지 않고 개별적으로 처리하게 하기 위해

## 3. 다음 코드에서 커스텀 이벤트를 호출하여 count를 5로 만드는 코드를 작성해주세요.

```
<html>
<body>
  <button class="btn">Click me</button>
  <script>
    const $button = document.querySelector(".btn");
    let count = 0;

  </script>
</body>
</html>

```

답:

```
<html>
<body>
  <button class="btn">Click me</button>
  <script>
    const $button = document.querySelector(".btn");
    let count = 0;

    $button.addEventListener("click", () => count++);

    const customEvent = new MouseEvent("click");
    
    $button.dispatchEvent(customEvent);
    $button.dispatchEvent(customEvent);
    $button.dispatchEvent(customEvent);
    $button.dispatchEvent(customEvent);
    $button.dispatchEvent(customEvent);
  </script>
</body>
</html>

```