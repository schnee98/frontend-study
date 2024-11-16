1. 답

- dependencies: 현재 프로젝트를 실행하는데 실수적인 라이브러리, 프로젝트 설치시 함께 설치됨
- devDependencies: 런타임에는 필요없는 라이브러리 프로젝트 설치시 제외됨.
- peerDependencies: 런타임에 필요하지만 의존성을 직접 관리하지 않는 라이브러리, 플러그인

2. 답

- const num: 12
- const num2: number

3. 답

```
delayedGreeting 메서드에서는 setTimeout(this.sayHello, 1000); 코드가 있습니다. 여기서 this.sayHello는 함수 참조만 전달되고, setTimeout 내부에서 호출될 때 this가 새롭게 바인딩됩니다. 결과적으로 this는 Person 클래스 인스턴스가 아닌, window 객체(strict mode에서는 undefined)가 됩니다. 따라서 this.name을 찾지 못해 정상적으로 동작하지 않습니다.

반면에 delayedGreetingWithBind 메서드에서는 setTimeout(this.sayHello.bind(this), 1000); 코드가 있습니다. 여기서 this.sayHello.bind(this)는 sayHello 메서드가 this를 person 인스턴스로 바인딩한 새로운 함수를 반환합니다. 이렇게 하면 setTimeout에서 콜백 함수가 호출될 때 this가 항상 person 인스턴스를 가리키게 됩니다.

따라서 bind(this)는 sayHello의 this를 person 인스턴스로 고정하여, delayedGreetingWithBind에서 setTimeout 콜백으로 호출될 때에도 this가 person 인스턴스를 참조하도록 보장합니다.
```
