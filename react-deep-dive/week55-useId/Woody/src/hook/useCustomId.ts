import { useState, useEffect } from 'react';

// 컴포넌트 인스턴스 추적을 위한 심볼
const instanceSymbol = Symbol();

// 전역 ID 맵 (컴포넌트 인스턴스와 ID 매핑)
const idMap = new Map();

// 전역 카운터와 접두사를 위한 저장소
const globalState = {
  counter: 0,
  prefix: ''
};

// 접두사 설정 함수
export const setIdentifierPrefix = (prefix: string) => {
  globalState.prefix = prefix;
};

export const useCustomId = () => {
  // 첫 렌더링시 인스턴스별 고유 심볼 생성
  const [instance] = useState(() => ({ [instanceSymbol]: {} }));
  
  // 고유 ID 생성 (첫 렌더링 시에만)
  const [id] = useState(() => {
    // 이미 이 인스턴스에 ID가 할당되었는지 확인
    if (!idMap.has(instance)) {
      // 새 ID 할당
      const id = `${globalState.prefix}${globalState.counter}`;
      idMap.set(instance, id);
      globalState.counter += 1;
    }
    return idMap.get(instance);
  });

  // 컴포넌트 언마운트 시 메모리 정리
  useEffect(() => {
    return () => {
      idMap.delete(instance);
    };
  }, [instance]);

  return id
};