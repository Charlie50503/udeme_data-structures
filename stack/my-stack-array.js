class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length-1];
  }

  push(value) {
    this.array.push(value);
    return this
  }

  pop() {
    this.array.pop()
    return this
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
