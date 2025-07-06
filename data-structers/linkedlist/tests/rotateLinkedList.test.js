const { LinkedList } = require('../rotatelinkedlist/rotatelinkedlist');

describe('rotateLeft', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    [1, 2, 3, 4, 5, 6].forEach(n => list.append(n));
  });

  test('rotate by 0 (should stay the same)', () => {
    list.rotateLeft(0);
    expect(list.display()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('rotate by 2', () => {
    list.rotateLeft(2);
    expect(list.display()).toEqual([3, 4, 5, 6, 1, 2]);
  });

  test('rotate by more than length (k=7)', () => {
    list.rotateLeft(7);
    expect(list.display()).toEqual([2, 3, 4, 5, 6, 1]);
  });

  test('rotate by negative k (k=-1, should rotate right by 1)', () => {
    list.rotateLeft(-1);
    expect(list.display()).toEqual([6, 1, 2, 3, 4, 5]);
  });
});
