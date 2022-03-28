// 实现 999999999，输出 999,999,999
function formatNumber(num) {
  return num.toString().split("").reverse().reduce((pre, next, index) => {
    return ((index % 3) ? next : (next + ',')) + pre
  })
}

console.log(formatNumber(999999999));
console.log(formatNumber(123456789));