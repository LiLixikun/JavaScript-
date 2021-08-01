function isPowerOfTwo(num) {
    while (num >= 2) {
        num /= 2
    }
    if (num == 0 || num == 1) {
        return true
    }
    return false
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));