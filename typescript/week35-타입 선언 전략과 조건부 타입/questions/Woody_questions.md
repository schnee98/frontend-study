# 👨‍🏫 week 35 - Q

## ▣ 6장 : 타입 선언과 @types

### ▣ ㄴ 아이템 45 devDependencies에 typescript와 @types 추가하기

### ▣ ㄴ 아이템 49 콜백에서 this에 대한 타입 제공하기

### ▣ ㄴ 아이템 50 오버로딩 타입보다는 조건부 타입을 사용하기

### ▣ ㄴ 아이템 51 의존성 분리를 위해 미러 타입을 사용하기

### ▣ ㄴ 아이템 52 테스팅 타입의 함정에 주의하기

### 1️⃣ **Q: NPM의 세 가지 의존성(dependencies, devDependencies, peerDependencies)의 차이점을 설명하고, 각각의 사용 사례를 예시와 함께 설명해주세요.**

1. **dependencies**

2. **devDependencies**

3. **peerDependencies**

### 2️⃣ **Q: 다음 코드의 실행 결과와 this 바인딩 문제를 설명하고, 해결 방안을 제시해주세요.**

```typescript
class C {
  vals = [1, 2, 3];
  logSquares() {
    for (const val of this.vals) {
      console.log(val * val);
    }
  }
}

const c = new C();
const method = c.logSquares;
method(); // TypeError: Cannot read property 'vals' of undefined
```

1. **문제 발생 원인**

2. **해결 방안들**

### 3️⃣ **Q: 화살표 함수 vs 일반 함수의 this 바인딩 차이**

#### 1. 일반 함수

#### 2. 화살표 함수
