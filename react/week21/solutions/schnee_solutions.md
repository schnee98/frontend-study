1. 리액트에서 명령형으로 코드를 구현하면 안되는 이유를 설명해주세요.

답:

- 버그를 추적하려고 할 때 모든 코드를 처음부터 끝까지 순서대로 따라가야하기 때문에 어렵다.
- 기능 확장을 할 때 복잡성이 기하급수적으로 올라간다.

2. 다음 코드의 잘못된 점을 말해주고 이 코드로 인해 생길 버그에 대해서 이야기 해주세요.

```js
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  //...
}
```

답:

- props를 useState의 초기값으로 전달한 점
- 첫번째 렌더링 이 후에 props가 변경되고 리렌더링 되면 변경된 props로 color 상태가 바뀌지 않는다.

3. 다음과 같이 깊게 중첩된 state를 피하려면 어떻게 해야 할까요? 그리고 깊게 중첩된 state를 피해야 하는 이유도 알려주세요.

```js
export const initialTravelPlan = {
  id: 0,
  title: "(Root)",
  childPlaces: [
    {
      id: 1,
      title: "Earth",
      childPlaces: [
        {
          id: 2,
          title: "Africa",
          childPlaces: [
            {
              id: 3,
              title: "Botswana",
              childPlaces: [],
            },
            {
              id: 4,
              title: "Egypt",
              childPlaces: [],
            },
            {
              id: 5,
              title: "Kenya",
              childPlaces: [],
            },
            {
              id: 6,
              title: "Madagascar",
              childPlaces: [],
            },
            {
              id: 7,
              title: "Morocco",
              childPlaces: [],
            },
            {
              id: 8,
              title: "Nigeria",
              childPlaces: [],
            },
            {
              id: 9,
              title: "South Africa",
              childPlaces: [],
            },
          ],
        },
        {
          id: 10,
          title: "Americas",
          childPlaces: [
            {
              id: 11,
              title: "Argentina",
              childPlaces: [],
            },
            {
              id: 12,
              title: "Brazil",
              childPlaces: [],
            },
            {
              id: 13,
              title: "Barbados",
              childPlaces: [],
            },
            {
              id: 14,
              title: "Canada",
              childPlaces: [],
            },
            {
              id: 15,
              title: "Jamaica",
              childPlaces: [],
            },
            {
              id: 16,
              title: "Mexico",
              childPlaces: [],
            },
            {
              id: 17,
              title: "Trinidad and Tobago",
              childPlaces: [],
            },
            {
              id: 18,
              title: "Venezuela",
              childPlaces: [],
            },
          ],
        },
        {
          id: 19,
          title: "Asia",
          childPlaces: [
            {
              id: 20,
              title: "China",
              childPlaces: [],
            },
            {
              id: 21,
              title: "India",
              childPlaces: [],
            },
            {
              id: 22,
              title: "Singapore",
              childPlaces: [],
            },
            {
              id: 23,
              title: "South Korea",
              childPlaces: [],
            },
            {
              id: 24,
              title: "Thailand",
              childPlaces: [],
            },
            {
              id: 25,
              title: "Vietnam",
              childPlaces: [],
            },
          ],
        },
        {
          id: 26,
          title: "Europe",
          childPlaces: [
            {
              id: 27,
              title: "Croatia",
              childPlaces: [],
            },
            {
              id: 28,
              title: "France",
              childPlaces: [],
            },
            {
              id: 29,
              title: "Germany",
              childPlaces: [],
            },
            {
              id: 30,
              title: "Italy",
              childPlaces: [],
            },
            {
              id: 31,
              title: "Portugal",
              childPlaces: [],
            },
            {
              id: 32,
              title: "Spain",
              childPlaces: [],
            },
            {
              id: 33,
              title: "Turkey",
              childPlaces: [],
            },
          ],
        },
        {
          id: 34,
          title: "Oceania",
          childPlaces: [
            {
              id: 35,
              title: "Australia",
              childPlaces: [],
            },
            {
              id: 36,
              title: "Bora Bora (French Polynesia)",
              childPlaces: [],
            },
            {
              id: 37,
              title: "Easter Island (Chile)",
              childPlaces: [],
            },
            {
              id: 38,
              title: "Fiji",
              childPlaces: [],
            },
            {
              id: 39,
              title: "Hawaii (the USA)",
              childPlaces: [],
            },
            {
              id: 40,
              title: "New Zealand",
              childPlaces: [],
            },
            {
              id: 41,
              title: "Vanuatu",
              childPlaces: [],
            },
          ],
        },
      ],
    },
    {
      id: 42,
      title: "Moon",
      childPlaces: [
        {
          id: 43,
          title: "Rheita",
          childPlaces: [],
        },
        {
          id: 44,
          title: "Piccolomini",
          childPlaces: [],
        },
        {
          id: 45,
          title: "Tycho",
          childPlaces: [],
        },
      ],
    },
    {
      id: 46,
      title: "Mars",
      childPlaces: [
        {
          id: 47,
          title: "Corn Town",
          childPlaces: [],
        },
        {
          id: 48,
          title: "Green Hill",
          childPlaces: [],
        },
      ],
    },
  ],
};
```

답:

- 각 객체에 자식 객체를 중첩하는 대신에 자식의 id를 배열로 저장한다.
- 깊게 중첩된 객체를 업데이트 할 때 변경된 부분부터 모든 객체의 복사본을 만들어야한다. (메모리 비용이 많이 든다.)
