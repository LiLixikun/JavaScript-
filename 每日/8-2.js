/*
例子： str = '12345', n = 2, 最小值为123
例子： str = '105000' n = 1, 最小值位5000
例子： str = '234754' n = 2, 最小值位2344
*/

// 算法题是一个数字字符串，从中截取连续的几个，找到剩余的最小值
function test(str, k) {
    let min = Infinity, index = -1, len = str.length
    while (++index <= len - k) {
        min = Math.min(min, (str.slice(0, index) + str.slice(index + k)))
    }
    console.log(min);
    return min
}
test("105000", 1);
test("12345", 2);
test("234754",2)