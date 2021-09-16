// 庖丁九牛
// 把大问题分成若干小问题，分别解决获得结果，在汇集结果。类似map reduce

/** 分治伪代码 
const divide = (problem, p1, p2, ...rest) => {
  // 退出条件
  if (!problem) {
    console.log('problem :>> ', problem);
    return res;
  }

  // 程序业务逻辑
  data = process(problem);
  subProblems = split_problem(problem, data);

  // 下一层函数
  subres1 = divide(subproblems[0], p1, p2, ...rest);
  subres2 = divide(subproblems[1], p1, p2, ...rest);
  subres3 = divide(subproblems[2], p1, p2, ...rest);

  res = process_result(subres1, subres2, subres3);
}
*/

const join = (...chars) => {
  return chars.join('');
}

// 假设每个转换需要1秒
const toUpperCase = (char) => new Promise((res) => {
  setTimeout(() => {
    res(char.toUpperCase());
  }, 1000);
});

// 把一个字符串的每个字母都转成大写
const toUpper = async (problems) => {
  if (typeof problems === 'string') {
    return toUpperCase(problems);
  }

  const subProblems = problems.split('');

  // 汇总处理结果
  const subRes = [];

  // 把大任务拆成小任务依次处理
  for (const problem of subProblems) {
    subRes.concat(await toUpper(problem));
  }

  return join(...subRes);
}

toUpper('abcdefg').then(console.log);
