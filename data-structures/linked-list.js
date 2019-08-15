// Phone numbers
class LinkedList {
  constructor (head, tail, numNodes) {
    this.head = undefined
    this.tail = undefined
    this.numNodes = 0
  }

  length () {
    return this.numNodes
  }

  last () {
    if (!this.tail) {
      return undefined
    }

    return this.tail.value
  }

  prepend (value) {
    const NewNode = new Node(value, this.head)
    this.numNodes += 1

    if (!this.tail) {
      this.tail = NewNode
    }

    this.head = NewNode
  }

  append (value) {
    const NewNode = new Node(value, undefined)
    this.numNodes ++
    if (this.tail) {
      this.tail.next = NewNode
    }
    this.tail = NewNode

    if (!this.head) {
      this.head = NewNode
    }
  }

  _search (value) {
    if (!this.head) {
      return undefined
    }
    let currentNode = this.head

    while (currentNode) {
      if (value === currentNode.value) {

        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  insertAfter (targetValue, value) {
    const targetNode = this._search(value)
    if (!this.head && !targetNode) {
      return undefined
    }
    let currentNode = this.head
    let nextNode = this.head.next
    while (nextNode) {
      if (targetValue === currentNode.value) {
        const NewNode = new Node(value, nextNode)
        currentNode.next = NewNode
        this.numNodes += 1
        return `Inserted: ${NewNode}`
      } else if (targetValue === this.tail.value) {
        this.append(value)
        return `Inserted: ${this.tail}`
      }
      currentNode = currentNode.next
      nextNode = nextNode.next
    }
    return false
  }

  remove (value) {
    if (!this.head) {
      return undefined
    } else if (this.head && value === this.head.value) {
      this.head = this.head.next
      this.numNodes -= 1
      return `${value} removed`
    }

    let currentNode = this.head.next
    let previousNode = this.head

    while (currentNode) {
      if (value === currentNode.value) {
        previousNode.next = currentNode.next
        this.numNodes -= 1
        return `${value} removed`
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return false
  }
}

class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }
}

module.exports = {
  LinkedList,
  Node
}
