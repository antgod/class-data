const Stack = require('../../utils/stack')

// 用栈实现队列。当队列push时调用栈push，队列查询时候，把栈1的内容移动到栈2
const StatckToQueue = () => {
  const stack1 = new Stack()
  const stack2 = new Stack()

  return {
    push: stack1.push.bind(stack1),
    pop: () => {
      while(stack1.peek()) {
        stack2.push(stack1.pop().data)
      }
      stack2.pop()
    },
    peek: () => {
      while(stack1.peek()) {
        stack2.push(stack1.pop().data)
      }
      return stack2.peek()
    }
  }
}

const statckQueue = StatckToQueue()

statckQueue.push(1)
statckQueue.push(2)
statckQueue.push(3)

// console.log(statckQueue.peek())

statckQueue.pop()
statckQueue.pop()

console.log(statckQueue.peek())