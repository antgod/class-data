class Link {
  forEach(fn) {
    let current = this.head
    while(current) {
      fn(current.data)
      current = current.next
    }
  }
}

class Node {
  constructor(data) {
    this.data = data
  }
}

module.exports = {
  Link,
  Node,
}