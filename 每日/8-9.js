// 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

// 输入：s = "abbcccddddeeeeedcba"
// 输出：5
// 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。


var maxPower = function (s) {
    let len = 0
    for (let j = 0; j < s.length; j++) {
        let i = j
        while (s[i] === s[j]) {
            j++
        }
        len = Math.max(len, j - i)
        j--
    }
    return len
};

maxPower("leetcode")