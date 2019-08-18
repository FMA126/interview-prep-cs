class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class BinaryTree {
  constructor() {
    this.root = undefined
  }

  insert(value) {
    const newNode = new Node(value)
    let currentNode = this.root

    if (!currentNode) {
      this.root = newNode
    } else {
      while (currentNode) {
        if (value < currentNode.value){
          if (currentNode.left) {
            currentNode = currentNode.left
          } else {
            currentNode.left = newNode
          }
        } else if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right
          } else {
            currentNode.right = newNode
          }
        } else {
          return undefined
        }
      }
    }
  }
}

module.exports = {
  Node,
  BinaryTree
}
