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

2. 다음 `addKeyListener` 가 as-is 에서 to-be 코드로 사용될 수 있도록 `callbackWithThisBinding` 을 작성해주세요.

```typescript
// as-is (책에 있는 코드)
function addKeyListener(
  el: HTMLElement,
  callback: (this: HTMLElement, e: KeyboardEvent) => void
) {
  el.addEventListener("keydown", (e) => {
    callback.call(el, e);
  });
}

// to-be
function addKeyListener(el: HTMLElement, callback: (e: KeyboardEvent) => void) {
  el.addEventListener("keydown", callback);
}

function callbackWithThisBinding(el: HTMLElement) {
  // ?
}

const element = document.querySelector(".container");

addKeyListener(element, callbackWithThisBinding(element));
```

3. 다음 함수 타입이 정확하지 않은 이유를 설명해주세요.

```typescript
function double(x: number | string): number | string {
  return x + x;
}
```
