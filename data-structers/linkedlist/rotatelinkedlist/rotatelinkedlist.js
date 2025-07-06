class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
  }

  // Convert list to array for display
  display() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  rotateLeft(k) {
    if (!this.head || k === 0) return;

    // Count length
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }

    // Normalize k
    if (k < 0) {
      k = length - (Math.abs(k) % length);
    } else {
      k = k % length;
    }

    if (k === 0) return;

    // Traverse to the kth node
    let current = this.head;
    let count = 1;
    while (count < k && current) {
      current = current.next;
      count++;
    }

    // Cut and rotate
    const newHead = current.next;
    current.next = null;
    tail.next = this.head;
    this.head = newHead;
  }
}

module.exports = { Node, LinkedList };
