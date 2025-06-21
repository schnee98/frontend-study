1. 렉시컬 스코프에 대해서 설명해주세요.

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

3. 다음 `inner()` 함수가 클로저가 아닌 이유를 설명해주세요.
```
function outer() {
  let x = 10;
  const inner = () => { 	let y = 20; 	console.log(y++);     }
  return inner;
}

const innerFn1 = outer();
``` 