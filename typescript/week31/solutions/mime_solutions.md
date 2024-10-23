1. 정답

```
function(): Promise<number>
```

2. 정답

```
type Fn = typeof paramFn
```

3. Object.keys(map)이 반환하는 값의 타입이 string[]인데, 이 값을 Key 타입으로 바로 사용하려 하기 때문에 발생함.

- 해결법은 여러가지 있는데 Key의 타입을 좁히지 않고 string으로 그냥 사용하는 방법

```
const map:Record<string,string> ={
  a:"곰",
  b:"방",
  c:"와"
}

Object.keys(map).forEach((v)=>{
  console.log(map[v])
})
```

- Key 타입 좁히는 방법

```
type Key = "a"|"b"|"c"

const map:Record<Key,string> ={
  a:"곰",
  b:"방",
  c:"와"
}

Object.keys(map).forEach((v)=>{
  const key =v as Key
  console.log(map[key])
})
```
