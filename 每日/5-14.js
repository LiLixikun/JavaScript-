// 去除字符串中出现次数最少的字符，不改变原字符串的顺序。
// 例：“ababac” —— “ababa”
// “aaabbbcceeff” —— “aaabbb”

function fn(str) {
    let map = {}
    let res = ''
    let min = 9999
    for (const s of str) {
        map[s] = (map[s] || 0) + 1
    }
    for (const key in map) {
        min = Math.min(map[key], min)
    }
    for (const s of str) {
        if (min !== map[s]) {
            res += s
        }
    }
    console.log(res);
}
fn("ababac")
fn('aaabbbcceeff')