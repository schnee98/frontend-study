1. 다음과 같이 인덱스 시그니처를 사용하면 타입체크가 키에 대해 광범위 하게 체크하기 때문에 오타 같은 오류가 발생하지 않고 자동완성이 이루어지지 않는다. <br/>
   코드를 수정하시오.(한줄로😼)

```
const vec3D : Vec3D = {
 x: 12,
 y: 24,
 z: 36
}

Type Vec3D = {
   [property:string] : string
}; // 얘를 수정!
```

2. 다음 코드의 차이를 설명하시오

```
const currPara : readonly string[] = [];

let currPara : readonly string[] = [];
```

3. 배열의 키는 무슨 타입일까? 