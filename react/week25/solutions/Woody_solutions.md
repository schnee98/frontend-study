# 👨‍🏫 week 25 - A

## ▣ [Effect에서 이벤트 분리하기](https://ko.react.dev/learn/separating-events-from-effects)

## ▣ [Effect 의존성 제거하기](https://ko.react.dev/learn/removing-effect-dependencies)

## ▣ [커스텀 Hook으로 로직 재사용하기](https://ko.react.dev/learn/reusing-logic-with-custom-hooks)

### 1️⃣ Q. 언제 `useEffectEvent`를 사용해야 하나요?

`useEffectEvent`는 **Effect 내**에서 컴포넌트의 상태나 props에 따라 변경되지 않는 **비반응형 코드**가 있을 때 사용합니다.  
또한, `useEffectEvent`는 다른 컴포넌트나 Hook에 전달되지 않도록 설계되어 있으므로, 해당 로직이 **컴포넌트 내부에서만 작동하고 외부로 전달할 필요가 없는 경우**에 사용하면 좋습니다.

-   **비반응형 코드**: 상태나 props의 변경과 관계없이 동일하게 유지되는 동작.
-   **효과**: 비반응형 코드를 Effect 내부에서 `useEffectEvent`를 사용해 분리하면, Effect의 **불필요한 재실행을 방지**하고 의도하지 않은 동작을 막는 데 도움이 됩니다.

    <br/>

### 2️⃣ Q. `useEffectEvent`를 Effect 내부에서만 호출하고, 다른 컴포넌트나 Hook에 전달하지 말아야 하는 이유는?

`useEffectEvent`는 **반응형이 아닌 로직**을 담고 있기 때문에, **Effect 내부에서만 호출**하는 것이 안전합니다.  
만약 `useEffectEvent`가 외부로 전달되거나 다른 컴포넌트에서 사용된다면, **예상치 못한 시점에 호출**될 수 있습니다.  
이는 컴포넌트의 상태와 **불일치**를 초래할 수 있습니다.

-   **효과**: Effect 내부에서만 사용함으로써, 해당 로직이 컴포넌트의 상태나 props에 **의존하지 않도록 보장**할 수 있습니다.

<br/>

### 3️⃣ Q. 아래 빈칸을 채워주세요

-   커스텀 Hook은 state 그 자체를 공유하는게 아닌 **state 저장 로직**을 공유하도록 합니다.
-   커스텀 Hook은 코드의 **재사용성**과 **가독성**을 높이기 위한 도구입니다.
