class Node {
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value){
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value){
    this.tail.next = new Node(value)
    this.tail.next.prev = this.tail
    this.tail = this.tail.next
    
    this.length ++ ;
    return this
  }

  prepend(value){
    const holdHead = this.head
    this.head = new Node(value)
    holdHead.prev = this.head
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
        targetNode.prev = prevNode
        targetNode.next = holdNode
        holdNode.prev = targetNode
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
      this.head.prev = null
      this.length--
      return this
    }

    let prevNode = this.head
    let i = 0
    while(i!==(index-1)){
      prevNode = prevNode.next;
      i++
    }
    let targetNode = prevNode.next;
    // targetNode.prev = 
    if(targetNode?.next){
      let currNode = targetNode.next;
      currNode.prev = prevNode
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
    this.tail.prev = null
    let first = this.head;
    let second = this.head.next
    
    while(second){
      const temp = second.next;
      second.next = first;
      second.prev = temp
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
const linkedList = new DoublyLinkedList(1)

console.log(linkedList.append(3))
console.log(linkedList.append(4))
console.log(linkedList.append(6))
console.log(linkedList.append(7))
console.log(linkedList.insert(0,0))
console.log(linkedList.insert(2,2))
console.log(linkedList.insert(5,5))
console.log(linkedList.insert(8,8))
console.log(linkedList.printList())
console.log(linkedList.reverse())