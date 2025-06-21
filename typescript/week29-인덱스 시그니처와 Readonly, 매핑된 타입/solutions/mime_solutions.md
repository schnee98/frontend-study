1. 정답(책에 나와있는)

- Record 사용

```
type Vec3D = Record<'x'|'y'|'z', number>;
```

- 매핑된 타입 사용

```
type Vec3D = { [ k in 'x'|'y'|'z'] : number };
```

---

2. 정답

```
const currPara : readonly string[] = [];
```

- 배열의 내용(배열 자체)도 바꿀 수 없고 가리키는 배열도 바꿀 수 없다(currPara 변수 변경 불가)

```
let currPara : readonly string[] = [];
```

- 위와 같이 배열 자체는 변경 불가하나 가리키는 배열을 바꿀 수 있다(currPara 변수 변경 가능)

---

3. 문자열
