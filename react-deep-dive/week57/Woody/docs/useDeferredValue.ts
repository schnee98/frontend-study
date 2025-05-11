import { useState, useEffect } from 'react';

/** 

React는 useState, useEffect, useDeferredValue 등 모든 훅을 내부적으로 currentDispatcher를 통해 실행합니다.

useDeferredValue() 같은 훅이 호출될 때, 현재 어떤 렌더러 환경에서 훅이 동작 중인지 확인하고 해당 dispatcher를 반환합니다. 

이 dispatcher는 현재 렌더링 중인 컴포넌트 트리 컨텍스트에 따라 달라집니다.

예: 서버 사이드 렌더링, 클라이언트 렌더링, 스트리밍 등 환경마다 다른 dispatcher가 설정될 수 있음. 

*/

function resolveDispatcher() {
  // 이 부분은 훅을 잘못된 위치에서 호출했을 때 발생하는 경고 메시지입니다.
  // 예: 함수 컴포넌트 바깥, 조건문 안, 일반 함수 안 등.
  // React는 이런 경우에 dispatcher가 없다고 판단하고 저 에러를 띄워주는 것
  
  // ReactSharedInternals는 React 내부에서 사용하는 비공개 공유 객체
  // 여기엔 현재 사용 중인 React 렌더링 환경(Context) 및 훅(hook) dispatcher가 들어 있어요.

  var dispatcher = ReactSharedInternals.H; //  ReactSharedInternals.currentDispatcher
  null === dispatcher && console.error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
  );
  return dispatcher;
}

function useDeferredValue(value, initialValue) {
  return resolveDispatcher().useDeferredValue(value, initialValue);
};


