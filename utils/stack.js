const { Link, Node } = require('./common')
class Stack extends Link{
  push(data){
    const node = new Node(data)
    node.next = this.head
    this.head = node
    this.length = (this.length || 0) + 1
  }

  pop() {
    if (!this.head) {
      return
    }
    this.length = this.length - 1
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
