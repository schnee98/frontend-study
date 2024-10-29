1. 아래 둘 중 더 나은 방식을 선택하고 그 이유를 설명하시오.

```
//1번
function f1(){
  const x : any  = expressionReturningFoo();
  processBar(x);
  return x;
}

//2번
function f2(){
  const x  = expressionReturningFoo();
  processBar(x as any);
  return x;
}
```

2. {},와 object와 unknown의 차이점을 설명하시오.

3. interface의 보강에 대해 설명하시오.
