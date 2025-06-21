1. 답

```
interface ABC{
  a:string
  b:string
  c:number
}

function foo(abc:ABC){
  let k : keyof ABC;
  for(k in abc){
    const v = abc[k];
  }
}

또는
for(const [k,v] of Object.entries(abc)){
    console.log(k);
    console.log(v)
  }
```

2. 서브타입

3. 답은 토론중에 공개
