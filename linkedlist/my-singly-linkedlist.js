class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value){
    this.tail.next = new Node(value)
    this.tail = this.tail.next
    this.length ++ ;
    return this
  }

  prepend(value){
    const holdHead = this.head
    this.head = new Node(value)
    this.head.next = holdHead
    this.length ++ ;
    return this
  }

  insert(index,value){
    let targetNode = this.head
    let i = 0

    // 判斷超過長度的情況
    if(index>this.length){
      return Error("超過指定長度")
    }
    // 頭
    if(index===0){
      return this.prepend(value)
    }
    // 尾
    if(index===this.length){
      return this.append(value)
    }
    // 中間
    let prevNode = null
    while(targetNode.next!==null){
      if((index-1)===i){
        prevNode = targetNode
      }
      if(index===i){
        const holdNode = targetNode
        targetNode = new Node(value)
        prevNode.next = targetNode
        targetNode.next = holdNode
        break;
      }
      targetNode = targetNode.next;
      i++
    }
    this.length++
    return this
  }

  remove(index){
    if(index>=this.length){
      return Error("指定位置超過長度")
    }

    if(index===0){
      this.head = this.head.next
      this.length--
      return this
    }

    let prevNode = this.head
    let i = 0
    while(i!==(index-1)){
      prevNode = prevNode.next;
      console.log("prevNode",prevNode);
      i++
    }
    let targetNode = prevNode.next;
    console.log("targetNode",targetNode);
    if(targetNode?.next){
      let currNode = targetNode.next;
      prevNode.next = currNode
    }else{
      prevNode.next = null
      this.tail = prevNode
    }

    this.length--
    return this
  }

  reverse(){
    if(this.head.next===null){
      return this.head
    }
    this.tail = this.head;
    let first = this.head;
    let second = this.head.next
    
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    
    this.head = first
    return this
  }

  printList(){
    const newArray = []
    let targetNode = this.head
    while(1===1){
      newArray.push(targetNode.value)
      if(targetNode.next===null){
        break;
      }
      targetNode = targetNode.next
    }
    return newArray
  }
}
const linkedList = new LinkedList(1)
console.log(linkedList.append(2))
console.log(linkedList.append(3))
console.log(linkedList.append(4))
console.log(linkedList.append(5))
console.log(linkedList.append(6))
console.log(linkedList.append(7))
console.log(linkedList.reverse())
console.log(linkedList.printList())
// console.log(linkedList.remove(8))
// console.log(linkedList.printList())