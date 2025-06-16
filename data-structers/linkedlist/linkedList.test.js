const LinkedList = require('./linkedList');

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("add nodes to the end", () => {
    list.add(10);
    list.add(20);
    list.add(30);
    expect(list.printList()).toBe("Head -> 10 -> 20 -> 30 -> Null");
  });

  test("remove node by value", () => {
    list.add(5);
    list.add(10);
    list.add(15);
    list.remove(10);
    expect(list.printList()).toBe("Head -> 5 -> 15 -> Null");
  });

  test("includes returns true or false", () => {
    list.add(100);
    expect(list.includes(100)).toBe(true);
    expect(list.includes(50)).toBe(false);
  });

  test("insertAt specific index", () => {
    list.add(1);
    list.add(3);
    list.insertAt(2, 1);
    expect(list.printList()).toBe("Head -> 1 -> 2 -> 3 -> Null");
  });

  test("insertAt throws error if index out of bounds", () => {
    expect(() => list.insertAt(10, 5)).toThrow("Index out of bounds");
  });

  test("print empty list", () => {
    expect(list.printList()).toBe("Head -> Null");
  });
});
