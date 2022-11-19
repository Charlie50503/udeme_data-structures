class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)

    if(this.root===null){
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while(true){
        if(value < currentNode.value){
          // Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left
        } else {
          // right
          if(!currentNode.right){
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right

        }
      }
    }
  }


  lookup(value) {
    if(this.root===null){
      return undefined
    } else {
      let currentNode = this.root
      while(currentNode){
        // debugger
        if(value === currentNode.value){
          return currentNode
        }
        if(value < currentNode.value){
          // Left
          currentNode = currentNode.left
        } else {
          // right
          currentNode = currentNode.right
        }
      }
      return undefined
    }
  }

  
  // * 難度會比較高，也不太會出現在面試裡面
	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						// If current node is root and matched number to drop, replace root with next highest (left, because no right)
						this.root = currentNode.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
							// since right node doesnt exist, no chain will be droped
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					// Have to find lowest (left most child) on the right side to replace removed node with
					// Lowest number that's higher than current node
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)



console.log(tree.lookup(171))
// console.log(JSON.stringify(traverse(tree.root)))


// // remove
// 首先建立循環
// 再來確認parent node不能是null
// 如果parent > current 
// 刪除對象的右子節點的話，