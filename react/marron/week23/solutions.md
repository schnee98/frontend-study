# week 23

1. 렌더링 중에 ref.current를 읽거나 쓰지 말아야하는 이유는 무엇인가요?

_답_

```
렌더링 중에 일부 정보가 필요한 경우 state를 대신 사용하세요. ref.current가 언제 변하는지 React는 모르기 때문에 렌더링할 때 읽어도 컴포넌트의 동작을 예측하기 어렵습니다. (if (!ref.current) ref.current = new Thing() 과 같은 코드는 첫 번째 렌더 중에 ref를 한 번만 설정하는 경우가 예외입니다.)

```

2. ref 어트리뷰트에 함수를 전달하는 ref 콜백에 대해 설명해주세요.

_답_

```
React에서 DOM 노드나 컴포넌트 인스턴스에 접근할 수 있게 해주는 방법 중 하나입니다. 이 접근 방식은 주로 다음과 같은 경우에 유용하게 사용됩니다.
```

컴포넌트가 렌더링 후 ref를 설정해야 하는 경우

```js
ref={node => {
  const map = getMap();
  if (node) {
    // Map에 노드를 추가합니다
    map.set(cat, node);
  } else {
    // Map에서 노드를 제거합니다
    map.delete(cat);
  }
}}
```

```
각 리스트 아이템마다 이 콜백이 실행됩니다.
node가 존재하면 (요소가 마운트될 때):
map.set(cat, node)로 Map에 노드를 저장합니다.
node가 null이면 (요소가 언마운트될 때):
map.delete(cat)로 Map에서 노드를 제거합니다.
getMap() 함수는 itemsRef에 저장된 Map을 반환하거나 새로 생성합니다.
```
