// _.merge()는 Lodash 라이브러리의 객체 병합 함수로, 여러 소스 객체의 속성을 대상 객체에 재귀적으로 병합합니다.
// 이는 _.assign()과 달리 깊은 병합(deep merge)을 수행한다는 점이 핵심입니다.

import { describe, it, expect } from "vitest";
import * as Lodash from "lodash";
import _ from "lodash";

import getTestingFunction from "../utils/getTestingFunction";
const merge: typeof Lodash.merge = await getTestingFunction();

describe("merge 함수 테스트", () => {
  it("1. 중첩된 객체와 배열을 재귀적으로 병합한다 - 기본 케이스", () => {
    const testObject = {
      a: [{ b: 2 }, { d: 4 }],
    };

    const otherObject = {
      a: [{ c: 3 }, { e: 5 }],
    };

    const result = merge(testObject, otherObject);
    expect(result).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  it("2. 첫번째 인수의 대상 객체를 직접 수정하여 반환한다", () => {
    const target = { a: 1, b: { x: 10 } };
    const source = { b: { y: 20 }, c: 3 };

    const result = merge(target, source);

    expect(result).toBe(target); // 같은 객체 참조
    expect(target).toEqual({ a: 1, b: { x: 10, y: 20 }, c: 3 });
  });

  it("3. 소스 객체의 속성 값이 undefined인 경우 해당 속성은 건너뛴다", () => {
    const target = { a: 1, b: 2 };
    const source = { b: undefined, c: 3 };

    const result = merge(target, source);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("4. 소스 객체들이 왼쪽에서 오른쪽 순서로 적용된다", () => {
    const target = { a: 1 };
    const source1 = { b: 2, c: "first" };
    const source2 = { c: "second", d: 4 };

    const result = merge(target, source1, source2);
    expect(result).toEqual({ a: 1, b: 2, c: "second", d: 4 });
  });

  it("5. null이나 undefined 소스는 건너뛴다", () => {
    const target = { a: 1 };
    const result = merge(target, null, undefined, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("6. 객체 → 배열로 변환 시 덮어쓰기", () => {
    const target = { data: { users: { count: 5 } } };
    const source = { data: { users: ["alice", "bob"] } };

    const result = merge(target, source);
    expect(result).toEqual({ data: { users: ["alice", "bob"] } });
  });

  it("7. 배열 → 객체로 변환 시 병합", () => {
    const target = { list: [1, 2, 3] };
    const source = { list: { length: 10, type: "custom" } };

    const result = merge(target, source);
    // lodash는 배열 + 객체 병합 시 배열이 유지되면서 속성이 병합됨
    const expectedArray: any = [
      1,
      2,
      3,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    expectedArray.type = "custom"; // 배열 객체에 type 속성 추가

    expect(result).toEqual({ list: expectedArray });
  });

  it("8. 배열끼리는 인덱스 기준으로 병합", () => {
    const target = { arr: [{ a: 1 }, { b: 2 }] };
    const source = { arr: [{ c: 3 }, { d: 4 }] };

    const result = merge(target, source);
    expect(result).toEqual({
      arr: [
        { a: 1, c: 3 },
        { b: 2, d: 4 },
      ],
    });
  });

  it("9. 배열 길이가 다를 때 병합", () => {
    const target = { items: [{ name: "item1" }, { name: "item2" }] };
    const source = { items: [{ id: 1 }, { id: 2 }, { id: 3, name: "item3" }] };

    const result = merge(target, source);
    expect(result).toEqual({
      items: [
        { name: "item1", id: 1 },
        { name: "item2", id: 2 },
        { id: 3, name: "item3" },
      ],
    });
  });

  it("10. 원시값 → 객체로 변환", () => {
    const target = { value: 42 };
    const source = { value: { number: 42, type: "integer" } };

    const result = merge(target, source);
    expect(result).toEqual({ value: { number: 42, type: "integer" } });
  });

  it("11. 객체 → 원시값으로 변환", () => {
    const target = { config: { theme: "dark", lang: "ko" } };
    const source = { config: "reset" };

    const result = merge(target, source);
    expect(result).toEqual({ config: "reset" });
  });

  it("12. 깊은 중첩 객체 병합", () => {
    const target = {
      user: {
        profile: {
          name: "John",
          settings: { theme: "dark" },
        },
      },
    };

    const source = {
      user: {
        profile: {
          age: 30,
          settings: { language: "ko", notifications: true },
        },
      },
    };

    const result = merge(target, source);
    expect(result).toEqual({
      user: {
        profile: {
          name: "John",
          age: 30,
          settings: {
            theme: "dark",
            language: "ko",
            notifications: true,
          },
        },
      },
    });
  });
});
