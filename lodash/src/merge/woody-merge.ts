import _ from "lodash";

function isObject(value: unknown): boolean {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export default function merge(
  object: Record<string, any>,
  ...sources: Record<string, any>[]
): Record<string, any> {
  if (object === null || object === undefined) {
    object = {};
  }

  for (const source of sources) {
    if (source === null || source === undefined) continue;
    mergeDeep(object, source);
  }

  return object;
}

function mergeDeep(
  target: Record<string, any>,
  source: Record<string, any>
): void {
  for (const [sourceKey, sourceValue] of Object.entries(source)) {
    const targetValue = target[sourceKey];
    if ((targetValue || targetValue === null) && sourceValue === undefined)
      continue;

    // 1. 소스 값이 배열인 경우
    if (Array.isArray(sourceValue)) {
      // 타겟이 배열이 아니면 새 배열로 초기화
      if (!Array.isArray(targetValue)) {
        target[sourceKey] = [];
      }

      // 배열의 각 인덱스를 재귀적으로 병합
      for (let i = 0; i < sourceValue.length; i++) {
        if (i >= target[sourceKey].length) {
          target[sourceKey][i] = sourceValue[i];
        } else {
          // 둘 다 객체면 재귀적으로 병합, 아니면 덮어쓰기
          if (isObject(sourceValue[i]) && isObject(target[sourceKey][i])) {
            mergeDeep(target[sourceKey][i], sourceValue[i]);
          } else {
            target[sourceKey][i] = sourceValue[i];
          }
        }
      }
      continue;
    }

    // 2. 소스 값이 객체인 경우
    if (isObject(sourceValue)) {
      // 타겟이 배열인 경우: 배열을 유지하면서 객체 속성들을 배열에 병합
      if (Array.isArray(targetValue)) {
        for (const [objKey, objValue] of Object.entries(sourceValue)) {
          if (objKey === "length" && typeof objValue === "number") {
            // length 속성은 배열의 길이를 확장
            while (targetValue.length < objValue) {
              targetValue.push(null);
            }
          } else {
            // 다른 속성들은 배열 객체에 직접 할당
            (targetValue as any)[objKey] = objValue;
          }
        }
      } else {
        // 대상 값이 객체가 아니면 빈 객체로 초기화
        if (!isObject(targetValue)) {
          target[sourceKey] = {};
        }
        mergeDeep(target[sourceKey], sourceValue);
      }
      continue;
    }

    // 원시값인 경우 직접 할당 (덮어쓰기)
    target[sourceKey] = sourceValue;
  }
}
