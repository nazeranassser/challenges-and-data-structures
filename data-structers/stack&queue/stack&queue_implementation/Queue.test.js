const Queue = require('/Queue');

describe('Queue Implementation', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue: should add elements to the queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    queue.enqueue(20);
    expect(queue.rear.value).toBe(20);
  });

  test('dequeue: should remove and return the front element', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10); // remove 10
    expect(queue.peek()).toBe(20);    // next should be 20
  });

  test('peek: should return the front element without removing it', () => {
    queue.enqueue(30);
    expect(queue.peek()).toBe(30);
    expect(queue.peek()).toBe(30); // Still the same
  });

  test('isEmpty: should return true for empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('isEmpty: should return false after enqueue', () => {
    queue.enqueue(99);
    expect(queue.isEmpty()).toBe(false);
  });

  test('dequeue: should return null when queue is empty', () => {
    expect(queue.dequeue()).toBe(null);
  });

  test('peek: should return null when queue is empty', () => {
    expect(queue.peek()).toBe(null);
  });
});
