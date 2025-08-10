import { describe, it, vi, beforeEach } from "vitest";
import { expect } from "vitest";
import getTestingFunction from "../utils/getTestingFunction";
import * as Lodash from "lodash";

const throttle: typeof Lodash.throttle = await getTestingFunction();

describe("throttle 함수", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(0);
  });

  it("버스트 호출 시 즉시 호출은 1번만(기본: leading=true)", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    throttled();
    throttled();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("기본 옵션에서 동일 윈도우 내 추가 호출은 trailing으로 1번 더 실행", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    throttled();
    throttled();

    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("간격(>=wait)마다 호출하면 매번 즉시 실행", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    vi.advanceTimersByTime(100);
    throttled();
    vi.advanceTimersByTime(100);
    throttled();

    expect(func).toHaveBeenCalledTimes(3);
  });

  it("leading=false, trailing=true: 첫 호출은 지연되어 wait 후 1번 실행", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100, { leading: false, trailing: true });

    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("leading=false, trailing=false: 어떤 시점에도 실행되지 않음", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100, { leading: false, trailing: false });

    throttled();
    throttled();
    vi.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(0);
  });

  it("leading=true, trailing=false: 윈도우 시작에서만 실행, 끝에서는 실행 안 함", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100, { leading: true, trailing: false });

    throttled();
    throttled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("trailing 호출은 마지막 인자를 사용해야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled("a");
    vi.advanceTimersByTime(10);
    throttled("b");

    vi.advanceTimersByTime(100);
    expect(func.mock.calls[0][0]).toBe("a");
    expect(func.mock.calls[1][0]).toBe("b");
  });

  it("this 바인딩을 유지해야 한다 (leading + trailing)", () => {
    const calls: number[] = [];
    const obj = {
      id: 42,
      handler(this: any, x: number) {
        calls.push(this.id + x);
      },
    };

    const throttled = throttle(obj.handler, 100);
    throttled.call(obj, 1);
    throttled.call(obj, 2);
    vi.advanceTimersByTime(100);

    expect(calls).toEqual([43, 44]);
  });

  it("인자를 그대로 전달해야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled(1, 2, 3);
    vi.advanceTimersByTime(10);
    throttled(4, 5, 6);
    vi.advanceTimersByTime(100);

    expect(func).toHaveBeenNthCalledWith(1, 1, 2, 3);
    expect(func).toHaveBeenNthCalledWith(2, 4, 5, 6);
  });

  it("단 한 번 호출 후 추가 호출 없으면 trailing은 발생하지 않아야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("윈도우 내 여러 호출에도 trailing은 한 번만 실행되어야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    for (let t = 10; t < 100; t += 10) {
      vi.advanceTimersByTime(10);
      throttled();
    }
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("오랜 시간 호출이 없다가 다시 호출되면 즉시 실행되어야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(1000);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("마지막 버스트 후 trailing 한 번만 실행", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    vi.advanceTimersByTime(20);
    throttled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("trailing=false에서는 윈도우 끝에서 실행되지 않아야 한다", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100, { trailing: false, leading: true });

    throttled();
    for (let t = 10; t < 100; t += 10) {
      vi.advanceTimersByTime(10);
      throttled();
    }
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("여러 개의 throttled 함수가 서로 간섭하지 않아야 한다", () => {
    const f1 = vi.fn();
    const f2 = vi.fn();
    const t1 = throttle(f1, 100);
    const t2 = throttle(f2, 200);

    t1();
    t2();
    expect(f1).toHaveBeenCalledTimes(1);
    expect(f2).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    expect(f1).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    expect(f2).toHaveBeenCalledTimes(1);
  });

  it("leading=false에서 연속 호출 시 각 윈도우 끝에서 한 번씩 실행", () => {
    const func = vi.fn();
    const throttled = throttle(func, 100, { leading: false, trailing: true });

    throttled();
    vi.advanceTimersByTime(50);
    throttled();
    vi.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });
});
