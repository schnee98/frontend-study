1. 훅(use로 시작하는 함수들)은 컴포넌트의 최상위 수준 또는 커스텀 훅에서만 호출할 수 있다. (O, X)
2. 아래의 잘못된 예시를 올바르게 변경하세요.

```
import React, { useState } from 'react';

const OrderComponent = () => {
  const [orders, setOrders] = useState(['Coffee', 'Tea']);

  const addOrder = (newOrder) => {
    orders.push(newOrder);
    setOrders(orders);
  };

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
      <button onClick={() => addOrder('Juice')}>Add Juice</button>
    </div>
  );
};

export default OrderComponent;

```

3. useState를 호출하면 React는 해당 렌더링에 대한 state의 (\_\_\_)을 제공
