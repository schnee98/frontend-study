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

2. 주석과 변수명에 타입명을 쓰는 것을 피해야하는 이유를 설명해주세요.

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
