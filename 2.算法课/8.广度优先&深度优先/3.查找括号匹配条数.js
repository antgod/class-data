const generate = (n, list = [], left = 0, right = 0, res = "") => {
  if (left === n && right === n) {
    list.push(res);
  }
  if (left < n){
    generate(n, list, left + 1, right, res + "(");
  }
  if (left > right && right < n){
    generate(n, list, left, right + 1, res + ")");
  }
  return list;
}

console.log('generate(2) :>> ', generate(3));
