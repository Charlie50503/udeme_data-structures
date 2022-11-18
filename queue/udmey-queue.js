class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // * 這邊是重點，透過將新的內容添加到last的後面，讓最初的內容保持在最前面
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++
    return this
  }

  dequeue() {
    if(!this.first){
      return null
    }
    if(this.first===this.last){
      this.last = null;
    }
    this.first = this.first.next
    this.length--
    return this
  }
}

const myQueue = new Queue();

myQueue.peek()
console.log(myQueue.enqueue("Joy"))
console.log(myQueue.enqueue("Matt"))
console.log(myQueue.enqueue("Hobby"))
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())