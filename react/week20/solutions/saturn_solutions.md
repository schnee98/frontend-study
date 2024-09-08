1. 해당 state 변수의 첫 글자로 지정
2.

```
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

3. 얕은 복사이기 때문에 복사한 새 배열에는 원본 배열과 동일한 항목이 포함된다. (복사된 배열 내부의 객체를 수정하면 기존 state가 변경됨) nextList[0]과 list[0]은 동일한 객체를 가리킨다.
