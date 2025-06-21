import { useState, useRef, startTransition } from "react";

import { deliverMessage } from "./actions.ts";
import useCustomOptimistic from "./useCustomOptimistic.tsx";

interface Message {
  text: string;
  sending: boolean;
}

interface ThreadProps {
  messages: Message[];
  sendMessageAction: (FormData: FormData) => Promise<void>;
}

function Thread({ messages, sendMessageAction }: ThreadProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useCustomOptimistic(
    messages,
    (state, newMessage: string) => [
      { text: newMessage, sending: true },
      ...state,
    ]
  );

  function formAction(formData: FormData) {
    const message = formData.get("message");
    if (typeof message !== "string") return;
    addOptimisticMessage(message);
    formRef.current?.reset();

    startTransition(async () => {
      await sendMessageAction(formData);
    });
  }

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello there!", sending: false },
  ]);
  async function sendMessageAction(formData: FormData) {
    const message = formData.get("message");
    if (typeof message !== "string") return;

    const sentMessage = await deliverMessage(message);
    startTransition(() => {
      setMessages((prev) => [{ text: sentMessage, sending: false }, ...prev]);
    });
  }

  return <Thread messages={messages} sendMessageAction={sendMessageAction} />;
}
