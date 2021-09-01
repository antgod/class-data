const LinkList = require('../linklist')

const linkList = new LinkList()
linkList.append(2)
linkList.append(3)
linkList.prepend(1)
linkList.forEach(console.log)
console.log('linkList.toString() :', linkList.toString())
console.log('linkList.length :', linkList.length)
console.log('linkList.indexOf :', linkList.indexOf(3))

console.log('remove 4,3');
linkList.remove(4)
linkList.remove(3)
linkList.forEach(console.log)
console.log('linkList.length :', linkList.length)
console.log('linkList.toString() :', linkList.toString())
console.log('linkList.indexOf(2) :', linkList.indexOf(2))

console.log('prepend 0, append 3');
linkList.append(3)
linkList.prepend(0)
linkList.forEach(console.log)
console.log('linkList.length :', linkList.length)
console.log('linkList.toString() :', linkList.toString())
console.log('linkList.indexOf(2) :', linkList.indexOf(3))
