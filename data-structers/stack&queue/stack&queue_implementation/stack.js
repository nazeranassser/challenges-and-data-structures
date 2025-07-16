class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = { value, next: this.top };
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack; 
