// 1.手写算法
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/

// 输入：num = [1,2,0,0], k = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
function addToArrayForm(num, k) {
  let res = [],
    len = num.length;
  while (k > 0 || len-- > 0) {
    k += num[len] || 0;
    res.push(k % 10);
    k = parseInt(k / 10);
  }
  return res.reverse();
}

// 2.编程题
//1.手写函数柯里化
function curry(func, args) {
  //此处补全
  let len = func.length;
  args = args || [];
  return function () {
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < len) {
      return curry.call(this, func, newArgs);
    } else {
      return func.apply(this, newArgs);
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
