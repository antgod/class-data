/** 递归伪代码 
const recursion = (level, p1, p2, ...rest) => {
  // 退出条件
  if (level > MAX_LEVEL) {
    console.log('level :>> ', level);
    return res;
  }

  // 程序业务逻辑
  process(level, data);

  // 下一层函数
  return recursion(level + 1, p1.child, p2.child, ...rest.child);
}
*/

const recursive = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * recursive(num - 1);
}

console.log('recursive :>> ', recursive(5));
