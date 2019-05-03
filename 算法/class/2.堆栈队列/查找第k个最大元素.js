// 方法1：保存k个元素，每次查找元素进行排序，时间复杂度n*log(n)
// 方法2：队列头保持最小元素
const Queue = require('../../../dataStructure/queue')
const arr = [4, 3, 5]

const findKCountMax = (arr, k) => {
  const queue = new Queue()
  // 遍历
  arr.forEach(item => {
		if (queue.isEmpty()) {
			queue.add(item)
		} else {
			const top = queue.peek()
			// 原则：永远保持队列头部最小
			if (queue.length < k) {
				// 如果队列长度没超过最大元素个数k，当前元素大于队列头元素，尾部入队
				if (item > top.data) {
					queue.add(item)
				} else {
					// 如果队列长度没超过最大元素个数k，当前元素小于队列头元素，头部入队
					queue.prepare(item)
				}
			} else {
				// 如果队列长度已经超过最大元素个数k，并下个元素b比队列头部元素a大，b入队，a出队
				if (item > top.data) {
					queue.add(item)
					queue.remove()
				}
			}
		}
  })
  return queue
}

console.log('findKCountMax :', findKCountMax(arr, 3).peek())
