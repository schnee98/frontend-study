import { describe, it, expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const flattenDeep: typeof Lodash.flattenDeep = await getTestingFunction();

describe("flattenDeep 함수 테스트", () => {
  it("중첩 배열을 한 단계로 평탄화해야 한다", () => {
    const input = [1, [2, [3, [4]], 5]];
    const result = flattenDeep(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("빈 배열을 넘겼을 때 빈 배열을 반환해야 한다", () => {
    const input: unknown[] = [];
    const result = flattenDeep(input);
    expect(result).toEqual([]);
  });

  it("이미 평탄화된 배열을 넘겼을 때 동일한 배열을 반환해야 한다", () => {
    const input = [1, 2, 3];
    const result = flattenDeep(input);
    expect(result).toEqual([1, 2, 3]);
  });
  
  it("중첩된 빈 배열을 포함한 배열을 평탄화해야 한다", () => {
    const input = [1, [], [2, [3, []]], 4];
    const result = flattenDeep(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("깊이 있는 중첩 배열을 올바르게 평탄화해야 한다", () => {
    const input = [[[[[[1]]]]]];
    const result = flattenDeep(input);
    expect(result).toEqual([1]);
  });
});
