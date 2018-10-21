const Queue = require('../queue')

const queue = new Queue()

queue.add('a')
queue.add('b')
queue.add('c')
queue.remove()

console.log(queue.head)
console.log(queue.peek().data)
queue.forEach(console.log)

queue.remove()
queue.remove()

console.log(queue.isEmpty())
