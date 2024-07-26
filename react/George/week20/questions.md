## 1. state 큐를 구현해 보세요.

[text](https://ko.react.dev/learn/queueing-a-series-of-state-updates)

## 2. 아래 코드의 handleCityChange에서 city를 변경해도 리렌더링이 되지 않습니다. 코드를 수정하고 handleCityChange 함수가 작동하지 않는 이유를 설명하세요. 

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