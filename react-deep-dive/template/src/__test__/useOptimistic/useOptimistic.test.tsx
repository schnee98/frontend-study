import {
  renderHook,
  act,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import App from "../../App";
import useCustomOptimistic from "../../useCustomOptimistic";
import * as actions from "../../actions";

interface Message {
  text: string;
  sending?: boolean;
}

const reducer = (state: Message[], action: Message) => {
  return [action, ...state];
};

describe("🧪 useCustomOptimistic 훅 통합 테스트", () => {
  let baseState: Message[];

  beforeEach(() => {
    baseState = [];
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("낙관적 메시지를 바로 추가해야한다.", () => {
    const { result } = renderHook(() =>
      useCustomOptimistic(baseState, reducer)
    );

    act(() => {
      result.current[1]({ text: "hello", sending: true });
    });

    expect(result.current[0]).toEqual([{ text: "hello", sending: true }]);
  });

  it("여러 메시지를 순차적으로 추가할 수 있어야 한다.", () => {
    const { result } = renderHook(() =>
      useCustomOptimistic(baseState, reducer)
    );

    act(() => {
      result.current[1]({ text: "첫 번째", sending: true });
      result.current[1]({ text: "두 번째", sending: true });
    });

    expect(result.current[0]).toEqual([
      { text: "두 번째", sending: true },
      { text: "첫 번째", sending: true },
    ]);
  });

  it("baseState가 바뀌면 초기화되어야 한다.", () => {
    let currentBaseState: Message[] = [{ text: "기존 메시지" }];
    const { result, rerender } = renderHook(
      ({ base }) => useCustomOptimistic(base, reducer),
      { initialProps: { base: currentBaseState } }
    );

    act(() => {
      result.current[1]({ text: "낙관적 메시지", sending: true });
    });

    expect(result.current[0]).toEqual([
      { text: "낙관적 메시지", sending: true },
      { text: "기존 메시지" },
    ]);

    currentBaseState = [{ text: "새로운 메시지" }];
    rerender({ base: currentBaseState });

    expect(result.current[0]).toEqual([{ text: "새로운 메시지" }]);
  });

  it("메시지 입력 시, 입력한 메시지와 (Sending...)이 같이 표시되어야 한다.", async () => {
    vi.spyOn(actions, "deliverMessage").mockImplementation(
      (message) =>
        new Promise((resolve) => setTimeout(() => resolve(message), 1000))
    );

    render(<App />);

    const input = screen.getByPlaceholderText("Hello!");
    const button = screen.getByText("Send");

    fireEvent.change(input, { target: { value: "테스트 메시지" } });
    fireEvent.click(button);

    expect(screen.getByText("테스트 메시지")).toBeInTheDocument();
    expect(screen.getByText("(Sending...)")).toBeInTheDocument();
  });
});
