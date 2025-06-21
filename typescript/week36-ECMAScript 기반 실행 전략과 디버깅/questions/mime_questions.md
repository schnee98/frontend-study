1. 다음 에러를 올바르게 고치시오

```
interface ABC{
  a:string
  b:string
  c:number
}

function foo(abc:ABC){
  for(const k in abc){
    const v = abc[k]; // k가 string으로 추론돼서 에러
  }
}

```

2. HTMLDivElement는 HTMLElement의 ----이다.

3. 코드를 설명해보자

```
declare function hash(text: string): number;

class PasswordChecker {
  checkPassword: (password: string) => boolean;

  constructor(passwordHash: number) {
    // checkPassword 함수 정의
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash;
    };
  }
}

const checker = new PasswordChecker(hash('s3cret'));
console.log(checker.checkPassword('s3cret'));
```
