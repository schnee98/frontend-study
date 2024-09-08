1. 업데이터 함수의 명명 규칙은?
2. person.artwork.city를 업데이트하고 싶다면?

```
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

3. 아래 코드가 알맞지 않은 이유는?

```
const nextList = [...list];
nextList[0].seen = true; // 문제: list[0]을 변경시킵니다.
setList(nextList);
```
