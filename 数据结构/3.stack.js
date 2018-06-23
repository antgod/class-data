const { Link } = require('./common')

class Node {
  constructor(data) {
    this.data = data
  }
}

class Stack extends Link{
  push(data){
    const node = new Node(data)
    node.next = this.head
    this.head = node
  }

  pop() {
    if (this.head) {
      return 
    }
    const data = this.head.data
    this.head = this.head.next
    return this.head
  }

  isEmpty() {
    return !this.head
  }

  peek() {
    return this.head
  }
}

module.exports = Stack
