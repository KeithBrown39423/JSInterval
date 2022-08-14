declare module "ms" {
  class Interval {
    constructor(func: Function, delay: string | number, start?: boolean);
    expected: number;
    func: Function;
    paused: boolean;
    delay: number;
    started: boolean;
    start: () => void;
    update(): () => void;
    pause: () => void;
    resume: () => void;
  }
}