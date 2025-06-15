const LinkedList = require('./linkedList'); // عدّلي المسار حسب مكان الملف

const list = new LinkedList();

// التجربة: إضافة عناصر
list.add(5);
list.add(10);
list.add(20);
list.add(30);

console.log('🟢 Initial list:');
list.printList(); // Head -> 5 -> 10 -> 20 -> 30 -> Null

list.remove(10);
console.log('🟠 After removing 10:');
list.printList(); // Head -> 5 -> 20 -> 30 -> Null


console.log('🔵 Includes 20?', list.includes(20)); // true
console.log('🔵 Includes 10?', list.includes(10)); // false


list.insertAt(15, 2);
console.log('🟣 After inserting 15 at index 2:');
list.printList(); // Head -> 5 -> 20 -> 15 -> 30 -> Null


const emptyList = new LinkedList();
console.log('⚪️ Empty list:');
emptyList.printList(); // Head -> Null

emptyList.remove(100); // محاولة إزالة من قائمة فارغة
emptyList.insertAt(50, 3); // محاولة إدراج في انديكس غير صالح
