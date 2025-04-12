import { useEffect, useRef, useState } from "react";
import { ConsoleContainer, Message, MessageContainer, User } from "./styles";
import messages from "../../data/console-messages.json";

export default function Console() {
  const [printed, setPrinted] = useState<string[]>([]);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const typeMessage = async (text: string) => {
      let currentText = "";
      for (let i = 0; i < text.length; i++) {
        currentText += text[i];
        setPrinted((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = currentText;
          return updated;
        });
        await sleep(20);
      }
    };

    const printStuff = async () => {
      for (const message of messages) {
        setPrinted((prev) => [...prev, ""]);
        await typeMessage(message.text);
        await sleep(500);
      }
    };

    printStuff();
  }, []);

  return (
    <ConsoleContainer className="pt-mono-bold">
      {printed.map((print: string) => (
        <MessageContainer>
          <User>User@Welcome ~</User>
          <Message>{` ${print}`}</Message>
        </MessageContainer>
      ))}
    </ConsoleContainer>
  );
}
