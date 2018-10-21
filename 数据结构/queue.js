const { Link, Node } = require('./common')

class Queue extends Link{
  add(data){
    const node = new Node(data)
    if (this.tail !== undefined) {
      this.tail.next = node
    }
    this.tail = node
    if (this.head === undefined) {
      this.head = node
    }
  }

  remove() {
    if (this.head === null) {
      this.tail = null
      return 
    }
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

module.exports = Queue
