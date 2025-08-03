const merge = <T extends object, U extends object>(
  object: T,
  ...sources: (U | null | undefined)[]
): T & U => {
  const result = object as any;

  for (const source of sources) {
    if (source == null) continue;
    baseMerge(result, source);
  }

  return result;
};

const baseMerge = (result: any, source: any) => {
  for (const key in source) {
    const targetValue = result[key];
    const sourceValue = source[key];

    if (sourceValue === undefined) continue;

    // 배열 → 객체 변환 시 배열 구조 유지하면서 속성 병합
    if (Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
      result[key] = sourceValue;
      continue;
    }

    // 객체 → 배열 변환 시 배열 구조 유지하면서 속성 병합
    if (Array.isArray(targetValue) && !Array.isArray(sourceValue)) {
      const mergedArray = [...targetValue];

      if (
        typeof sourceValue === "object" &&
        sourceValue !== null &&
        "length" in sourceValue
      ) {
        const newLength = sourceValue.length;
        if (newLength > mergedArray.length) {
          for (let i = mergedArray.length; i < newLength; i++) {
            mergedArray[i] = null;
          }
        }
      }

      Object.assign(mergedArray, sourceValue);
      result[key] = mergedArray;
      continue;
    }

    // 둘 다 객체인 경우 → 재귀 병합
    if (isObject(targetValue) && isObject(sourceValue)) {
      result[key] = baseMerge(targetValue, sourceValue);
    } else {
      result[key] = source[key];
    }
  }

  return result;
};

const isObject = (value: any): boolean => {
  return typeof value === "object" && value !== null;
};

export default merge;
