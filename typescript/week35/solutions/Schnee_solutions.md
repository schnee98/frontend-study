1. 다음 코드에서 `method` 함수를 호출할 때 `this` 바인딩이 `undefined`인 이유를 설명해주세요.

```typescript
class ResetButton {
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }

  onClick() {
    alert(`Reset ${this}`);
  }
}

const button = new ResetButton();
const method = button.onClick;
method();
```

답: `ResetButton#onClick` 함수는 `ResetButton`의 프로토타입 메서드이다. 프로토타입 메서드는 모든 인스턴스에게 공유되는 함수이기 때문에 인스턴스가 `this`로 바인딩 되지 않는다.

2. 다음 `addKeyListener` 가 as-is 에서 to-be 코드로 사용될 수 있도록 `callbackWithThisBinding` 을 작성해주세요.

```typescript
// as-is (책에 있는 코드)
function addKeyListener(
  el: Element,
  callback: (this: Element, e: Event) => void
) {
  el.addEventListener("keydown", (e) => {
    callback.call(el, e);
  });
}

// to-be
function addKeyListener(el: Element, callback: (e: Event) => void) {
  el.addEventListener("keydown", callback);
}

function callbackWithThisBinding(el: Element) {
  // ?
}

const element = document.querySelector(".container");

addKeyListener(element, callbackWithThisBinding(element));
```

답:

```typescript
function callbackWithThisBinding(el: Element) {
  return (e: Event) => {
    // something
    // 주의: 반환함수 안에서 el을 사용하지 않으면 el이 캡처되지 않고 클로저가 생성되지 않는다.
  };
}

const element = document.querySelector(".container")!;

addKeyListener(element, callbackWithThisBinding(element));
```

3. 다음 함수 타입이 정확하지 않은 이유를 설명해주세요.

```typescript
function double(x: number | string): number | string {
  return x + x;
}
```

답: x의 타입이 number이면 number이여야 하고, string이면 string이어야 하는데, 어느 타입의 x를 넣든 반환타입은 number | string 이다.
