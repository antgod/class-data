const LinkList = require('../1.linklist')

const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.prepend(3)
linkList.prepend(4)
linkList.forEach(console.log)

linkList.remove(4)
linkList.remove(3)

linkList.forEach(console.log)