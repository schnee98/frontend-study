1. 다음 코드에서 무효한 상태를 하나를 말해주고 어떻게 개선하면 좋을지 설명해주세요.

```typescript
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

async function changePage(state: State, newPage: string) {
  state.isLoading = true;
  try {
    const response = await fetch(getUrlForPage(newPage));
    if (!response.ok) {
      throw new Error(`Unable ot load $(newPage}: S{response. statusText}`);
    }
    const text = await response.text();
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = "" + e;
  }
}
```

답:
- 오류가 발생하여 changePage 함수가 종료됐지만 isLoading이 true인 상태
- finally 문을 추가하여 isLoading을 false로 설정하는 로직을 finally 문에 옮긴다.

2. 주석과 변수명에 타입명을 쓰는 것을 피해야하는 이유를 설명해주세요.

답:

- 타입 정보는 사람이 쓰는 것보다 타입스크립트가 확인해주는게 더 정확하다.
- 구현을 하고 주석을 업데이트 하지 않는 경우가 많아 함수에 대한 설명이 불일치할 경우가 많다.

3. 다음 두 타입 설계 방식을 보고 어떤 방식이 더 나은지 설명해주세요.

```typescript
// Variant 1
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

// Variant 2
interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}

interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}

type Layer = FillLayer | LineLayer | PointLayer;
```

답:

- 2번
- 1번은 속성을 혼용해서 사용하여 오류가 발생할 수 있다. 예시: FillLayout + LinePaint
