import { TickerContainer, TickerMessages } from "./styles";
import tickerMessages from "../../data/ticker-messages.json";
import { useEffect, useRef, useState } from "react";

export default function Ticker() {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const tickerRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const animationSpeed = 100;

  function shuffle(array: string[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const updateMessage = () => {
    const shuffled = shuffle(tickerMessages);
    const text = shuffled.reduce(
      (accumulator, item) => accumulator + item + " | ",
      ""
    );
    setCurrentMessage(text);
  };
  useEffect(() => {
    updateMessage(); // initial set

    const tickerEl = tickerRef.current;
    const handleIteration = () => {
      updateMessage(); // update on animation loop
    };

    tickerEl?.addEventListener("animationiteration", handleIteration);
    return () => {
      tickerEl?.removeEventListener("animationiteration", handleIteration);
    };
  }, [tickerMessages]);

  useEffect(() => {
    if (tickerRef.current) {
      const width = tickerRef.current.offsetWidth;
      setTextWidth(width);
    }
  }, [currentMessage]);

  const animationDuration = textWidth / animationSpeed;

  return (
    <TickerContainer className="pt-mono-bold">
      <TickerMessages
        ref={tickerRef}
        animationDuration={animationDuration}
        textWidth={textWidth}
      >
        {currentMessage}
      </TickerMessages>
    </TickerContainer>
  );
}
