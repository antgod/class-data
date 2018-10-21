const LinkList = require('../../数据结构/linklist')

const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
linkList.append(6)
linkList.append(7)

// head = 1-2-3-4-5-null
// head = 2-1-4-3-5-null
// swap：把当前节点和下个节点交换
const swapPairs = (context) => {
  let pre = {}
  const head = context.head  
  pre.next = head                               // 1
  while (pre.next) {
    const left = pre.next                       // 1
    const right = left.next                     // 2
    if (!right) {
      break
    } else if (context.head === head) {
      context.head = right
    }

    const nextPair = right.next                 // 3
    pre.next = right                            // 1.next -> 3,用来把1.next指向4
    right.next = left                           // 2.next = 1
    left.next = nextPair                        // 1.next = 3
    pre = left                                  // pre = 3        
  }
  return context.head
}
const head = swapPairs(linkList)

const forEach = (head, fn) =>{
  let current = head
  while(current) {
    fn(current.data)
    current = current.next
  }
}

forEach(head, console.log)

// 另一种解法
// let cur = context.head                      // 1
// var i = 0
// while (cur && cur.next) {
//   const next = cur.next                     // 2
//   if (!i) {
//     context.head = next
//   }
  
//   const nextPair = cur.next.next            // 3
//   next.next = cur
//   if (nextPair) {
//     cur.next = nextPair.next || nextPair    // 4
//     cur = nextPair
//   } else {
//     cur.next = undefined
//     cur = undefined
//   }
//   i++
// }