const { Link } = require('./common')

class Node {
  constructor(data) {
    this.data = data
  }
}

class LinkList extends Link{
  append(data){
    const head = this.head
    const node = new Node(data)
    if(!head) {
      this.head = node
      return
    }
    let current = head
    while(current.next) {
      current = current.next
    }
    current.next = node
  }

  prepend(data) {
    const head = this.head
    const node = new Node(data)
    node.next = head
    this.head = node
  }

  remove(data) {
    let head = this.head
    if (head === null) {
      return 
    }
    if (head.data === data) {
      this.head = head.next;
      return
    }

    let current = this.head
    while(current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      }
      current = current.next
    }
  }
}

module.exports = LinkList
