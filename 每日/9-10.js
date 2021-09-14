// 输入：chalk = [5,1,5], k = 22
// 输出：0
// 解释：学生消耗粉笔情况如下：
// - 编号为 0 的学生使用 5 支粉笔，然后 k = 17 。
// - 编号为 1 的学生使用 1 支粉笔，然后 k = 16 。
// - 编号为 2 的学生使用 5 支粉笔，然后 k = 11 。
// - 编号为 0 的学生使用 5 支粉笔，然后 k = 6 。
// - 编号为 1 的学生使用 1 支粉笔，然后 k = 5 。
// - 编号为 2 的学生使用 5 支粉笔，然后 k = 0 。
// 编号为 0 的学生没有足够的粉笔，所以他需要补充粉笔。

var chalkReplacer = function (chalk, k) {
  // while (k > 0) {
  //   for (let i = 0; i < chalk.length; i++) {
  //     if (k<chalk[i]) return i
  //     if (k===chalk[i]) return i+1>=chalk.length?0:i+1
  //     k -= chalk[i];
  //   }
  // }
  let total = 0, res = -1;
  for (const num of chalk) {
    total += num
  }
  k %= total
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      res = i
      break
    }
    k -= chalk[i]
  }
  return res
};

console.log(chalkReplacer([5, 1, 5], 22));
console.log(chalkReplacer([3, 4, 1, 2], 25));

