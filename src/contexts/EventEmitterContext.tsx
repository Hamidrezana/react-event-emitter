import React, { createContext, ReactNode, useMemo } from "react";
import { EventEmitter } from "../classes/EventEmitter";

export const EventEmitterContext = createContext<EventEmitter | null>(null);

export interface EventEmitterProviderProps {
  children: ReactNode;
}

export const EventEmitterProvider: React.FC<EventEmitterProviderProps> = ({
  children,
}) => {
  const eventEmitter = useMemo(() => new EventEmitter(), []);

  return (
    <EventEmitterContext.Provider value={eventEmitter}>
      {children}
    </EventEmitterContext.Provider>
  );
};
