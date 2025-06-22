import { useState, useCallback, useEffect } from "react";
import { flushSync } from "react-dom";

export default function useCustomOptimistic<S, A>(
  state: S,
  updateFn: (currentState: S, optimisticValue: A) => S
): [S, (optimisticValue: A) => void] {
  const [optimisticState, setOptimisticState] = useState(state);

  useEffect(() => {
    setOptimisticState(state);
  }, [state]);

  const addOptimistic = useCallback(
    (optimisticValue: A) => {
      flushSync(() => {
        setOptimisticState((currentState) =>
          updateFn(currentState, optimisticValue)
        );
      });
    },
    [updateFn]
  );

  return [optimisticState, addOptimistic];
}

// NOTE

// 매개변수
// - state: 작업이 대기 중이지 않을 때 초기에 반환될 값입니다.
// - updateFn(currentState, optimisticValue): 현재 상태와 addOptimistic에 전달된 낙관적인 값을 취하는 함수로, 결과적인 낙관적인 상태를 반환합니다.
//    순수 함수여야 합니다.
//    updateFn은 두 개의 매개변수(currentState와 optimisticValue)를 취합니다.
//    반환 값은 currentState와 optimisticValue의 병합된 값입니다.

// 반환값
// - optimisticState: 결과적인 낙관적인 상태입니다. 작업이 대기 중이지 않을 때는 state와 동일하며, 그렇지 않은 경우 updateFn에서 반환된 값과 동일합니다.
// - addOptimistic: addOptimistic는 낙관적인 업데이트가 있을 때 호출하는 dispatch 함수입니다. 어떠한 타입의 optimisticValue라는 하나의 인자를 취하며, state와 optimisticValue로 updateFn을 호출합니다.

// // React는 lane 우선순위로 처리
// function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
//   var update = {
//     lane: requestUpdateLane(fiber),      // 즉시 처리될 레인 (고우선순위)
//     revertLane: requestTransitionLane(), // 나중에 되돌릴 레인 (저우선순위)
//     action: action,
//     hasEagerState: false,
//     eagerState: null,
//     next: null
//   };
//   // ...
// }

// // React 내부 - mountOptimistic (Lane 기반 우선순위 시스템)
// function mountOptimistic(passthrough) {
//         var hook = mountWorkInProgressHook();
//         hook.memoizedState = hook.baseState = passthrough;
//         var queue = {
//           pending: null,
//           lanes: 0,
//           dispatch: null,
//           lastRenderedReducer: null,
//           lastRenderedState: null
//         };
//         hook.queue = queue;
//         hook = dispatchOptimisticSetState.bind(
//           null,
//           currentlyRenderingFiber,
//           true,
//           queue
//         );
//         queue.dispatch = hook;
//         return [passthrough, hook];
//       }

// useOptimistic: function(passthrough) {
//   currentHookNameInDev = "useOptimistic";
//   mountHookTypesDev();
//   return mountOptimistic(passthrough);
// },

// exports.useOptimistic = function(passthrough, reducer) {
//   return resolveDispatcher().useOptimistic(passthrough, reducer);
// };

// | 측면 | flushSync 방식 | React 내부 방식 |
// |------|----------------|-----------------|
// | **동기화** | 강제 동기 렌더링 | Lane 우선순위 시스템 |
// | **성능** | 전체 DOM 블로킹 | 인터럽트 가능한 렌더링 |
// | **복잡도** | 간단 | 매우 복잡 |
// | **Concurrent** | 지원 안함 | 완전 지원 |
