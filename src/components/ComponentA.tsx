import React, { useState } from "react";
import { useEventEmitter } from "../hooks/useEventEmitter";
import { EVENTS_NAMES } from "../constants";

const ComponentA: React.FC = () => {
  const [count, setCount] = useState(0);
  const { emit } = useEventEmitter();

  const onSendEvent = () => {
    emit(EVENTS_NAMES.SEND_MESSAGE, {
      message: `Hello from Component A with count: ${count}`,
    });
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      Component A: <button onClick={onSendEvent}>Send</button>
    </div>
  );
};

export default ComponentA;
