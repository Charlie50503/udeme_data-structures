class HashTable {
  constructor(size){
    this.data = new Array(size);
    
  }

  _hash(key) { // 建立hash key 方法，使用下底線代表private
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(1) * i) %
      this.data.length
    }
    return hash;
  }

  set(key,value){
    const index = this._hash(key)
    if(!this.data[index]){
      this.data[index] = []
    }
    this.data[index].push([key,value])
  }
  get(key){
    let result = undefined;
    for (let index = 0; index < this.data.length; index++) {
      if(!this.data[index]){
        continue;
      }else{
        this.data[index].forEach((item,itemIndex)=>{
          if(item[0]===key){
            result = this.data[index][itemIndex]
          }
        })
      }

    }
    return result
  }
}

const myHashTable =new HashTable(50);
myHashTable.set("grapes",10000);
console.log(myHashTable)


console.log(myHashTable.get("grapes"))