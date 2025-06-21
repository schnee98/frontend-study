1. 렉시컬 스코프에 대해서 설명해주세요.
  답: 한 함수를 정의한 위치에 따라 정해진 상위 스코프
  가산점: 함수 정의가 평가되는 시점에 저장되는 “외부 렉시컬 환경에 대한 참조”

2. 다음 코드의 실행 결과를 작성해주세요.
```
function outer() {
  let x = 10;
  const inner = () => console.log(x++);
  return inner;
}

const innerFn1 = outer();
const innerFn2 = outer();  innerFn1();
innerFn1();
innerFn1();
innerFn1();
innerFn2();
innerFn2();
innerFn2();
innerFn2();
```
답: 10, 11, 12, 13, 10, 11, 12, 13

3. 다음 `inner()` 함수가 클로저가 아닌 이유를 설명해주세요.
```
function outer() {
  let x = 10;
  const inner = () => { 	let y = 20; 	console.log(y++);     }
  return inner;
}

const innerFn1 = outer();
``` 
답: 상위 스코프의 어떠한 식별자도 참조하고 있지 않기 때문에