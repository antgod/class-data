const { Link, Node } = require('./common')

class LinkList extends Link {
  constructor () {
    super()
    this.head = null
    this.length = 0
  }
  append (data) {
    this.length++
    const node = new Node(data)
    const head = this.head
    if (!this.head) {
      this.head = node
      return
    }
    let current = head
    while(current.next) {
      current = current.next
    }
    current.next = node
  }
  prepend (data) {
    this.length++
    const head = this.head
    const node = new Node(data)
    node.next = head
    this.head = node
  }
  remove (data) {
    let head = this.head
    if (head === null) {
      return
    }
    if (head.data === data) {
      this.length--
      this.head = head.next
      return
    }

    let current = this.head
    while(current && current.next) {
      if (current.next.data === data) {
        this.length--
        current.next = current.next.next
      }
      current = current.next
    }
  }
  toString () {
    let current = this.head
    const existHead = !!current
    var string = ''
    while (current) {
      string += current.data + ','
      current = current.next
    }
    if(existHead) {
      string = string.substr(0, string.length - 1)
    }
    return string
  }
  indexOf (data) {
    let current = this.head
    var index = -1
    while (current) {
      index++
      if (data === current.data) { // 从头节点开始遍历
        return index
      }
      current = current.next
    }
    return -1
  }

  reverseList() {
    let cur = this.head, prev, next
    while(cur) {
      next = cur.next
      cur.next = prev
      prev = cur 
      cur = next
      if (cur)
        this.head = cur
    }
    return this.head
  }
}

module.exports = LinkList
