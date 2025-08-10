import { describe, it } from "vitest";
import { expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const uniq: typeof Lodash.uniq = await getTestingFunction();

describe("uniq 함수", () => {
  it("배열에서 중복된 값을 제거해야 한다", () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const result = uniq(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 한다", () => {
    expect(uniq([])).toEqual([]);
  });

  it("모든 값이 중복되지 않으면 원본 배열을 반환해야 한다", () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("문자열 배열에서 중복 제거", () => {
    expect(uniq(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
  });

  it("NaN이 여러 번 있을 때 한 번만 남겨야 한다", () => {
    expect(uniq([NaN, NaN, 1, NaN])).toEqual([NaN, 1]);
  });

  it("undefined와 null이 여러 번 있을 때 한 번만 남겨야 한다", () => {
    expect(uniq([undefined, undefined, null, null, 0])).toEqual([
      undefined,
      null,
      0,
    ]);
  });

  it("객체의 참조가 다르면 중복으로 간주하지 않는다", () => {
    const a = { x: 1 };
    const b = { x: 1 };
    expect(uniq([a, b, a])).toEqual([a, b]);
  });

  it("중첩 배열이 있을 때 참조가 다르면 중복으로 간주하지 않는다", () => {
    const arr1 = [1];
    const arr2 = [1];
    expect(uniq([arr1, arr2, arr1])).toEqual([arr1, arr2]);
  });

  it("불리언 값의 중복 제거", () => {
    expect(uniq([true, false, true, false, true])).toEqual([true, false]);
  });

  it("0과 -0을 구분하지 않고 한 번만 남겨야 한다", () => {
    expect(uniq([0, -0, 0, -0])).toEqual([0]);
  });

  it("Infinity와 -Infinity의 중복 제거", () => {
    expect(uniq([Infinity, -Infinity, Infinity, -Infinity])).toEqual([
      Infinity,
      -Infinity,
    ]);
  });
});
