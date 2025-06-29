function cloneDeep<T>(
  value: T,
  visited: WeakMap<object, any> = new WeakMap()
): T {
  // 기본 타입 처리
  if (typeof value !== "object" || value === null) {
    // * null 도 object 이므로 체크해야 함
    return value;
  }

  // 순환 참조 체크: 이미 복사한 객체라면 복사본을 반환
  if (visited.has(value as object)) {
    return visited.get(value as object);
  }

  // 배열 처리
  if (Array.isArray(value)) {
    // return value.map((item) => cloneDeep(item)) as T;

    const arrayClone: any[] = [];
    visited.set(value as object, arrayClone); // 먼저 등록 (순환 참조 방지)

    for (let i = 0; i < value.length; i++) {
      arrayClone[i] = cloneDeep(value[i], visited);
    }

    return arrayClone as T;
  }

  // 객체 처리
  // ❌ 잘못된 방식 (상속된 속성도 복사됨)
  // if (typeof value === "object" && value !== null) {
  //   return Object.fromEntries(
  //     Object.entries(value).map(([key, value]) => [key, cloneDeep(value)])
  //   ) as T;
  // }

  // ❌ 잘못된 방식 (무한 루프)
  // NOTE: 객체의 자체 속성만 복사하고, 상속받은 속성은 복사하지 않아야 한다
  // function badClone(obj) {
  //   const result = {};
  //   for (const key in obj) {
  //     result[key] = badClone(obj[key]); // 순환 참조 시 무한 루프!
  //   }
  //   return result;
  // }

  // ✅ 올바른 방식
  const result = {} as T;
  visited.set(value as object, result); // 먼저 등록 (순환 참조 방지)

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      (result as any)[key] = cloneDeep(value[key], visited);
    }
  }

  return result;
}

export default cloneDeep;

/*
NOTE: Map vs WeakMap

순환 참조를 추적하기 위해 WeakMap을 사용하여 이미 복사한 객체를 추적한다.

- Map은 key-value에 대해 강한 참조를 유지한다. 
- 강한 참조는 해당 객체가 메모리에서 제거되는 것을 방지하는 방식을 뜻한다.
- Map에 저장된 객체는 Map이 존재하는 한 메모리에서 해제되지 않는다. 따라서 의도치 않은 메모리 누수가 발생할 수 있다.
- 더 이상 사용하지 않는 key-value 쌍은 명시적으로 delete(key) 메서드를 사용해서 지워줘야 한다.
- 또한, Map이 더 이상 사용되지 않는다면 clear() 메서드를 활용하자.

- WeakMap에서는 앞서 Map과 달리 key는 반드시 객체여야 한다. 
- 즉, 원시 타입 값을 key 사용할 수 없는 것이다. value는 아무거나 가능하다.
- 또한 가장 큰 차이는 WeakMap은 "약한 참조"를 유지한다는 점이다. 
- 즉, 객체에 대한 참조가 WeakMap을 제외하고 존재하지 않는다면, 해당 객체는 가비지 컬렉터의 대상이 된다. 
- 키로 사용된 객체에 대한 다른 참조가 없다면 가비지 컬렉션의 대상이 된다.
- 참고로 WeakMap은 size 속성을 가지고 있지 않다. 따라서 WeakMap의 크기를 직접 알 수 없다.
- Map에는 존재하는 keys(), values(), entries() 같은 순회 메서드도 제공하지 않는다. 이는 WeakMap의 내용을 직접 순회할 수 없음을 의미한다.
*/
