// 反转每对括号间的子串
/**
 * 输入：s = "(abcd)"
   输出："dcba"

   输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。

输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
 */

function reverseParentheses(s) {
    let str = ''
    const arrStr = []
    for (const ss of s) {
        if (ss=="(") {
            arrStr.push(str)
            str=''
        }else if (ss == ")") {
            str = str.split("").reverse().join("")
            str = arrStr.pop()+ str
        }else{
            str+=ss
        }
    }
    console.log(str);
}
reverseParentheses("(u(love)i)")

function lastStoneWeightII(stones) {
    
}