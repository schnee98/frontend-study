# 코드스쿼드 2024 웹 프론트엔드 스터디

## 스터디 진행방식

-   각자 매주 수요일까지 스터디 범위에 해당하는 책의 내용을 읽어옵니다.
-   스터디 범위 안에서 4~5개의 퀴즈를 만들고, 그에 대한 퀴즈의 답변을 준비합니다.
-   준비한 문제와 답변을 각자의 원격 저장소에 저장 후 스터디 시간 한시간 전까지 **Pull Request** 요청을 합니다.
-   2명씩 짝지어 각자 준비해온 퀴즈를 풀어본 뒤, 다 같이 이야기해 볼만한 퀴즈를 모아서 스터디 참여인원 전원이 해당 퀴즈에 대해 토론하고 이야기합니다.

## Pull Request 진행방식

1. 해당 프로젝트를 `fork` 합니다.
2. `fork`한 원격 저장소에 새로운 브랜치를 생성합니다.
3. 생성한 브랜치에 아래 폴더구조를 참고하여 문제와 답변을 저장합니다.
4. 매주 문제와 답변을 저장하고 `Pull Request`를 요청합니다.
5. 요청한 `Pull Request`를 모두 merge 한 후, 스터디를 진행합니다.

-   `Pull Request` 를 요청하는 방법은 [링크](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse#7-%EB%B3%B8%EC%9D%B8-%EC%9B%90%EA%B2%A9-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%98%AC%EB%A6%AC%EA%B8%B0)를 참고합니다.

## 폴더구조

```
${topic}/${nickname}/${week_name}/
```

-   문제 저장 예시) `javascript/schnee/week1/questions.md`
-   답변 저장 예시) `javascript/schnee/week1/solutions.md`

## Git Commit 컨벤션

| 태그 |      설명      |
| ---- | :------------: |
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

<table>
  <thead>
    <tr>
      <th>JavaScript</th>
      <th>React</th>
      <th>TypeScript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://github.com/user-attachments/assets/8a973d4d-4bea-4df3-bd47-5310abf82df6" alt="JavaScript Deep Dive" width="200" height="250"></td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/a17105c5-efd9-4314-92c8-4473eab16a4e" alt="Modern React Deep Dive" width="200" height="250">
        <br>
        <a href="https://ko.react.dev/learn">
          <img src="https://github.com/user-attachments/assets/448321eb-2734-48b6-b6f1-c30faf108f8c" alt="[react-learn-docs](https://ko.react.dev/learn)" width="350" height="190">
        </a>
      </td>
      <td><img src="https://github.com/user-attachments/assets/4889a7a2-f11d-47da-a801-67dc73bd1ad7" alt="Effective TypeScript" width="200" height="250"></td>
    </tr>
  </tbody>
</table>

<details>
  <summary>주차 별 주제</summary>
  <div>
    
| Week                 | 주제 (JavaScript)                                                                                                 | 주제 (React)                                                                                              | 주제 (TypeScript)                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Week 1 (2024/03/06)  | ▣ 4장: 변수와 상수 <br> ▣ 6장: 데이터 타입 <br> [Week 1 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week1)  |                                                                                                            |                                                                                                                |
| Week 2 (2024/03/13)  | ▣ 23장: 실행 컨텍스트 <br> [Week 2 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week2)                     |                                                                                                            |                                                                                                                |
| Week 3 (2024/03/19)  | ▣ 24장: 클로저 <br> [Week 3 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week3)                     |                                                                                                            |                                                                                                                |
| Week 4 (2024/03/26)  | ▣ 12장: 함수 <br> [Week 4 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week4)                     |                                                                                                            |                                                                                                                |
| Week 5 (2024/04/02)  | ▣ 22장: this <br> [Week 5 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week5)                     |                                                                                                            |                                                                                                                |
| Week 6 (2024/04/09)  | ▣ 40장: event <br> [Week 6 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week6)                     |                                                                                                            |                                                                                                                |
| Week 7 (2024/04/16)  | ▣ 45장: 프로미스 <br> [Week 7 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week7)                     |                                                                                                            |                                                                                                                |
| Week 8 (2024/04/23)  | ▣ 38장: 브라우저의 렌더링 과정 <br> ▣ 42장: 비동기 프로그래밍 <br> ▣ 46장: 제너레이터와 async/await <br> [Week 8 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week8) |                                                                                                            |                                                                                                                |
| Week 9 (2024/04/30)  | ▣ 41장: 타이머 <br> ▣ 43장: Ajax <br> ▣ 44장: REST API <br> [Week 9 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week9) |                                                                                                            |                                                                                                                |
| Week 10 (2024/05/08) |                                                                                                                   | ▣ 2.3장: 클래스 컴포넌트와 함수 컴포넌트 <br> ▣ 2.4장: 렌더링은 어떻게 일어나는가? <br> [Week 10 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week10)                    |                                                                                                                |
| Week 11 (2024/05/16) |                                                                                                                   | ▣ 2.2장: 가상 DOM과 리액트 파이버 <br> [Week 11 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week11)                    |                                                                                                                |
| Week 12 (2024/05/22) |                                                                                                                   | ▣ 3.1장: 리액트의 모든 훅 파헤치기 - 1 <br> [Week 12 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week12)                    |                                                                                                                |
| Week 13 (2024/06/05) |                                                                                                                   | ▣ 3.1장: 리액트의 모든 훅 파헤치기 - 2 <br> [Week 13 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week13)                    |                                                                                                                |
| Week 14 (2024/06/12) |                                                                                                                   | ▣ 3.2장: 사용자 정의 훅과 고차 컴포넌트 <br> [Week 14 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week14)                    |                                                                                                                |
| Week 15 (2024/06/19) |                                                                                                                   | ▣ 5.1장: 상태 관리는 왜 필요한가? <br> [Week 15 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week15)                    |                                                                                                                |
| Week 16 (2024/06/26) |                                                                                                                   | ▣ 5.2장: 리액트 훅으로 시작하는 상태 관리 <br> ▣ 5.2.1장: 가장 기본적인 방법: useState와 useReducer <br> ▣ 5.2.2장: 지역 상태의 한계를 벗어나보자: useState 의 상태를 바깥으로 분리하기 <br> [Week 16 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week16)                    |                                                                                                                |
| Week 17 (2024/07/03) | ▣ 19.8장: 오버라이딩과 프로퍼티 섀도잉 <br> ▣ 19.9장: 프로토타입의 교체 <br> [Week 17 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/javascript/week17)                   |                                                                                                            |                                                                                                                |
| Week 18 (2024/07/10) |                                                                                                                   | ▣ 5.2.3장: useState와 Context동시에 사용해 보기 <br> ▣ 5.2.4장: 상태 관리 라이브러리 Recoil, Jotai, Zustand 살펴보기 <br> [Week 18 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week18)                    |                                                                                                                |
| Week 19 (2024/07/17) |                                                                                                                   | ▣ [State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory) <br> ▣ [렌더링 그리고 커밋](https://ko.react.dev/learn/render-and-commit) <br> ▣ [스냅샷으로서의 State](https://ko.react.dev/learn/state-as-a-snapshot) <br> [Week 19 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week19)                    |                                                                                                                |
| Week 20 (2024/07/26) |                                                                                                                   | ▣ [state 업데이트 큐](https://ko.react.dev/learn/queueing-a-series-of-state-updates) <br> ▣ [객체 State 업데이트하기](https://ko.react.dev/learn/updating-objects-in-state) <br> ▣ [배열 State 업데이트하기](https://ko.react.dev/learn/updating-arrays-in-state) <br> [Week 20 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week20)                    |                                                                                                                |
| Week 21 (2024/07/31) |                                                                                                                   | ▣ [State를 사용해 Input 다루기](https://ko.react.dev/learn/reacting-to-input-with-state) <br> ▣ [State 구조 선택하기](https://ko.react.dev/learn/choosing-the-state-structure#don-t-mirror-props-in-state) <br> ▣ [컴포넌트 간 State 공유하기](https://ko.react.dev/learn/sharing-state-between-components) <br> [Week 21 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week21)                    |                                                                                                                |
| Week 22 (2024/08/05) |                                                                                                                   | ▣ [State를 보존하고 초기화하기](https://ko.react.dev/learn/preserving-and-resetting-state) <br> ▣ [state 로직을 reducer로 작성하기](https://ko.react.dev/learn/extracting-state-logic-into-a-reducer) <br> ▣ [Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context) <br> [Week 22 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week22)                    |                                                                                                                |
| Week 23 (2024/08/15) |                                                                                                                   | ▣ [Reducer와 Context로 앱 확장하기](https://ko.react.dev/learn/scaling-up-with-reducer-and-context) <br> ▣ [Ref로 값 참조하기](https://ko.react.dev/learn/referencing-values-with-refs) <br> ▣ [Ref로 DOM 조작하기](https://ko.react.dev/learn/manipulating-the-dom-with-refs) <br> [Week 23 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week23)                    |                                                                                                                |
| Week 24 (2024/08/23) |                                                                                                                   | ▣ [Effect로 동기화하기](https://ko.react.dev/learn/synchronizing-with-effects) <br> ▣ [Effect가 필요하지 않을 수도 있습니다](https://ko.react.dev/learn/you-might-not-need-an-effect) <br> ▣ [반응형 effects의 생명주기](https://ko.react.dev/learn/lifecycle-of-reactive-effects) <br> [Week 24 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week24)                    |                                                                                                                |
| Week 25 (2024/08/29) |                                                                                                                   | ▣ [Effect에서 이벤트 분리하기](https://ko.react.dev/learn/separating-events-from-effects) <br> [Week 25 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/react/week25)                    |                                                                                                                |
| Week 26 (2024/09/06) |  |   | ▣ 1장: 타입스크립트 알아보기 <br> [Week 26 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week26) |
| Week 27 (2024/09/13) |  |   | ▣ 2장: 타입스크립트의 타입 시스템 <br> ▣ 아이템6: 편집기를 사용하여 타입 시스템 탐색하기 <br> ▣ 아이템7: 타입이 값들의 집합이라고 생각하기 <br> ▣ 아이템8: 타입 공간과 값 공간의 심벌 구분하기 <br> [Week 27 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week27) |
| Week 28 (2024/09/19) |  |   | ▣ 2장: 타입스크립트의 타입 시스템 <br> ▣ 아이템9 : 타입 단언보다는 타입 선언을 사용하기 <br> ▣ 아이템10 : 객체 래퍼 타입 피하기 <br> ▣ 아이템11 : 잉여 속성 체크의 한계 인지하기 <br> ▣ 아이템12 : 함수 표현식에 타입 적용하기 <br> ▣ 아이템13 : 타입과 인터페이스 차이점 알기 <br> ▣ 아이템14 : 타입 연산과 제너릭 사용으로 반복줄이기 <br> [Week 28 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week28) |
| Week 29 (2024/09/27) |  |   | ▣ 2장: 타입스크립트의 타입 시스템 <br> ▣ 아이템15 : 동적 데이터에 인덱스 시그니처 사용하기 <br> ▣ 아이템16 : number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기 <br> ▣ 아이템17 : 변경 관련된 오류 방지를 위해 readonly 사용하기 <br> ▣ 아이템18 : 매핑된 타입을 사용하여 값을 동기화하기 <br> [Week 29 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week29) |
| Week 30 (2024/10/02) |  |   | ▣ 3장 : 타입 추론 <br/> ▣ 아이템19 : 추론 가능한 타입을 사용해 장황한 코드 방지하기 <br/> ▣ 아이템20 : 다른 타입에는 다른 변수 사용하기 <br/> ▣ 아이템21 : 타입 넓히기 <br/> ▣ 아이템22 : 타입 좁히기 <br> [Week 30 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week30) |
| Week 31 (2024/10/08) |  |   | ▣ 3장 : 타입 추론 <br/> ▣ 아이템23 : 한꺼번에 객체 생성하기 <br/> ▣ 아이템24 : 일관성 있는 별칭 사용하기 <br/> ▣ 아이템25 : 비동기 코드에는 콜백 대신 async 함수 사용하기 <br/> ▣ 아이템26 : 타입 추론에 문맥이 어떻게 사용되는지 이해하기 <br/> ▣ 아이템27 : 함수형 기법과 라이브러리로 타입 흐름 유지하기 <br> [Week 31 - Question](https://github.com/minjeongHEO/frontend-study/tree/main/typescript/week31) |

  </div>
</details>
