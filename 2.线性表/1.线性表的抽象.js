// 线性表基本操作
const isListEmpty = array => array.length === 0
const clearList = array => array.length = 0
const getListItem = (array, i) => array[i]
const locateListItem = (array, e) => array.indexOf(e)
const insertList = (array, i, e) => array.splice(i, 0, e)
const deleteList = (array, i) => array.splice(i, 1)
const listLength = (array) => array.length

var arr = [1, 2, 3]
//console.log(isListEmpty(arr))
//console.log(getListItem(arr, 2))
//console.log(locateListItem(arr, 2))
//console.log(insertList(arr, 100, 4), arr)
//console.log(deleteList(arr, 3), arr)
//console.log(listLength(arr))
//console.log(clearList(arr))

// 合并操作
var arr1 = [1, 2, 3, 4]
var arr2 = [2, 3, 4, 5]
arr2.map(arr => {
  if (locateListItem(arr1, arr) === -1) {
    arr1.push(arr)
  }
})

console.log(arr1)