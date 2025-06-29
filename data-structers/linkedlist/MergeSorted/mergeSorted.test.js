const LinkedList = require('../linkedList');
const mergeSortedLists = require('./mergeSorted');

function toArray(list) {
  const arr = [];
  let cur = list.head;
  while (cur) {
    arr.push(cur.data);
    cur = cur.next;
  }
  return arr;
}

test('merging an empty list with a non-empty list', () => {
  const a = new LinkedList();
  const b = new LinkedList();
  b.add(1); b.add(2); b.add(3);
  const merged = mergeSortedLists(a, b);
  expect(toArray(merged)).toEqual([1, 2, 3]);
});

test('both lists are empty', () => {
  const a = new LinkedList();
  const b = new LinkedList();
  const merged = mergeSortedLists(a, b);
  expect(merged.head).toBeNull();
});

test('merge example from the second sample', () => {
  const a = new LinkedList();
  [5, 10, 15].forEach(n => a.add(n));
  const b = new LinkedList();
  [2, 3, 20].forEach(n => b.add(n));
  const merged = mergeSortedLists(a, b);
  expect(toArray(merged)).toEqual([2, 3, 5, 10, 15, 20]);
});
