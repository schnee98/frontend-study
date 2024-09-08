## 1. state 큐를 구현해 보세요.

[text](https://ko.react.dev/learn/queueing-a-series-of-state-updates)

```
export const getFinalState = (baseState, queue) =>
    queue.reduce(
        (acc, update) => (typeof update === "function" ? update(acc) : update),
        baseState
    );

```

## 2. 아래 코드의 handleCityChange에서 city를 변경해도 리렌더링이 되지 않습니다. 코드를 수정하고 handleCityChange 함수가 작동하지 않는 이유를 설명하세요. 

- handleCityChange 함수가 작동하지 않는 이유는 user 객체의 참조가 변경되지 않기 때문이다. 리액트는 상태 객체의 참조를 기준으로 변경 사항을 감지힌디. 중첩된 객체의 속성만 수정하면 상위 레벨 객체의 참조가 변경되지 않으므로 상태 변경을 감지할 수 없다. 상태 업데이트 시 새로운 메모리 주소를 가진 객체를 생성하지 않으면 리액트는 변경 사항을 감지하지 못한다.
```
import { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  });

  function handleCityChange() {
    user.address.city = 'Los Angeles';
    setUser(user);
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.address.city}</p>
      <button onClick={handleCityChange}>Change City</button>
    </div>
  );
}

```

- 
```
function handleCityChange() {
    setUser({
      ...user,
      address: {
        ...user.address, city: 'Los Angeles'
      }
    });
  }
```

