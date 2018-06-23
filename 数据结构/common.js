class Link {
  forEach(fn) {
    let current = this.head
    while(current) {
      fn(current.data)
      current = current.next
    }
  }
}

module.exports = {
  Link,
}