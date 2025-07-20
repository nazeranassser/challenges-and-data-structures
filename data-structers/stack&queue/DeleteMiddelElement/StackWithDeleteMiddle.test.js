const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

describe('StackWithDeleteMiddle', () => {
  test('Delete the middle element from an odd-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(7);
    stack.push(14);
    stack.push(3);
    stack.push(8);
    stack.push(5);
    // Stack from top: 5 -> 8 -> 3 -> 14 -> 7
    stack.deleteMiddle();
    // middle index = floor(5/2) = 2 -> remove '3'
    expect(stack.print()).toBe('Stack: Top -> 5 -> 8 -> 14 -> 7');
  });

  test('Delete the middle element from an even-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    // Stack from top: 4 -> 3 -> 2 -> 1
    stack.deleteMiddle();
    // middle index = 4/2 = 2 -> remove '2'
    expect(stack.print()).toBe('Stack: Top -> 4 -> 3 -> 1');
  });

  test('Delete from an empty stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Delete from a stack with a single element', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(1);
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe(true);
  });
});
