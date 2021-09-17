const sort = (array) => array.sort((x, y) => x - y);

const queryCount = (array, num) => {
  return array.reduce((count, item) => {
    if (item === num) {
      return count + 1;
    }
    return count;
  }, 0);
}

// 求数组里相同数值大于数组长度/2的数字
const queryMany = (array) => {
  const sortedArray = sort(array);
  const middle = sortedArray[Math.floor(sortedArray.length / 2)];
  return queryCount(sortedArray, middle) > sortedArray.length / 2 ?  middle  : null;
}


console.log(queryMany([4, 1, 1, 4, 5, 4, 4]));