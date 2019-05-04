// const Queue = require('../../../dataStructure/queue')

// 需求：给定一组数组和一个滑块，滑块的长度可自定义调节。滑块从数组位置0一直移动到数组尾部，每次移动一个位置。
// 求滑块每个位置包含数组的最大值

// 方法1：单值缓存
// 方法2：队列缓存：队列头保持最大值，当有最大值出现，替换队列头

const arr = [1, 3, -1, -3, 5, 3, 6]

const getScroll = (arr, width) => {
  let max = -Infinity
  return arr.reduce((last, item, i) => {
    if (item > max) {
      max = item
    }
    if ((i + 1) >= width) {
      return [...last, max]
    }
    return last
  }, [])
}

console.log('getScroll(arr, 3) :', getScroll(arr, 3))
