### 时间复杂度一览
- O(1): 常数复杂度-Constant
  ```
  int n = 1000;
  ```
- O(log n): 对数复杂度-Logarithmic
  ```
  for(i=1; i<n; i=i*2)
  ```
- O(n): 线性复杂度-Linear
  ```
  for... 
  ```
- O(n^2): 平方复杂度-N square
  ```
  for
    for...
  ```
- O(n^3): 立方复杂度-N square
  ```
  for
    for
      for...
  ```
- O(2^n): 指数复杂度-Exponential Growth
  ```
  for(i=1; i<Math.pow(2, n); i++)
  ```
- O(n!): 阶乘复杂度-Factorial
  ```
  for(i=1; i<factorial(n); i++)
  ```

### 递归时间复杂度
见recursion.js

|常见算法|时间复杂度|
|-|-|
|二分查找|O(log n)|
|二叉树遍历|O(n)|
|二维矩阵|O(n)|
|快、归并等排序|O(nlogn)|

### 各种算法时间复杂度
<a href='http://www.bigocheatsheet.com/' >时间复杂度预览</a>