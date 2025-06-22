import {
  renderHook,
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
} from "vitest";
import { useState, startTransition } from "react";
import { testConfig } from "../test.config";
import loadCustomHook from "../loadCustomHook";

interface Message {
  text: string;
  sending: boolean;
}

const owner = testConfig.owner!;

let useCustomOptimistic: (
  baseState: Message[],
  reducer: (state: Message[], value: string) => Message[]
) => [Message[], (value: string) => void];

beforeAll(async () => {
  useCustomOptimistic = await loadCustomHook("useOptimistic", owner);
});

const reducer = (state: Message[], newMessage: string) => [
  { text: newMessage, sending: true },
  ...state,
];

async function deliverMessage(message: string): Promise<string> {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

function TestComponent() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [optimisticMessages, addOptimisticMessage] = useCustomOptimistic(
    messages,
    reducer
  );

  const handleSend = () => {
    const message = "테스트 메시지";
    addOptimisticMessage(message);

    startTransition(async () => {
      const sentMessage = await deliverMessage(message);
      setMessages((prev) => [{ text: sentMessage, sending: false }, ...prev]);
    });
  };

  return (
    <>
      <button onClick={handleSend}>Send</button>
      {optimisticMessages.map((msg: Message, idx: number) => (
        <div key={idx}>
          {msg.text}
          {msg.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

describe("useCustomOptimistic 훅 통합 테스트", () => {
  let baseState: Message[];

  beforeEach(() => {
    baseState = [];
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("낙관적 메시지를 바로 추가해야 한다.", () => {
    const { result } = renderHook(() =>
      useCustomOptimistic(baseState, reducer)
    );

    act(() => {
      result.current[1]("hello");
    });

    expect(result.current[0]).toEqual([{ text: "hello", sending: true }]);
  });

  it("여러 메시지를 순차적으로 추가할 수 있어야 한다.", () => {
    const { result } = renderHook(() =>
      useCustomOptimistic(baseState, reducer)
    );

    act(() => {
      result.current[1]("첫 번째");
      result.current[1]("두 번째");
    });

    expect(result.current[0]).toEqual([
      { text: "두 번째", sending: true },
      { text: "첫 번째", sending: true },
    ]);
  });

  it("baseState가 바뀌면 초기화되어야 한다.", () => {
    let currentBaseState: Message[] = [{ text: "기존 메시지", sending: false }];
    const { result, rerender } = renderHook(
      ({ base }) => useCustomOptimistic(base, reducer),
      {
        initialProps: { base: currentBaseState },
      }
    );

    act(() => {
      result.current[1]("낙관적 메시지");
    });

    expect(result.current[0]).toEqual([
      { text: "낙관적 메시지", sending: true },
      { text: "기존 메시지", sending: false },
    ]);

    currentBaseState = [{ text: "새로운 메시지", sending: false }];
    rerender({ base: currentBaseState });

    expect(result.current[0]).toEqual([
      { text: "새로운 메시지", sending: false },
    ]);
  });

  it("메시지를 추가하면 추가한 메시지와 (Sending...)이 같이 표시되어야 한다.", async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText("Send"));

    expect(screen.getByText("테스트 메시지")).toBeInTheDocument();
    expect(screen.getByText("(Sending...)")).toBeInTheDocument();
  });
});
