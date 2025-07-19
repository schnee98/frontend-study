import { describe, it, beforeEach, vi, expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const memoize: typeof Lodash.memoize = await getTestingFunction();

describe("memoize 함수는,", function () {
  let add: (a: number, b: number) => number;
  let memoAdd: ReturnType<typeof memoize>;

  beforeEach(function () {
    add = function (a: number, b: number) {
      return a + b;
    };

    memoAdd = memoize(add);
  });

  it("memoize 되지 않은 함수와 동일한 결과를 도출해야 한다.", function () {
    expect(add(1, 2)).toBe(3);
    expect(memoAdd(1, 2)).toBe(3);
  });

  it("다른 인수를 받으면 다른 결과를 도출해야 한다.", function () {
    expect(memoAdd(1, 2)).toBe(3);
    expect(memoAdd(3, 4)).toBe(7);
    expect(memoAdd(1, 3)).toBe(4);
  });

  it("원시값이 인수로 들어올 경우, 기존 연산 결과를 기억해야 한다.", function () {
    const spy = vi.fn(function (arg: any) {
      return "Dummy output";
    });
    const memoSpy = memoize(spy);

    memoSpy(10);
    expect(spy.mock.calls.length).toBe(1);
    memoSpy(10);
    expect(spy.mock.calls.length).toBe(1);
  });

  it("참조값이 인수로 들어올 경우, 기존 연산 결과를 기억해야 한다.", function () {
    const spy = vi.fn(function (arg: any) {
      return "Dummy output";
    });
    const memoSpy = memoize(spy);

    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);

    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);
  });

  it("인수에 대한 처리가 정확하게 이루어져야 한다.", function () {
    const spy = vi.fn(function (...args: any[]) {
      return "Dummy output";
    });
    const memoSpy = memoize(spy);

    memoSpy([1, 2, 3]);
    expect(spy.mock.calls.length).toBe(1);

    memoSpy(1, 2, 3);
    expect(spy.mock.calls.length).toBe(2);
  });

  describe("resolver 함수 사용", () => {
    it("resolver 함수를 사용하여 캐시 키를 커스터마이징할 수 있어야 한다", () => {
      const spy = vi.fn(function (a: number, b: number) {
        return a + b;
      });

      const resolver = (a: number, b: number) => `${a}-${b}`;
      const memoSpy = memoize(spy, resolver);

      memoSpy(1, 2);
      expect(spy.mock.calls.length).toBe(1);

      memoSpy(1, 2);
      expect(spy.mock.calls.length).toBe(1);

      memoSpy(2, 1);
      expect(spy.mock.calls.length).toBe(2);
    });

    it("resolver 함수가 다른 키를 반환하면 다른 캐시 엔트리를 사용해야 한다", () => {
      const spy = vi.fn(function (a: number, b: number) {
        return a + b;
      });

      const resolver = (a: number, b: number) => `${a}-${b}`;
      const memoSpy = memoize(spy, resolver);

      expect(memoSpy(1, 2)).toBe(3);
      expect(memoSpy(2, 1)).toBe(3);
      expect(spy.mock.calls.length).toBe(2);
    });
  });

  describe("특수한 경우들", () => {
    it("빈 인자 배열을 처리할 수 있어야 한다", () => {
      const spy = vi.fn(function () {
        return "empty";
      });
      const memoSpy = memoize(spy);

      expect(memoSpy()).toBe("empty");
      expect(memoSpy()).toBe("empty");
      expect(spy.mock.calls.length).toBe(1);
    });

    it("NaN을 인자로 넣었을 때 memoize 함수가 인자값에 따라 결과를 정확히 캐싱하여 구분해야 한다", () => {
      const add = function (a, b, c, d) {
        return a + b + c + d;
      };
      const memoAdd = memoize(add);

      const result1 = memoAdd("b", "a", NaN, "a");

      expect(result1.toLowerCase()).toEqual("banana");
    });

    it("undefined와 null 인자를 구분할 수 있어야 한다", () => {
      const spy = vi.fn(function (a: any, b: any) {
        return `${a}-${b}`;
      });
      const memoSpy = memoize(spy);

      expect(memoSpy(undefined, null)).toBe("undefined-null");
      expect(memoSpy(null, undefined)).toBe("null-undefined");
      expect(spy.mock.calls.length).toBe(2);
    });

    it("함수 인자를 처리할 수 있어야 한다", () => {
      const spy = vi.fn(function (fn: Function) {
        return fn(2);
      });
      const memoSpy = memoize(spy);

      const double = (x: number) => x * 2;
      const triple = (x: number) => x * 3;

      expect(memoSpy(double)).toBe(4);
      expect(memoSpy(triple)).toBe(6);
      expect(spy.mock.calls.length).toBe(2);
    });
  });
});
