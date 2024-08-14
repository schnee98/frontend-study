# 코드스쿼드 2024 웹 프론트엔드 스터디

## 스터디 진행방식
- 각자 매주 수요일까지 스터디 범위에 해당하는 책의 내용을 읽어옵니다.
- 스터디 범위 안에서 4~5개의 퀴즈를 만들고, 그에 대한 퀴즈의 답변을 준비합니다.
- 준비한 문제와 답변을 각자의 원격 저장소에 저장 후 스터디 시간 한시간 전까지 **Pull Request** 요청을 합니다.
- 2명씩 짝지어 각자 준비해온 퀴즈를 풀어본 뒤, 다 같이 이야기해 볼만한 퀴즈를 모아서 스터디 참여인원 전원이 해당 퀴즈에 대해 토론하고 이야기합니다.

## Pull Request 진행방식
1. 해당 프로젝트를 `fork` 합니다.
2. `fork`한 원격 저장소에 새로운 브랜치를 생성합니다.
3. 생성한 브랜치에 아래 폴더구조를 참고하여 문제와 답변을 저장합니다.
4. 매주 문제와 답변을 저장하고 `Pull Request`를 요청합니다.
5. 요청한 `Pull Request`를 모두 merge 한 후, 스터디를 진행합니다.

* `Pull Request` 를 요청하는 방법은 [링크](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse#7-%EB%B3%B8%EC%9D%B8-%EC%9B%90%EA%B2%A9-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%98%AC%EB%A6%AC%EA%B8%B0)를 참고합니다.

## 폴더구조
```
${topic}/${nickname}/${week_name}/
```

- 문제 저장 예시) `javascript/schnee/week1/questions.md`
- 답변 저장 예시) `javascript/schnee/week1/solutions.md`

## Git Commit 컨벤션

| 태그 | 설명 |
| ------------- |:-------------:|
| docs | 문서 내용 변경 |

<!-- 예제 코드가 필요한 경우가 생기면 추후에 추가 
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 내용 변경 |
| style | 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 등 |
| refactor | 코드 리팩토링 |
| test | 테스트 코드 작성 |
| chore | 빌드, 패키지 매니저 설정 등 |
-->

각자의 원격 저장소에 저장을 할 때, 위 Git Commit 컨벤션을 참고하여 커밋을 작성합니다.

## 주제
| Week               | JavaScript (Woody)                                                | 주제 (JavaScript)                                                                 | React (Woody)                                                    | 주제 (React)                                                                 |
|--------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Week 1 (2024/03/12) | [Week 1 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week1/questions.md) | ▣ 4장: 변수와 상수 <br> ▣ 6장: 데이터 타입                                     |                                                                  |                                                                               |
| Week 2 (2024/03/19) | [Week 2 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week2/questions.md) | ▣ 5장: 함수 <br> ▣ 7장: 객체와 배열                                            |                                                                  |                                                                               |
| Week 3 (2024/03/26) | [Week 3 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week3/questions.md) | ▣ 24장: 클로저                                                                 |                                                                  |                                                                               |
| Week 4 (2024/04/02) | [Week 4 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week4/questions.md) | ▣ 11장: this 키워드 <br> ▣ 12장: 프로토타입                                   |                                                                  |                                                                               |
| Week 5 (2024/04/09) | [Week 5 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week5/questions.md) | ▣ 13장: 비동기 처리 <br> ▣ 14장: 이벤트 루프                                  |                                                                  |                                                                               |
| Week 6 (2024/04/16) | [Week 6 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week6/questions.md) | ▣ 15장: ES6+ 문법 정리 <br> ▣ 16장: 모듈과 패키지 관리                        |                                                                  |                                                                               |
| Week 7 (2024/04/23) | [Week 7 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week7/questions.md) | ▣ 17장: 템플릿 리터럴 <br> ▣ 18장: 클래스와 상속                               |                                                                  |                                                                               |
| Week 8 (2024/04/30) | [Week 8 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week8/questions.md) | ▣ 19장: Map과 Set <br> ▣ 20장: 프록시와 리플렉션                               |                                                                  |                                                                               |
| Week 9 (2024/05/07) | [Week 9 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week9/questions.md) | ▣ 21장: 제너레이터와 async/await <br> ▣ 22장: 프로미스                           |                                                                  |                                                                               |
| Week 10 (2024/05/14) |                                                                   |                                                                                   | [Week 10 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week10/questions.md) | ▣ 2.3장: 클래스 컴포넌트와 함수 컴포넌트 <br> ▣ 2.4장: 렌더링은 어떻게 일어나는가? |
| Week 11 (2024/05/21) |                                                                   |                                                                                   | [Week 11 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week11/questions.md) | ▣ 3장: 상태 관리(State Management)                                             |
| Week 12 (2024/05/28) |                                                                   |                                                                                   | [Week 12 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week12/questions.md) | ▣ 4장: 리액트 라우터(Router)                                                   |
| Week 13 (2024/06/04) |                                                                   |                                                                                   | [Week 13 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week13/questions.md) | ▣ 5장: 고급 상태 관리                                                          |
| Week 14 (2024/06/11) |                                                                   |                                                                                   | [Week 14 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week14/questions.md) | ▣ 6장: 인증과 권한 부여                                                        |
| Week 15 (2024/06/18) |                                                                   |                                                                                   | [Week 15 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week15/questions.md) | ▣ 7장: 성능 최적화                                                             |
| Week 16 (2024/06/25) |                                                                   |                                                                                   | [Week 16 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week16/questions.md) | ▣ 8장: 리액트와 국제화(i18n)                                                   |
| Week 17 (2024/07/02) | [Week 17 - JavaScript](https://github.com/minjeongHEO/frontend-study/blob/main/javascript/Woody/week17/questions.md) | ▣ 접근성 고려                                                                | [Week 17 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week17/questions.md) | ▣ 9장: 접근성과 리액트                                                         |
| Week 18 (2024/07/09) |                                                                   |                                                                                   | [Week 18 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week18/questions.md) | ▣ 10장: 리액트 테스트                                                          |
| Week 19 (2024/07/16) |                                                                   |                                                                                   | [Week 19 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week19/questions.md) | ▣ 11장: 리액트 디자인 패턴                                                     |
| Week 20 (2024/07/23) |                                                                   |                                                                                   | [Week 20 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week20/questions.md) | ▣ 12장: 타입스크립트와 리액트                                                  |
| Week 21 (2024/07/30) |                                                                   |                                                                                   | [Week 21 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week21/questions.md) | ▣ 13장: 타입스크립트와 리액트의 통합                                           |
| Week 22 (2024/08/06) |                                                                   |                                                                                   | [Week 22 - React](https://github.com/minjeongHEO/frontend-study/blob/main/react/Woody/week22/questions.md) | ▣ 14장: 리액트와 서버 사이드 렌더링(SSR)                                       |

