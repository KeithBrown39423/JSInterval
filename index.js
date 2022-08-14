const isNode = () => typeof process !== 'undefined' && !!process.versions && !!process.versions.node;

class Interval {
  constructor(func, delay, start = true) {
    this.expected = 0;
    this.func = func;
    this.paused = false;
    this.delay = typeof delay === "string" && isNode() ? require("ms")(delay) : delay;
    this.started = false;
    this.start = () => {
      if (this.started) return;
      this.started = true;
      this.expected = Date.now() + this.delay;
      this.paused = false;
      this.update();
    };
    this.update = () => {
      if (!this.expected) this.expected = Date.now() + this.delay;
      const drift = Date.now() - this.expected;
      if (!this.paused) this.func();
      this.expected += this.delay;
      setTimeout(this.update, Math.max(0, this.delay - drift));
    };
    this.pause = () => this.paused = true;
    this.resume = () => this.paused = false;
    start ? this.start() : this.paused = true;
  }
}

isNode() ? module.exports = Interval : null;