// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
var addToArrayForm = function (num, k) {
  let n = num.length, res = [];
  while (n-- > 0 || k > 0) {
    k += (num[n] || 0)
    res.push(k % 10)
    k = parseInt(k / 10)
  }
  return res.reverse()
};
addToArrayForm([1, 2, 0, 0], 34);
addToArrayForm([2, 7, 4], 181);
addToArrayForm([2, 1, 5], 806);

addToArrayForm([0], 23);
