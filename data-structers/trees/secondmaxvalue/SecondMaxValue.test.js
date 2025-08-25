const { BinaryTree, Node } = require("./SecondMaxValue");

describe("Find Second Max in BinaryTree", () => {
  test("Example case", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(10);
    Btree.root.left = new Node(5);
    Btree.root.right = new Node(20);
    Btree.root.left.left = new Node(3);
    Btree.root.left.right = new Node(7);
    Btree.root.right.left = new Node(15);
    Btree.root.right.right = new Node(25);

    expect(Btree.findSecondMax()).toBe(20);
  });

  test("Tree with single node", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(10);
    expect(() => Btree.findSecondMax()).toThrow("Tree must have at least two unique values");
  });

  test("Tree with negative values", () => {
    const Btree = new BinaryTree();
    Btree.root = new Node(-10);
    Btree.root.left = new Node(-20);
    Btree.root.right = new Node(-5);

    expect(Btree.findSecondMax()).toBe(-10);
  });

  test("Empty tree", () => {
    const Btree = new BinaryTree();
    expect(() => Btree.findSecondMax()).toThrow("Tree is empty");
  });
});
