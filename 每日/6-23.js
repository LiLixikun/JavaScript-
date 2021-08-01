// 无重复字符的最长子串，给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
var lengthOfLongestSubstring = function (s) {
    // let max = 0
    // let index = -1
    // let map = new Map()
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i]
    //     if (map.has(char)) {
    //         index = Math.max(index, map.get(char))
    //     }
    //     map.set(char, i)
    //     max = Math.max(max, i - index)
    // }
    // console.log(max);
    // return max
    let i=0;
    let j=0
    let max =0
    let map = new Map()
    while (j<s.length) {
        const char = s[j]
        if (map.has(char)&&j>=i) {
            i=map.get(char)+1
        }
        max=Math.max(max,j-i+1)
        map.set(char,j)
        j++
    }
    console.log(max);
};
lengthOfLongestSubstring("pwwkew")