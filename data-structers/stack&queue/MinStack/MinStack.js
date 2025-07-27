class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  top() {
    return this.stack[this.stack.length - 1] ?? null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1] ?? null;
  }

  printStack() {
    const stackContent = [...this.stack].reverse().join(" -> ");
    console.log(`Top -> ${stackContent}`);
  }
}

module.exports = MinStack;
