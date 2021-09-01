var ints = [55, 33, 54, 88, 65, 10, 22, 13, 11, 97]
ints = ints.sort()
console.log(ints.toString())

function search (key, ints) {
  var low = 0, high = ints.length - 1
  while(low <= high) {
    var mid = Math.floor((low + high) / 2)
    if (key > ints[mid]) {
      low = mid + 1
    } else if (key < ints[mid]) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(search(88, ints))