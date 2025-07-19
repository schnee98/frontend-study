import { describe, it } from "vitest";
import { expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const groupBy: typeof Lodash.groupBy = await getTestingFunction();

describe("배열 입력", () => {
  it("문자열 속성으로 그룹화할 수 있어야 한다", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Alice", age: 28 },
      { name: "Charlie", age: 25 },
    ];

    const result = groupBy(users, "name");
    expect(result).toEqual({
      Alice: [
        { name: "Alice", age: 25 },
        { name: "Alice", age: 28 },
      ],
      Bob: [{ name: "Bob", age: 30 }],
      Charlie: [{ name: "Charlie", age: 25 }],
    });
  });

  it("숫자 속성으로 그룹화할 수 있어야 한다", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Alice", age: 28 },
      { name: "Charlie", age: 25 },
    ];

    const result = groupBy(users, "age");
    expect(result).toEqual({
      25: [
        { name: "Alice", age: 25 },
        { name: "Charlie", age: 25 },
      ],
      28: [{ name: "Alice", age: 28 }],
      30: [{ name: "Bob", age: 30 }],
    });
  });

  it("함수 iteratee로 그룹화할 수 있어야 한다", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = groupBy(numbers, (num) => (num % 2 === 0 ? "even" : "odd"));
    expect(result).toEqual({
      even: [2, 4, 6, 8, 10],
      odd: [1, 3, 5, 7, 9],
    });
  });

  it("함수 iteratee로 그룹화할 수 있어야 한다", () => {
    const words = ["apple", "banana", "cherry", "date", "elderberry"];

    const result = groupBy(words, (word) => word.length);
    expect(result).toEqual({
      5: ["apple"],
      6: ["banana", "cherry"],
      4: ["date"],
      10: ["elderberry"],
    });
  });

  it("빈 배열을 처리할 수 있어야 한다", () => {
    const result = groupBy([], "name");
    expect(result).toEqual({});
  });
});

describe("객체 입력", () => {
  it("객체의 값들을 그룹화할 수 있어야 한다", () => {
    const users = {
      user1: { name: "Alice", age: 25 },
      user2: { name: "Bob", age: 30 },
      user3: { name: "Alice", age: 28 },
      user4: { name: "Charlie", age: 25 },
    };

    const result = groupBy(users, "name");
    expect(result).toEqual({
      Alice: [
        { name: "Alice", age: 25 },
        { name: "Alice", age: 28 },
      ],
      Bob: [{ name: "Bob", age: 30 }],
      Charlie: [{ name: "Charlie", age: 25 }],
    });
  });

  it("객체 값들에 함수 iteratee를 적용할 수 있어야 한다", () => {
    const scores = {
      student1: 85,
      student2: 92,
      student3: 78,
      student4: 95,
      student5: 88,
    };

    const result = groupBy(scores, (score) =>
      score >= 90 ? "A" : score >= 80 ? "B" : "C"
    );
    expect(result).toEqual({
      A: [92, 95],
      B: [85, 88],
      C: [78],
    });
  });

  it("빈 객체를 처리할 수 있어야 한다", () => {
    const result = groupBy({}, "name");
    expect(result).toEqual({});
  });
});
