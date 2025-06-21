# 👨‍🏫 week 35 - A

## ▣ 6장 : 타입 선언과 @types

### ▣ ㄴ 아이템 45 devDependencies에 typescript와 @types 추가하기

### ▣ ㄴ 아이템 49 콜백에서 this에 대한 타입 제공하기

### ▣ ㄴ 아이템 50 오버로딩 타입보다는 조건부 타입을 사용하기

### ▣ ㄴ 아이템 51 의존성 분리를 위해 미러 타입을 사용하기

### ▣ ㄴ 아이템 52 테스팅 타입의 함정에 주의하기

### 1️⃣ **Q: NPM의 세 가지 의존성(dependencies, devDependencies, peerDependencies)의 차이점을 설명하고, 각각의 사용 사례를 예시와 함께 설명해주세요.**

1. **dependencies**

   - 프로젝트의 런타임에 실행되어야 하는 패키지들

   - 설치 명령어: `npm install [패키지명]` 또는 `npm install [패키지명] --save`
   - 예시: React, Express, Axios 등

   ```json
   {
     "dependencies": {
       "react": "^18.0.0",
       "express": "^4.17.1"
     }
   }
   ```

2. **devDependencies**

   - 개발 및 테스트 과정에서만 필요하고 런타임엔 필요없는 패키지들
     (타입스크립트와 관련된 라이브러리가 일반적으로 여기에 속함)

   - 설치 명령어: `npm install [패키지명] --save-dev`
   - 예시: TypeScript, Jest, ESLint, Webpack 등

   ```json
   {
     "devDependencies": {
       "typescript": "^4.5.4",
       "jest": "^27.4.5",
       "@types/react": "^18.0.0"
     }
   }
   ```

3. **peerDependencies**

   - 런타임에는 필요하긴 하지만, 직접 설치하지 않는 패키지들

   - 사용 사례: 플러그인이나 라이브러리 개발 시 호환성 명시
     (중복 설치 방지, 사용자에게 버전 선택권)
   - 예시: React 컴포넌트 라이브러리

   ```json
   {
     "peerDependencies": {
       "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
     }
   }
   ```

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

   - JavaScript에서 **this는 함수가 호출되는 컨텍스트에 따라 동적으로 바인딩됨**
   - 메서드를 변수에 할당하면 this와의 연결이 끊어짐
   - 이로 인해 독립된 일반 함수로 호출되는 상황이 됩니다.
     (독립적으로 호출된 함수는 this가 원래 객체와 연결되지 않음)
   - **일반 함수로 호출 시 this는 undefined(strict mode) 또는 전역 객체**를 가리킴

2. **해결 방안들**
   a. **bind() 메서드 사용**

   ```typescript
   const c = new C();
   const method = c.logSquares.bind(c);
   method(); // // this가 c를 가리키므로 정상 실행
   ```

   b. **call() 또는 apply() 사용**

   ```typescript
   const c = new C();
   const method = c.logSquares;
   method.call(c); // 또는 method.apply(c);
   ```

   c. **화살표 함수로 메서드 정의**

   ```typescript
   class C {
     vals = [1, 2, 3];
     logSquares = () => {
       for (const val of this.vals) {
         console.log(val * val);
       }
     };
   }
   ```

### 3️⃣ **Q: 화살표 함수 vs 일반 함수의 this 바인딩 차이**

#### 1. 일반 함수

```javascript
class Counter {
  count = 0;

  increment() {
    // 일반 함수
    this.count++;
  }
}
```

- **this가 호출 시점에 동적으로 결정**
- 그냥 `function()` → this는 undefined/전역객체
- prototype chain에 추가되어 메모리 효율적

#### 2. 화살표 함수

```javascript
class Counter {
  count = 0;

  increment = () => {
    // 화살표 함수
    this.count++;
  };
}
```

- **함수가 생성된 곳의 this를 고정(렉시컬 스코프)**
- 인스턴스 생성 시 this를 캡처하여 변경되지 않음
- 각 인스턴스마다 새 함수가 생성됨 (메모리 더 사용)
- prototype chain에 추가되지 않음

#### 3. 주요 사용처

```javascript
// React 컴포넌트에서
class MyComponent extends React.Component {
  handleClick = () => {
    // 이벤트 핸들러에 적합
    this.setState({});
  };
}
```

- 이벤트 핸들러
- 콜백 함수
- this 바인딩이 중요한 상황

#### 4. 선택 기준

- 많은 인스턴스 생성 시 → 일반 함수
- this 고정이 필요한 경우 → 화살표 함수
