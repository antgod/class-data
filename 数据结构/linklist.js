class Node {
  constructor(data) {
    this.data = data
  }
}

class LinkList {
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

  forEach(fn) {
    let current = this.head
    while(current) {
      fn(current.data)
      current = current.next
    }
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

const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.prepend(3)
linkList.prepend(4)
linkList.forEach(console.log)

linkList.remove(4)
linkList.remove(3)

linkList.forEach(console.log)

