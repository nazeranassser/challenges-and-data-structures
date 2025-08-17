// BinaryTree.js
const Node = require("./Node");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // PreOrder traversal
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // InOrder traversal
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // PostOrder traversal
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Print tree
  print(node = this.root, space = 0, indent = 5) {
    if (!node) return;
    space += indent;

    this.print(node.right, space);
    console.log(" ".repeat(space - indent) + node.value);
    this.print(node.left, space);
  }
}

module.exports = BinaryTree;
