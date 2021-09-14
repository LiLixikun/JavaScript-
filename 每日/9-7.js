// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。

function balancedStringSplit(s) {
  let num = 0,
    count = 0;
  for (const str of s) {
    if (str === "R") num++;
    else if (str === "L") num--;
    if (num == 0) count++;
  }
  return count;
}
balancedStringSplit("RLRRLLRLRL");
balancedStringSplit("RLLLLRRRLR");
balancedStringSplit("RLRRRLLRLL");
