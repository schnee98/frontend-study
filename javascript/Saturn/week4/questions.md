1. 화살표 함수에는 프로토타입 프로퍼티가 있고, arguments 객체를 생성한다. (o, x)
2. 함수 선언문과 함수 표현식의 차이는?
3. 아래의 함수를 고차 함수로 만들어보세요. (콜백 분리)

```
function repeat(n) {
	for (var i = 0; i < n; i++) {
		if (i % 2) console .log(i);
	}
}

repeat(5);
```
