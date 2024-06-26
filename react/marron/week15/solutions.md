# 5.1 상태 관리는 왜 필요하죠?

1. 보일러플레이트란 무엇인지, 보일러플레이트가 부담스러운 이유는 무엇인지 서술하시오.

_답_

```
보일러플레이트란 상용구 코드를 의미하며 동작을 위해 반드시 포함되어야 하는 필수 내용이 포함된 코드, 최소한의 변경으로 재사용되는 코드를 말한다.

이러한 html 기본 구조도 보일러 플레이트
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body></body>
</html>
```

```
보일러플레이트가 부담스러운 이유는 단순한 상황에서도 보일러플레이트 코드 사용하면 비효율적이기 때문이다.
예를 들어 단순한 상태관리에 리덕스를 사용하는 경우 store, reducer 처럼 필요한 필수 코드들이 부담스럽다는 말.
```

2. 양방향 데이터 바인딩과 단방향 데이터 바인딩을 비교해주세요.
   _답_

```
양방향:
데이터가 부모와 자식 컴포넌트 간에 양방향으로 흐름
상태는 부모와 자식에서 서로의 상태 변화를 실시간으로 반영
데이터 흐름이 복잡해질 수 있으며, 상태도 많아짐에 따라 상태 추적이 어려워짐.

단방향:
부모 컴포넌트에서 자식 컴포넌트로 데이터가 단방향으로 흐름
상태는 주로 부모 컴포넌트에서 관리되며, 자식 컴포넌트는 props를 통해 상태를 전달
데이터 흐름을 추적하기 쉽지만 데이터의 갱신과 업데이트를 코드로 작성해야 하므로 코드의 양이 늘어난다는 단점.
```

3. 리덕스와 요즘 새롭게 떠오르는 라이브러리의 차이에 대해 설명해주세요.
   _답_

```
훅을 활용해 작은 크기의 상태를 효율적으로 관리한다.
전역 상태 관리 패러다임에서 벗어나 개발자가 원하는 만큼 상태를 지역적으로 관리하는 것을 가능하게 만들었고, 훅을 지원함으로써 함수 컴포넌트에서 손쉽게 사용할 수 있다는 장점을 가지고 있다.
```
