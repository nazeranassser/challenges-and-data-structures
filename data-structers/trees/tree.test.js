// __tests__/tree.test.js
const BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
  });

  test("PreOrder traversal", () => {
    expect(bst.preOrder()).toEqual([10, 5, 7, 15]);
  });

  test("InOrder traversal", () => {
    expect(bst.inOrder()).toEqual([5, 7, 10, 15]);
  });

  test("PostOrder traversal", () => {
    expect(bst.postOrder()).toEqual([7, 5, 15, 10]);
  });

  test("Contains existing node", () => {
    expect(bst.contains(7)).toBe(true);
  });

  test("Remove node", () => {
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });
});
