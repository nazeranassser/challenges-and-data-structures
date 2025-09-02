class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  
  sumOfLeafNodes(node = this.root) {
    if (!node) return 0; // شجرة فاضية

    
    if (!node.left && !node.right) {
      return node.value;
    }


    return this.sumOfLeafNodes(node.left) + this.sumOfLeafNodes(node.right);
  }
}

// مثال للتجربة في الكونسول
const Btree = new BinaryTree();
Btree.root = new Node(9);
Btree.root.left = new Node(8);
Btree.root.right = new Node(12);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(17);
Btree.root.right.right = new Node(23);
Btree.root.left.left.right = new Node(4);

console.log("Sum of leaf nodes:", Btree.sumOfLeafNodes()); 
// الناتج المتوقع: 51
module.exports = { BinaryTree, Node };