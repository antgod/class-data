const Stack = require('../stack')

const stack = new Stack()

stack.push('a')
stack.push('b')
stack.push('c')

console.log(stack.head)
console.log(stack.peek().data)
// stack.forEach(console.log)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.isEmpty())
