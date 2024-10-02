# 👨‍🏫 week 30 - Q

## ▣ 3장 : 타입 추론

### ▣ ㄴ 아이템19 : 추론 가능한 타입을 사용해 장황한 코드 방지하기

### ▣ ㄴ 아이템20 : 다른 타입에는 다른 변수 사용하기

### ▣ ㄴ 아이템21 : 타입 넓히기

### ▣ ㄴ 아이템22 : 타입 좁히기

---

### 1️⃣ Q. 타입 정보가 있는 라이브러리에서, 콜백 함수의 매개변수 타입을 선언해야 할까요?


<br/>

### 2️⃣ Q. 아래의 타입스크립트 코드에서 타입 넓히기 과정으로 인해 편집기에서 오류가 발생했습니다. 타입 넓히기 과정을 제어하는 방법에는 무엇이 있나요?

```ts
    interface Vector2 {x:number; y:number; z:number}
    function getComponent(vector:Vector3, axis:'x'|'y'|'z'){
        return vector[axis];
    }

    let x = 'x';
    let vec = {x: 10, x: 20, z: 30};
    getComponent(vec,x); //error message : 'string'형식의 인수는 'x'|'y'|'z' 형식의 매개변수에 할당될 수 없음 (실행은 잘 되지만 편집기 오류임)

```

<br/>

### 3️⃣ Q. 타입스크립트에서 타입을 좁히는 방법에는 어떤 것이 있나요?


