const Stack = require('../stack&queue_implementation/stack'); // عدّل المسار حسب مكان ملف Stack.js عندك

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    if (this.isEmpty()) return null;  // إذا الستاك فارغ
    if (!this.top.next) {            // إذا عنصر واحد فقط
      this.pop();
      return;
    }

    // حساب طول الستاك
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }

    // حساب موقع العنصر الأوسط:
    // لو العدد زوجي نحذف العنصر في الموضع n/2 (بدون -1)
    // لو فردي نحذف في الموضع floor(n/2)
    const middleIndex = count % 2 === 0 ? count / 2 : Math.floor(count / 2);

    // مؤقت لتخزين العناصر التي فوق الوسط
    const tempStack = [];
    for (let i = 0; i < middleIndex; i++) {
      tempStack.push(this.pop());
    }

    // حذف العنصر الأوسط
    this.pop();

    // إعادة العناصر من المؤقت للستاك
    while (tempStack.length > 0) {
      this.push(tempStack.pop());
    }
  }

  print() {
    let result = 'Stack: Top -> ';
    let current = this.top;
    while (current) {
      result += current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }
    console.log(result);
    return result;
  }
}

module.exports = StackWithDeleteMiddle;
