// 验证一个数是不是回文
// x = 121
function isPalindrome(x) {
    // 为负数可以不行
    if (x<0) {
        return false
    }
    // 是10的倍数也不行
    if (x%10==0) {
        return false
    }
    const arrX = String(x).split("")
    return x==arrX.reverse().join("")
}
console.log(isPalindrome(121));