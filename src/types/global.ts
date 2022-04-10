export interface AnyObject {
  [key: string]: unknown;
}

export type DoneFunction = (done: boolean) => void;
