## 문제

1. 이하 코드의 결과는? 이유를 설명해주세요.

```
const Person = {
    name:"KANG",
    foo(cb){
        cb();
        console.log(this.name);
    }
}

Person.foo(function(){
    console.log(`Hi my name is ${this.name}.`)
})
```

2. 위 코드의 콜백함수의 this를 의도대로 "KANG"을 출력하게 하려면 어떻게 해야할까요~?
