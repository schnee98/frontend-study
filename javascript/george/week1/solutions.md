### 1. var, let, const의 차이점을 서술하세요.
 - var는 재선언과 재할당이 가능하다.
```
    var greeter = "hey hi";
    var greeter = "say Hello instead";
```
```
    var greeter = "hey hi";
    greeter = "say Hello instead";
```
 - let은 재할당은 가능하지만, 재선언은 불가능하다.
```
    let greeting = "say Hi";
    greeting = "say Hello instead";
```
```
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
 - const는 재선언과 재할당 둘 다 불가능하다.
```
    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 
```
```
    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
```

### 2. 호이스팅이란?
 - 런타임을 하기 전 소스코드의 평가 과정을 거치면서 소스코드를 실행하기 위한 준비를 하는데, 이때 자바스크립트 엔진은 변수 선언을 포함함 모든 선언문(변수 선언문 함수 선언문 등)을 소스코드에서 찾아 먼저 실행한다. 이처럼, 런타임 이전 단계에서 먼저 실행되어 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다.
 - 
### 3. 변수를 재할당할 때 메모리에 남아있던 전에 변수 값은 어떻게 되나요?
 - 변수를 재할당하면 이미 있던 주소값에 새로운 데이터를 넣는것이 아닌 새로운 주소값에 데이터를 할당한다. 이때 전 주소값 메모리에 남아있는 값은 가비지 콜렉터에 의해 메모리에서 자동 해제된다.

### 4. 다음 중 식별자 네이밍 규칙에 맞지 않는 것은?
 - 4번 this는 예약어로 식별자 네이밍에 사용할 수 없다.

### 5. 자바스크립트의 타입을 모두 작성하세요.
 - 원시타입
   - 문자(string), 숫자(number), boolean, null, undefined, 심벌(symbol), BigInt
 - 객체타입
   - 객체, 함수, 배열

#### ES6까지 모두 7개의 타입이 있었지만, ES11부터 BigInt라는 새로운 타입이 추가 되었다. BigInt는 number의 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체이다.
```
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n
```