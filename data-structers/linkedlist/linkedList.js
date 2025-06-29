class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(data) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    } else {
      console.log("Node not found");
    }
  }

  printList() {
  if (!this.head) return "Head -> Null";

  let current = this.head;
  let result = "Head -> ";
  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }
  result += "Null";
  return result;
}


  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(data, index) {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    if (i !== index) {
      console.log("Index out of bounds");
      return;
    }
    previous.next = newNode;
    newNode.next = current;
  }
}

module.exports = LinkedList;
