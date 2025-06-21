# 아이템 23 - 27

1. Promise와 async/awit의 차이에 대해 설명해주세요.

2. 다음과 같이 발생하는 오류를 해결하는 방법을 설명해주세요

```ts
type Language = "JavaScript" | "TypeScript" | "Python";
function setLanguage(language: Language) {
  /*...*/
}

setLanguage("Javascript");

let language = "JavaScript";
setLanguage(language); // "string" 형식의인수는 "Language" 형식의매개변수에할당될수없습니다.
```

3. 다음과 같이 발생하는 오류를 해결하는 방법을 설명해주세요

```ts
function panTo(where: [number, number]) {
  /*...*/
}

panTo([10, 20]);

const loc = [10, 20];
panTo(loc); // "number []" 형식의인수는 "[number, number]" 형식의매개변수에할당될수없습니다.
```

---

#### 1. 아래 TypeScript 코드에 대한 "틀린" 설명을 고르세요.

```ts
type Person = {
  name: string;
  age?: number;
};

const person1: Person = {};
const person2: Person = { name: "김토스" };
const person3 = {} as Person;
const person4 = { name: "김토스" } as Person;
const person5 = { age: 20 } as Person;
```

1. person4 변수를 선언한 라인은 문제없이 평가된다.
2. person3 변수를 선언한 라인에서는 타입 에러가 발생한다.
3. person5 변수를 선언한 라인은 문제없이 평가된다.
4. person2 변수를 선언한 라인은 문제없이 평가된다.
5. person1 변수를 선언한 라인에서는 타입 에러가 발생한다.

#### 2. 다음 보기 중 TypeScript의 any 타입과 unknown 타입에 대한 "올바른" 설명을 고르세요. 답안을 선택하세요.

1. any 타입은 타입 안전성을 보장하지만, unknown 타입은 타입 안전성을 보장하지 않는다.
2. unknown 타입으로 선언된 값은 typeof를 사용한 타입 검사를 통해 타입을 확정할 수 있다.
3. any와 unknown 타입은 동일한 의미를 가지며, 이 들을 구분하는 것은 의미가 없다.
4. unknown 타입으로 선언된 값은 컴파일러가 타입 검사를 하지 않는다.
5. any 타입은 컴파일러에게 명시적으로 이 값의 타입을 알 수 없다는 것을 알려줄 때 사용한다.

#### 3. 아래 TypeScript 코드의 getProperty함수는 인자로 받은 객체와 키를 사용하여 프로퍼티를 찾아 반환하는 함수에요. 다음 보기 중 personName과 personAge 이 각각 string 과 number 타입으로 평가될 수 있는 Getproperty 타입의 정의를 고르세요.

```ts
type GetProperty = // GetProperty를 정의해주세요

const getProperty: GetProperty = (obj, key) = obj[key];

const person = { name: '김토스', age: 30 };

const personName: string = getProperty(person, 'name' );
const personAge: number = getProperty(person, 'age' )
```

1. type GetProperty = (obj: Record<string, any>, key: keyof typeof obj) => typeof obj[key]
2. type GetProperty = (obj: Object, key: string) => obj[typeof key]
3. type GetProperty = (obj: any, key: string) => obj[string]
4. type GetProperty = <T>(obj: T, key: string) => T[typeof key]
5. type GetProperty = <T, K extends keyof T> (obj: T, key: K) => T[K]

#### 4. 다음 보기 중 age 속성에 접근했을 때 타입 에러를 발생시킬 수 있는 removeAge 함수의 "올바른" 반환 타입을 고르세요.

```ts
type Person = {
  name: string;
  age?: number;
};

function removeAge(person: Person) {
  const result = { ...person };
  if (result.age != null) {
    delete result.age;
  }
}
return result;

// 분명 age 속성을 제거했는데, age 속성에 접근할 때 타입 에러가 발생하지 않아요.
console.log(removeAge({ name: "김토스", age: 20 }).age);
```

1. Pick<Person, 'name'>
2. Partial<Person>
3. Record<string, any>
4. Omit<Person, 'age'>
5. Exclude<Person, 'age'>
