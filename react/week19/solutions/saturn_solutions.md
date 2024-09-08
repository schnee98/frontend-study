1. O
2.

```
import React, { useState } from 'react';

const OrderComponent = () => {
  const [orders, setOrders] = useState(['Coffee', 'Tea']);

  const addOrder = (newOrder) => {
    // 올바른 방법: 새로운 배열을 생성하여 state를 업데이트합니다.
    setOrders((prevOrders) => [...prevOrders, newOrder]);
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

3. 스냅샷
