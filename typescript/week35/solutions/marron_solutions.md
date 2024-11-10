# 아이템 6장 (45, 49 - 52)

1. dependencies와 devDependencies의 차이점을 설명하고 타입스크립트와 관련된 라이브러리는 일반적으로 어디에 속하는지 알려주세요.

_답_

```
dependencies:
프로젝트를 실행하는 데 필수적인 라이브러리.
해당 프로젝트를 설치한다면 dependencies에 들어있는 라이브러리도 함께 설치됨

devDependencies:
현재 프로젝트를 개발하고 테스트하는 데 사용되지만, 런타임에는 필요 없는 라이브러리.
설치 시 제외.
```

2. let이나 const로 선언된 변수는 렉시컬 스코프인 반면 this 키워드는 \_**\_ 스코프이다.
   이 스코프의 값은 \_\_** 방식에 따라 달라집니다.

_답_

```
다이나믹, 호출된
```

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

_답_

```
c.logSquares를 method 변수에 할당한 후, method()로 호출합니다.
method는 이제 c.logSquares 메서드를 독립적인 함수로 호출하게 됩니다.
독립적으로 호출되는 함수에서는 this가 전역 객체를 가리키며, 엄격 모드에서는 this가 undefined가 됩니다.
따라서 logSquares 내부에서 this.vals를 참조하려고 하면, this가 c 인스턴스를 가리키지 않기 때문에 undefined 또는 오류가 발생합니다.
정리
c.logSquares()는 c 인스턴스의 메서드로 호출되기 때문에 this가 c를 가리킵니다.
method()는 this가 c와 연결되지 않은 상태에서 호출되므로 this가 undefined가 되어 오류가 발생합니다.
```
