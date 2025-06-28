import { describe, it } from "vitest";
import { expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const cloneDeep: typeof Lodash.cloneDeep = await getTestingFunction();

describe("cloneDeep 함수", () => {
  it("기본 타입 값들을 정확히 복사해야 한다", () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep("안녕")).toBe("안녕");
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  it("배열을 깊은 복사해야 한다", () => {
    const original = [1, 2, 3];
    const copied = cloneDeep(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);

    const nestedArray = [1, [2, 3]];
    const copiedNested = cloneDeep(nestedArray);
    expect(copiedNested).toEqual(nestedArray);
    expect(copiedNested).not.toBe(nestedArray);
    expect(copiedNested[1]).not.toBe(nestedArray[1]);
  });

  it("객체를 깊은 복사해야 한다", () => {
    const original = { a: 1, b: 2 };
    const copied = cloneDeep(original);
    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);

    const nestedObj = { a: { b: 2 } };
    const copiedNested = cloneDeep(nestedObj);
    expect(copiedNested).toEqual(nestedObj);
    expect(copiedNested).not.toBe(nestedObj);
    expect(copiedNested.a).not.toBe(nestedObj.a);
  });

  it("중첩된 복잡한 구조를 깊은 복사해야 한다", () => {
    const original = {
      a: 1,
      b: {
        c: 2,
        d: [3, 4, { e: 5 }],
      },
    };
    const copied = cloneDeep(original);

    expect(copied).toEqual(original);
    expect(copied).not.toBe(original);
    expect(copied.b).not.toBe(original.b);
    expect(copied.b.d).not.toBe(original.b.d);
    expect(copied.b.d[2]).not.toBe(original.b.d[2]);

    // @ts-expect-error
    original.b.d[2].e = 6;
    // @ts-expect-error
    expect(copied.b.d[2].e).toBe(5);
  });

  it("순환 참조가 있는 객체도 올바르게 복사해야 한다", () => {
    const original: any = {
      a: 1,
      b: {
        c: 2,
      },
    };
    original.b.self = original.b;

    const copied = cloneDeep(original);
    expect(copied.a).toBe(1);
    expect(copied.b.c).toBe(2);
    expect(copied.b.self).toBe(copied.b);
    expect(copied.b.self).not.toBe(original.b);
  });
});
