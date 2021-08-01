/**
 * [‘12a’,’3b’,’4c’,’15d’,'15e',’2a’] 统计这个数组中出现次数最多的字母前的数字和，
 * 这个数组就是a, 12+2 = 14
 */

function getMaxSum(params) {
    let max = 0;
    let map = new Map()
    for (const str of params) {
        const num = parseInt(str);
        let s = str.split(num).pop()
        if (map.has(s)) {
            let arr = map.get(s)
            arr.push(num)
            map.set(s, arr)
        } else {
            map.set(s, [num])
        }
        max = Math.max(max, map.get(s).length)
    }
    let sum = 0
    for (const value of map.values()) {
        if (value.length == max) {
            sum = value.reduce((a, b) => a + b, sum)
            return sum
        }
    }
}
console.log(getMaxSum(["12a", "3b", "4c", "15d", "2a"]));