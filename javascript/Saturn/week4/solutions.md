1. X
2. 함수 선언문은 함수 호이스팅이 일어나고, 함수 표현식은 변수 호이스팅이 일어난다.
3.

```
function repeat (n , f) {
	for (var i = 0; i < n; i++) {
		f(i);
	}
}

var logOdds = function(i) {
	if (i % 2) console .log(i);
};

repeat(5, logOdds);
```
