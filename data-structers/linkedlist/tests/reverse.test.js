// reverse.test.js
const LinkedList = require('../reverse/reverse');

describe('LinkedList.reverse()', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('reverses a list with multiple nodes', () => {
    [1, 2, 3, 4, 5].forEach(n => list.add(n));
    list.reverse();
    expect(list.toArray()).toEqual([5, 4, 3, 2, 1]);
  });

  test('reverses a single-node list', () => {
    list.add('a');
    list.reverse();
    expect(list.toArray()).toEqual(['a']);
  });

  test('handles empty list without error', () => {
    list.reverse();
    expect(list.toArray()).toEqual([]);
  });
});
