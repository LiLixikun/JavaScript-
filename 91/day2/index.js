// 1.手写算法
// https://leetcode-cn.com/problems/shortest-distance-to-a-character
// ⼊选理由
// ①仍然是⼀道简单题，不过⽐昨天的题⽬难度增加⼀点
// ②虽然这是⼀个字符串的题⽬，但其实字符串和数组没有本质差别。

function shortestToChar(s, c) {
  let maxLength = s.length;
  let answer = new Array(maxLength).fill(maxLength);
  let index = null;
  // 先从头开始扫描
  for (let i = 0; i < maxLength; i++) {
    minDistance(i);
  }
  index = null;
  for (let i = maxLength - 1; i >= 0; i--) {
    minDistance(i);
  }
  function minDistance(i) {
    if (s[i] === c) {
      index = i; // 这样让每次拿到最新的离 c 位置的坐标
    }
    answer[i] = Math.min(
      answer[i],
      index !== null ? Math.abs(i - index) : maxLength // 注意：有可能 index 为 0
    );
  }
  console.log(answer)
}

shortestToChar("loveleetcode", "e")
shortestToChar("aaab", "b")
shortestToChar("baaa", "b")

// 2.编程题
// 实现symbol polyfill
// //题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol
