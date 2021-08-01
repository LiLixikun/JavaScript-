/**
 * 
 * @param {算法：给你一个纯数字字符串，判断旋转180度之后是否和自己相等，
 * ‘121‘ 输出 false，因为2旋转之后不是数字，
 * '1691' => true 因为1691选装180度还是1691， 
 * 1991 => false 因为1991旋转之后是1661} str 
 */
function isEqual(str) {
    const map = new Map([
        ["0","0"],
        ["1","1"],
        ["6","9"],
        ["8","8"],
        ["9","6"]
    ])
    const len =str.length
    for (let i = 0; i <= Math.ceil(len/2); i++) {
       const s = str[i]
       if (!map.has(s)||map.get(s)!==str[len-i-1]) {
           return false
       }
    }
    return true
}
console.log("121",isEqual("123"));
console.log("169691",isEqual("169691"));
console.log("1991",isEqual("1991"));