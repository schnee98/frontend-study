import { describe, it, expect } from "vitest";
import * as Lodash from "lodash";

import getTestingFunction from "../utils/getTestingFunction";
const pick: typeof Lodash.pick = await getTestingFunction();

describe("pick 함수 테스트", () => {
  const testObject = {
    a: 1,
    b: "2",
    c: 3,
    d: "four",
    e: { nested: "value" },
  };

  it("1. 원본 객체를 변경하지 않는다", () => {
    const original = { a: 1, b: 2, c: 3 };
    const result = pick(original, "a", "b");
    expect(original).toEqual({ a: 1, b: 2, c: 3 });
    expect(result).not.toBe(original);
  });

  it("2. 지정된 키들만을 포함하는 새로운 객체를 반환한다", () => {
    const result = pick(testObject, "a", "c");
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("3. 배열로 키를 전달할 수 있다", () => {
    const result = pick(testObject, ["a", "c"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("4. 개별 인수로 키를 전달할 수 있다", () => {
    const result = pick(testObject, "a", "b", "c");
    expect(result).toEqual({ a: 1, b: "2", c: 3 });
  });

  it("5. 배열과 개별 인수를 혼합해서 사용할 수 있다", () => {
    const result = pick(testObject, ["a", "b"], "c", "d");
    expect(result).toEqual({ a: 1, b: "2", c: 3, d: "four" });
  });

  it("6. 중첩된 객체도 선택할 수 있다", () => {
    const result = pick(testObject, "e");
    expect(result).toEqual({ e: { nested: "value" } });
  });

  it("7. 존재하지 않는 키는 무시한다", () => {
    const result = pick(testObject, "a", "nonexistent", "c");
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("8. 빈 배열을 전달하면 빈 객체를 반환한다", () => {
    const result = pick(testObject, []);
    expect(result).toEqual({});
  });

  it("9. null이나 undefined인 키는 그냥 건너뜀 (에러 없음)", () => {
    const result = pick(testObject, "a", undefined, "b", null, "c");
    expect(result).toEqual({ a: 1, b: "2", c: 3 });
  });
});
