# 👨‍🏫 week 30 - A

## ▣ 3장 : 타입 추론

### ▣ ㄴ 아이템19 : 추론 가능한 타입을 사용해 장황한 코드 방지하기

### ▣ ㄴ 아이템20 : 다른 타입에는 다른 변수 사용하기

### ▣ ㄴ 아이템21 : 타입 넓히기

### ▣ ㄴ 아이템22 : 타입 좁히기

---

### 1️⃣ Q. 타입 정보가 있는 라이브러리에서, 콜백 함수의 매개변수 타입을 선언해야 할까요?

아니요, 콜백 함수의 매개변수 타입을 선언할 필요는 없습니다.  

타입스크립트는 함수 시그니처를 기반으로 매개변수 타입을 자동으로 추론할 수 있기 때문입니다.(함수의 정의에 따라 입력 값의 타입을 타입스크립트가 알아서 추론)
이러한 경우 타입을 명시하면 코드가 장황해지며, 불필요한 타입 선언이 될 수 있습니다.  

따라서, 타입스크립트의 타입 추론 기능을 활용하는 것이 좋습니다.

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
문제는 `x 변수가 일반적인 string 타입으로 추론`되었기 때문에 발생했습니다.  
함수는 'x' | 'y' | 'z' 타입을 기대하지만, x는 string 타입으로 처리되어 오류가 발생한 것입니다. 


1. **변수를 `const`로 선언하기**  
이렇게 하면 변수가 구체적인 리터럴 타입('x')으로 추론되어 넓히기 과정이 발생하지 않습니다.
```ts
    const x = 'x'; // 이제 x는 'x' 타입을 가집니다
```

2. **변수의 타입을 명시적으로 선언하기**  
변수의 타입을 직접 지정할 수 있습니다.
```ts
    let x: 'x' = 'x';
```

3. **as const 단언문 사용하기** 
변수를 상수 리터럴 타입으로 고정시킵니다.
```ts
    let x = 'x' as const; // x는 이제 'x' 타입으로 추론됩니다
```

<br/>

### 3️⃣ Q. 타입스크립트에서 타입을 좁히는 방법에는 어떤 것이 있나요?

타입 좁히기는 타입스크립트에서 변수나 값의 타입을 좀 더 구체적인 타입으로 한정하는 과정입니다. 

1. **`instanceof` 사용하기**  
   객체가 특정 클래스의 인스턴스인지 확인하여 타입을 좁힐 수 있습니다.
   ```ts
   if (value instanceof Date) {
     // value는 Date 타입으로 좁혀짐
   }
   ```

2. **`Array.isArray` 같은 내장 함수 사용하기**  
   특정 값이 배열인지 확인하는 방법입니다.
   ```ts
   if (Array.isArray(value)) {
     // value는 배열로 좁혀짐
   }
   ```

3. **조건문 사용하기**  
   타입을 좁히는 가장 일반적인 방법은 조건문으로 특정 타입인지 확인하는 것입니다.
   ```ts
   if (typeof value === 'string') {
     // value는 string 타입으로 좁혀짐
   }
   ```

    * `typeof null` 이 `"object"`임을 잊지말고 주의하자.  
    ```ts
    const el = document.getElementById('foo');
    if(typeof el === 'object'){
        el; // 타입은 HTMLElement | null
    }
    ```

4. **태그드 유니온(Discriminated Unions) 사용하기**  
   공통 속성(태그)을 가진 타입을 사용하여 타입을 좁힐 수 있습니다.
   ```ts
   type Shape = 
     | { kind: 'circle', radius: number }
     | { kind: 'square', sideLength: number };

   function getArea(shape: Shape) {
     if (shape.kind === 'circle') {
       // shape는 circle 타입으로 좁혀짐
       return Math.PI * shape.radius ** 2;
     }
   }
   ```

5. **사용자 정의 타입 가드(Custom Type Guards) 사용하기**  
   함수에서 `is` 키워드를 사용해 특정 타입을 좁히는 조건을 정의할 수 있습니다.
   ```ts
   function isString(value: unknown): value is string {
     return typeof value === 'string';
   }

   if (isString(value)) {
     // value는 string 타입으로 좁혀짐
   }
   ```

6. **`null` 또는 `undefined` 값을 인지하기**  
   `null`과 `undefined`도 타입 좁히기에 포함될 수 있습니다. `typeof`를 사용하면 이 값들도 쉽게 확인할 수 있습니다.
   ```ts
   if (value !== null && value !== undefined) {
     // value는 null 또는 undefined가 아님
   }
   ```


