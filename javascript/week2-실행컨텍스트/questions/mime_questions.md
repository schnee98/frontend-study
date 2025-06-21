## 문제

```
var x=1;
const y=2;

function foo(a){
	var x = 3;
	const y = 4;
	function bar(b){
		const z=5;
		console.log(a+b+x+y+z);
	}
	bar(10);
}
foo(20);

```

1. 이하 bar 함수 코드가 실행되고 난 후의 렉시컬 환경이다. 빈칸을 완성하시오!
```
렉시컬환경,  전역환경레코드, 외부렉시컬환경참조, 객체환경레코드, 선언적환경레코드, window, 함수환경레코드
```
   ![문제](./img.jpg)
