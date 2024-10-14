import { AnyType, Listener } from "../types";

export class EventEmitter {
  private events: { [event: string]: Listener[] } = {};

  on<T = AnyType>(event: string, listener: Listener<T>): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off<T = AnyType>(event: string, listenerToRemove: Listener<T>): void {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  emit<T = AnyType>(event: string, data: T): void {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => {
      listener(data);
    });
  }
}
