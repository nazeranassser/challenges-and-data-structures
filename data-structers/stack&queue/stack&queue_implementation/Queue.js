class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = { value, next: null };
    if (!this.rear) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const removed = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return removed;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue; 