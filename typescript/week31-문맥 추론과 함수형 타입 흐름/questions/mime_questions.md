1. 아래 함수의 반환 타입은?

```
const WhatTypeIs = async()=> 23;
```

2. 아래 콜백함수의 타입을 정의하라(typeof 이용!)

```
type Fn = ____ // 여기 채우면 됨

function callWithRandomNum(fn:Fn){
  fn(3,2);
}

const paramFn=(a:number,b:number)=>{
  console.log(a,b)
}

callWithRandomNum(paramFn)
```

3. 다음은 에러남 이유는?

```
type Key = "a"|"b"|"c"

const map:Record<Key,string> ={
  a:"곰",
  b:"방",
  c:"와"
}

Object.keys(map).forEach((v:Key)=>{
  console.log(map[v])
})
```
