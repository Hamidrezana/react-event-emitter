// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type Listener<T = AnyType> = (data: T) => void;
