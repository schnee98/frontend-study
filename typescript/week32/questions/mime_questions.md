1. 다음 주석에 맞춰서 설계를 변경하시오

```
interface Person{
  name:string;
  // 둘다 동시에 있거나 동시에 없음.
  placeOfBirth?: string;
  dateOfBirth?: Date;
}

```

2. 다음 CameraOptions의 타입은 뭘까요

```
interface Camera{
  center: string;
  zoom:number;
  bearing:number;
  pitch:number;
}

type CameraOptions = Omit<Camera,'center'> // 얘
```

3. 다음 CameraOptions의 타입은 뭘까요

```
interface Camera{
  center: string;
  zoom:number;
  bearing:number;
  pitch:number;
}

type CameraOptions = Omit<Partial<Camera>,'center'> // 얘

```
