/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from "react";
import { EventEmitterContext } from "../contexts/EventEmitterContext";
import { AnyType, Listener } from "../types";

export const useEventEmitter = () => {
  const context = useContext(EventEmitterContext);

  if (!context) {
    throw new Error(
      "useEventEmitter must be used within an EventEmitterProvider"
    );
  }

  const on = useCallback((eventName: string, listener: Listener<AnyType>) => {
    return context.on(eventName, listener);
  }, []);

  const off = useCallback((eventName: string, listener: Listener<AnyType>) => {
    return context.off(eventName, listener);
  }, []);

  const emit = useCallback(<T = AnyType>(eventName: string, data: T) => {
    return context.emit(eventName, data);
  }, []);

  return {
    on,
    off,
    emit,
  };
};
