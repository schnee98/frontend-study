1. 다음 테이블 예시를 보고 `Counter` 가 state를 변경할 때 업데이트 하는 순서를 테이블로 적어주세요

```
function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

| queued update | n | returns        |
|---------------|---|----------------|
| n => n + 1    | 0 | 0 + 1 = 1      |
| n => n + 1    | 1 | 1 + 1 = 2      |
| n => n + 1    | 2 | 2 + 1 = 3      |

답:

| queued update | number | returns        |
|---------------|---|----------------|
| "replace number with number + 1"    | 0 | 0 + 1 = 1      |
| "replace number with number + 1"    | 0 | 0 + 1 = 1      |
| "replace number with number + 1"    | 0 | 0 + 1 = 1      |

2. 중첩된 객체는 사실 중첩되어 있지 않습니다. 아래에서 `obj1` 객체를 바꾸면 `obj2` 의 값만 바꾸는게 아닌 `obj3` 의 값도 바뀌는 사이드 이펙트가 발생하는데, 이를 방지하려면 어떻게 코드를 바꿔야 할까요?

```
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

let obj3 = {
  name: 'Copycat',
  artwork: obj1
};
```

답:
```
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: { ...obj1 }, 
};

let obj3 = {
  name: 'Copycat',
  artwork: { ...obj1 },
};
```

3. Array 프로토타입 메서드들 중 `push`, `pop`, `splice`, `reverse` 함수들이 리액트에서 선호되지 않는 이유를 설명해주세요.

답: 위 메서드들은 배열을 변경하고, 배열을 변경하는 동작은 불변성 규칙에 어긋나기 떄문에