# 👩‍🏫 week 6 - A

## ▣ 40장: event

### 1️⃣ Q. 이벤트 핸들러란 무엇인가요?

이벤트가 발생했을 떄 브라우저에 호출을 위임한 함수입니다.  
다시말해서, 이벤트가 발생하면 브라우저에 의해 호출될 함수를 말합니다.

### 2️⃣ Q. 이벤트 핸들러를 등록하는 방식에는 몇 가지가 있는데, 그 중 이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식을 설명해주세요.

- 이벤트 핸들러 프로퍼티 방식
  이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩합니다.  
  하나 이상의 이벤트 핸들러를 등록할 수 없습니다.  
  (두 번 바인딩하면 재할당되어, 첫번째 바인딩 이벤트는 실행되지 않는다.)

- addEventListener 메서드 방식  
  이벤트 핸들러를 인수로 전달합니다.  
  하나이상의 이벤트 핸들러를 등록할 수 있습니다.  
  등록된 순서대로 호출됩니다.  
  단, 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 이벤트 핸들러만 등록됩니다.

### 3️⃣ Q. 아래의 코드에서 increase메서드 내부의 this는 클래스가 생성할 인스턴스를 가리키지 않습니다. (this.$button.$button을 가리켜서 타입에러 발생)해결방법은 무엇일까요?

<img src="https://github.com/codesquad-members-2024/fe-data-fetching/assets/96780693/34615d49-21b1-4e3a-9d2e-05e9bdc3adbb" width="500"/>

bind메서드를 사용해 this를 전달하여 increase 메서드 내부의 this가 클래스가 생성할 인스턴스를 가리키도록 할 수 있다.

```js
this.$button.onclick = this.increase.bind(this);
```

또는 화살표 함수를 이벤트 핸들러로 등록하여 이벤트 핸들러 내부의 this가 인스턴스를 가르키도록 할 수 있다.

```js
increase = () => (this.$button.textContent = ++this.count);
```
