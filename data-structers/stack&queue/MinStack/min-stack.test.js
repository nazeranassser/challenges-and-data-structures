const MinStack = require("./MinStack");

describe("MinStack", () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test("push and getMin", () => {
    stack.push(10);
    expect(stack.getMin()).toBe(10);
    stack.push(5);
    expect(stack.getMin()).toBe(5);
    stack.push(8);
    expect(stack.getMin()).toBe(5);
  });

  test("pop and getMin", () => {
    stack.push(10);
    stack.push(5);
    stack.push(8);
    stack.pop(); // removes 8
    expect(stack.getMin()).toBe(5);
    stack.pop(); // removes 5
    expect(stack.getMin()).toBe(10);
  });

  test("top returns correct element", () => {
    stack.push(3);
    stack.push(7);
    expect(stack.top()).toBe(7);
  });

  test("isEmpty works correctly", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("getMin returns null if empty", () => {
    expect(stack.getMin()).toBe(null);
  });

  test("pop returns null if empty", () => {
    expect(stack.pop()).toBe(null);
  });
});
