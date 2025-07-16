const Stack = require('/Stack');

describe('Stack Implementation', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push: should add elements to the top of the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test('pop: should remove and return the top element', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20); // remove top
    expect(stack.peek()).toBe(10); // new top
  });

  test('peek: should return the top element without removing it', () => {
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.peek()).toBe(30); // should still be 30
  });

  test('isEmpty: should return true for empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty: should return false when stack has elements', () => {
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pop: should return null if stack is empty', () => {
    expect(stack.pop()).toBe(null);
  });

  test('peek: should return null if stack is empty', () => {
    expect(stack.peek()).toBe(null);
  });
});
