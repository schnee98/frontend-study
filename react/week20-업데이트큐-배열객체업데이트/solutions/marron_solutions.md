# state 업데이트 큐, 객체 state 업데이트하기, 배열 state 업데이트하기

1. slice와 splice의 차이 설명해주세요.

```
배열을 복사해서 변경, 배열을 직접 변경
```

2. immer을 사용하는 이유에 대해 설명해주세요.

```
불변(immutable) 상태 관리를 쉽게 할 수 있도록 도와준다.
state가 깊이 중첩되어있다면 사용.
```

3. 객체들은 사실 중첩되어 있지 않습니다. 그럼 어떻게 존재하는건가요?

```js
실제로 두 개의 다른 객체

let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};

obj1 객체는 obj2 “안”에 없습니다. obj3 또한 obj1을 “가리킬” 수 있기 때문입니다.

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

obj3.artwork.city을 변경하려 했다면, obj2.artwork.city와 obj1.city 둘 다에 영향을 미칠 것입니다. 이는 obj3.artwork, obj2.artwork와 obj1이 같은 객체이기 때문입니다. 객체를 “중첩된” 것으로 생각하면 이해하기 어려울 수 있습니다. 그것들은 프로퍼티를 통해 서로를 “가리키는” 각각의 객체들입니다.
```
