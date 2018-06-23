const Stack = require('../3.stack')

const stack = new Stack()

stack.push('a')
stack.push('b')
stack.push('c')
stack.pop()

console.log(stack.head)
console.log(stack.peek().data)
stack.forEach(console.log)

stack.pop()
stack.pop()

console.log(stack.isEmpty())
