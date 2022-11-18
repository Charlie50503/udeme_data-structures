class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const oldTop = this.top;
    
    this.top = new Node(value);
    if(this.bottom === null){
      this.bottom = this.top
    }
    this.top.next = oldTop;
    this.length++;
    return this;
  }

  pop() {
    const result = this.top;
    if (!this.top || this.top.next === null) {
      this.top = null;
      this.length--
      return result;
    } else {
      this.top = this.top.next;
      this.length--
      return result;
    }
  }

  // isEmpty
}

const myStack = new Stack();

myStack.push('discord');
myStack.push('Udmey');
myStack.push('google');

console.log(myStack);

console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());
