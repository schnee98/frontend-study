1. 정답

```
interface Person{
  name:string;
  birth?:{
    place: string;
    date: Date;
  }
}
```

2. 정답

```
type CameraOptions = {
    zoom: number;
    bearing: number;
    pitch: number;
}
```

3. 정답

```

interface Camera{
  center: string;
  zoom:number;
  bearing:number;
  pitch:number;
}

type CameraOptions = Omit<Partial<Camera>,'center'>

type CameraOptions1 = Omit<Camera,'center'>


const co : CameraOptions ={
}
type CameraOptions = {
    zoom?: number;
    bearing?: number;
    pitch?: number;
}
```

---

### 설명

1. `Partial<Camera>`

- Partial은 TypeScript의 내장 유틸리티 타입으로, 모든 속성을 **선택적(optional)**으로 바꿉니다. 즉, Camera의 모든 속성이 필수가 아닌 선택 속성이 됩니다.
- 예를 들어, Camera 타입은 zoom, bearing, pitch가 필수 속성이지만, `Partial<Camera>`는 이 속성들을 모두 선택적으로 만듭니다.

2. `Omit<Partial<Camera>, 'center'>`

- Omit은 특정 인터페이스에서 일부 속성을 제거하는 유틸리티 타입입니다.
- `Omit<Partial<Camera>, 'center'>`는 `Partial<Camera>`에서 center 속성을 제외한 타입입니다.
- 즉, zoom, bearing, pitch 속성은 여전히 선택적이지만, center 속성은 이 타입에 포함되지 않습니다.
