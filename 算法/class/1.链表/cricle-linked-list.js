const LinkList = require('../../dataStructure/linklist')

const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
linkList.append(6)
linkList.append(7)

// 判断链表是否是环状
// 1. 依次判断每个项后面是否为undefined
// 2. 把循环过的放在一个Set里，每次找Set中是否包含当前节点的next节点
// 3. 快慢指针，一个指针速度为1，一个指针速度为2，如果有环，这两个指针肯定会相遇