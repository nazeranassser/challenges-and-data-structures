const LinkedList = require('../linkedList');

function mergeSortedLists(list1, list2) {
  const dummy = new LinkedList();
  let tail = dummy.head = new list1.head.constructor(null); // Node dummy

  let p1 = list1.head;
  let p2 = list2.head;

  while (p1 && p2) {
    if (p1.data <= p2.data) {
      tail.next = p1;
      p1 = p1.next;
    } else {
      tail.next = p2;
      p2 = p2.next;
    }
    tail = tail.next;
  }

  tail.next = p1 || p2;

  
  const result = new LinkedList();
  result.head = dummy.head.next;
  return result;
}

module.exports = mergeSortedLists;
