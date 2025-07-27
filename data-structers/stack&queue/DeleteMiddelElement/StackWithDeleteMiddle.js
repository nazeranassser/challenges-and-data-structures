const Stack = require('../stack&queue_implementation/stack'); // عدّل المسار حسب مكان ملف Stack.js عندك

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    if (this.isEmpty()) return null;  
    if (!this.top.next) {            
      this.pop();
      return;
    }

    
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }

   
    const middleIndex = count % 2 === 0 ? count / 2 : Math.floor(count / 2);

    
    const tempStack = [];
    for (let i = 0; i < middleIndex; i++) {
      tempStack.push(this.pop());
    }

    this.pop();

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
