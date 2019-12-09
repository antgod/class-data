const { Link, Node } = require('./common')

class Queue extends Link{
  add(data) {
    const node = new Node(data)
    if (this.tail !== undefined) {
      this.tail.next = node
    }
    this.tail = node
    if (this.head === undefined) {
      this.head = node
    }
    this.length = (this.length || 0) + 1
  }

  prepare(data) {
    if (this.head === undefined) {
      this.head = node 
    } else {
      const node = new Node(data)
      const head = this.head
      this.head = node
      this.head.next = head
    }

    this.length = (this.length || 0) + 1
  }

  remove() {
    if (this.head === null) {
      this.tail = null
      return 
    }
    this.length = this.length - 1
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
