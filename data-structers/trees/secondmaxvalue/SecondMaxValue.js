// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // helper method to traverse tree and collect values
  traverse(node, values) {
    if (node === null) return;
    values.push(node.value);
    this.traverse(node.left, values);
    this.traverse(node.right, values);
  }

  // main method: find second max
  findSecondMax() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    let values = [];
    this.traverse(this.root, values);

    // remove duplicates
    let uniqueValues = [...new Set(values)];

    if (uniqueValues.length < 2) {
      throw new Error("Tree must have at least two unique values");
    }

    // sort descending
    uniqueValues.sort((a, b) => b - a);

    return uniqueValues[1]; // second max
  }
}

// Example usage:
const Btree = new BinaryTree();
Btree.root = new Node(10);
Btree.root.left = new Node(5);
Btree.root.right = new Node(20);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(15);
Btree.root.right.right = new Node(25);

console.log("Second Max:", Btree.findSecondMax()); // Output: 20

module.exports = { BinaryTree, Node };