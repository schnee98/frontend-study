import { describe, it } from "vitest";
import { expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const curry: typeof Lodash.curry = await getTestingFunction();

describe("curry 함수", () => {
  it("단일 인자 함수는 그대로 반환해야 한다", () => {
    const double = (x: number) => x * 2;
    const curriedDouble = curry(double);
    expect(curriedDouble(2)).toBe(4);
    expect(curriedDouble(4)).toBe(8);
  });

  it("두 개의 인자를 받는 함수를 커리할 수 있어야 한다", () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)).toBe(3);
    expect(curriedAdd(5)(3)).toBe(8);
  });

  it("세 개의 인자를 받는 함수를 커리할 수 있어야 한다", () => {
    const multiply3 = (a: number, b: number, c: number) => a * b * c;
    const curriedMultiply = curry(multiply3);
    expect(curriedMultiply(2)(3)(4)).toBe(24);
    expect(curriedMultiply(1)(2)(3)).toBe(6);
  });

  it("다양한 타입의 인자를 처리할 수 있어야 한다", () => {
    const concat = (str: string, num: number, bool: boolean) =>
      `${str}-${num}-${bool}`;
    const curriedConcat = curry(concat);
    expect(curriedConcat("hello")(42)(true)).toBe("hello-42-true");
    expect(curriedConcat("test")(100)(false)).toBe("test-100-false");
  });

  describe("placeholder 기능", () => {
    it("placeholder를 사용하여 인자를 나중에 채울 수 있어야 한다", () => {
      const subtract = (a: number, b: number) => a - b;
      const curriedSubtract = curry(subtract);
      const _ = curry.placeholder;

      expect(curriedSubtract(_, 2)(5)).toBe(3);
      // @ts-expect-error
      expect(curriedSubtract(3, _)(1)).toBe(2);
    });

    it("여러 개의 placeholder를 사용할 수 있어야 한다", () => {
      const add3 = (a: number, b: number, c: number) => a + b + c;
      const curriedAdd3 = curry(add3);
      const _ = curry.placeholder;

      // @ts-expect-error
      expect(curriedAdd3(_, 2, _)(1)(3)).toBe(6);
      // @ts-expect-error
      expect(curriedAdd3(_, _, _)(1)(2)(3)).toBe(6);
      // @ts-expect-error
      expect(curriedAdd3(1, _, 3)(_)(2)).toBe(6);
    });

    it("placeholder가 있는 함수를 여러 번 호출할 수 있어야 한다", () => {
      const multiply3 = (a: number, b: number, c: number) => a * b * c;
      const curriedMultiply3 = curry(multiply3);
      const _ = curry.placeholder;

      // @ts-expect-error
      const multiplyFirst = curriedMultiply3(2, _, _);
      expect(multiplyFirst(3, 4)).toBe(24);
      expect(multiplyFirst(5, 6)).toBe(60);

      const multiplyLast = curriedMultiply3(_, _, 2);
      expect(multiplyLast(3, 4)).toBe(24);
      expect(multiplyLast(5, 6)).toBe(60);
    });

    it("placeholder를 사용한 복잡한 함수 합성이 가능해야 한다", () => {
      const format = (prefix: string, value: number, suffix: string) =>
        `${prefix}${value}${suffix}`;
      const curriedFormat = curry(format);
      const _ = curry.placeholder;

      const withDollar = curriedFormat("$", _, "");
      const withPercent = curriedFormat("", _, "%");

      expect(withDollar(100)).toBe("$100");
      expect(withPercent(50)).toBe("50%");

      const formatMoney = curriedFormat(_, _, ".00");
      expect(formatMoney("₩", 1000)).toBe("₩1000.00");
      expect(formatMoney("€", 2000)).toBe("€2000.00");
    });
  });
});
