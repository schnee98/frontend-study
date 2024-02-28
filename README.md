# 코드스쿼드 2024 웹 프론트엔드 스터디

## 스터디 진행방식
- 각자 매주 수요일까지 스터디 범위에 해당하는 책의 내용을 읽어옵니다.
- 스터디 범위 안에서 4~5개의 퀴즈를 만들고, 그에 대한 퀴즈의 답변을 준비합니다.
- 준비한 문제와 답변을 각자의 원격 저장소에 저장 후 스터디 시간 한시간 전까지 **Pull Request** 요청을 합니다.
- 2명씩 짝지어 각자 준비해온 퀴즈를 풀어본 뒤, 다 같이 이야기해 볼만한 퀴즈를 모아서 스터디 참여인원 전원이 해당 퀴즈에 대해 토론하고 이야기합니다.

## Pull Request 진행방식
1. 해당 프로젝트를 `fork` 합니다.
2. `fork`한 원격 저장소에 새로운 브랜치를 생성합니다.
3. 원격 저장소에 아래 폴더구조를 참고하여 문제와 답변을 저장합니다.
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
