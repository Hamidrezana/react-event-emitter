import React, { useEffect, useState } from "react";
import { useEventEmitter } from "../hooks/useEventEmitter";
import { EVENTS_NAMES } from "../constants";

const ComponentB: React.FC = () => {
  const { on, off } = useEventEmitter();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const listener = (data: { message: string }) => {
      setMessage(data.message);
    };

    on(EVENTS_NAMES.SEND_MESSAGE, listener);

    return () => {
      off(EVENTS_NAMES.SEND_MESSAGE, listener);
    };
  }, [on, off]);

  return <div>Received message: {message}</div>;
};

export default ComponentB;
