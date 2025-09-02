const { BinaryTree, Node } = require("./LeafSum");

describe("Sum of Leaf Nodes in BinaryTree", () => {
  test("Example case", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(9);
    Btree.root.left = new Node(8);
    Btree.root.right = new Node(12);
    Btree.root.left.left = new Node(3);
    Btree.root.left.right = new Node(7);
    Btree.root.right.left = new Node(17);
    Btree.root.right.right = new Node(23);
    Btree.root.left.left.right = new Node(4);

    expect(Btree.sumOfLeafNodes()).toBe(51);
  });

  test("Tree with negative leaf values", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(-5);
    Btree.root.left = new Node(-10);
    Btree.root.right = new Node(3);

    expect(Btree.sumOfLeafNodes()).toBe(-10 + 3); // -7
  });

  test("Empty tree", () => {
    const Btree = new BinaryTree();
    expect(Btree.sumOfLeafNodes()).toBe(0);
  });

  test("Single node tree", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(42);
    expect(Btree.sumOfLeafNodes()).toBe(42);
  });
});
