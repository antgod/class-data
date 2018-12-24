const { Link, Node } = require('./common')

class Stack extends Link{
  push(data){
    const node = new Node(data)
    node.next = this.head
    this.head = node
    
  }

  pop() {
    if (!this.head) {
      return
    }
    const node = this.head
    this.head = this.head.next
    return node
  }

  isEmpty() {
    return !this.head
  }

  peek() {
    return this.head
  }
}

module.exports = Stack
