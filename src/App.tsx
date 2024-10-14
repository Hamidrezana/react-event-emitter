import React from "react";
import { EventEmitterProvider } from "./contexts/EventEmitterContext";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const App: React.FC = () => {
  return (
    <EventEmitterProvider>
      <ComponentA />
      <ComponentB />
    </EventEmitterProvider>
  );
};

export default App;
