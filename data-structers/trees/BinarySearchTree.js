// BinarySearchTree.js
const Node = require("./Node");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  remove(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.remove(value, node.left);
    } else if (value > node.value) {
      node.right = this.remove(value, node.right);
    } else {
      // node found
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // node with two children
      let minRight = node.right;
      while (minRight.left) minRight = minRight.left;
      node.value = minRight.value;
      node.right = this.remove(minRight.value, node.right);
    }
    return node;
  }
}

module.exports = BinarySearchTree;
