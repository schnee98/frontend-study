# week 25

1. Effect와 이벤트 핸들러 중 반응형인 로직은 무엇인가요?

_답_

```
Effect
```

2. effect 의존성 배열에 들어가야하는 모든 값을 \_\_\_값이라고 합니다. 이 값의 예시를 들어주세요.

_답_

```
props와 컴포넌트 내부에서 직접 선언된 모든 변수 및 함수
```

3. 어떤 경우에 커스텀 Hook을 사용해야 하나요?

_답_

```
effect 내부의 코드가 중복되는 경우.

안의 Effect를 추출해서 컴포넌트에 불필요한 의존성을 추가하는 것을 막을 수 있다.
```

`시간이 지나면 앱의 대부분 Effect들은 커스텀 Hook 안에 있을 겁니다.`

```js
function ShippingForm({ country }) {
  const [cities, setCities] = useState(null);
  // 이 Effect는 나라별 도시를 불러옵니다.
  useEffect(() => {
    let ignore = false;
    fetch(`/api/cities?country=${country}`)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setCities(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [country]);

  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);
  // 이 Effect 선택된 도시의 구역을 불러옵니다.
  useEffect(() => {
    if (city) {
      let ignore = false;
      fetch(`/api/areas?city=${city}`)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setAreas(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [city]);

  // ...
```

```js
function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
```
