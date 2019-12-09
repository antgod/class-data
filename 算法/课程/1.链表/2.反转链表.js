const LinkList = require('../../dataStructure/linklist')

// head = 1-2-3-4-5-null
// head = 5-4-3-2-1-null
// 反转：每个节点的next指向上一个节点
// 难点：当前节点无法获得上一个节点，需要缓存
// 注意点：注意改变head节点
const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
console.log(linkList.toString())

linkList.reverseList()
console.log(linkList.toString())
