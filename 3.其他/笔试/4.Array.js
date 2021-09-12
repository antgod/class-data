// 输入是两个一维数组，输出是一个一位二维数组
// 要求：输出的数组内不应有重复的内容，并按照数字从小到大排序，数字尾数是4的被去除掉，并按照等长截为5个数组
// 输入：[214, 12, 120, 110, 12, 155, 164, 143,51, 55, 110,550]; [110, 11, 12, 120, 13, 14, 144,143,114, 51,55,550];
// 输出为：[[11, 12], [13, 51], [55, 110], [120, 143], [155, 550]]

const a1 = [214, 12, 120, 110, 12, 155, 164, 143,51, 55, 110,550];
const a2 = [110, 11, 12, 120, 13, 14, 550, 144,143,114, 51,55];

function chunk(array, size){
  const finalResult = [];
  for(var i = 0, len = array.length; i < len; i+= size){
    finalResult.push(array.slice(i, i + size));
  }
  return finalResult;
}

// 过滤器： 不为4结尾，去重
const filterReg = (item, index, flatArray) => /[^4]$/.test(item) && !flatArray.slice(0, index).includes(item)

const getResult = (groupLength, ...arrays) => {
  // 数组合并
  const flatArray= [].concat(...arrays);
  // 过滤数组
  const arrayFiltration = flatArray.filter((item, index) => filterReg(item, index, flatArray))
  // 排序数组
  const arraySorted = arrayFiltration.sort((a, b) => a - b)


  // 计算每组长度
  const groupLen = Math.ceil(arraySorted.length / groupLength);
  // 分组
  const res = chunk(arraySorted, groupLen)
  return chunk(arraySorted, groupLen);
}

const result = getResult(5, a1, a2);

// 这个控制台Array.prototype.toString有问题，需要重写，可以打开devtool查看结果
console.log(result);