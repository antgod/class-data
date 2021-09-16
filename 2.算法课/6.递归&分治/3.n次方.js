// x的n次方=x的n/2次方的平方=...以此类推，推到1为止
const pow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  if (n % 2 !== 0) {
    return x * pow(x, n - 1);;
  }

  return pow(x * x, n / 2);
}

console.log('pow(2, 4) :>> ', pow(2, 4));
