1. 가상 DOM / 파이버의 장점을 설명해주세요.

2. 더블 버퍼링이 무엇인지 설명하고, 리액트에서 렌더링을 하는 과정에서 이 기법을 쓰는 이유를 설명해주세요.

3. 다음 리액트 코드와 리액트 코드를 파이버 트리로 표현한 그림을 참고해서 파이버의 작업 순서를 그림으로 그려주세요.

```
<A1>
  <B1>안녕하세요</B1>
  <B2>
    <C1>
      <D1 />
      <D2 />
    </C1>
  </B2>
  <B3 />
</A1>
```

<img src="img/react_fiber.jpg" alt="파이버 트리" width="600">