// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true
/* @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
       if (flowerbed[i]==0&&flowerbed[i-1]!==1&&flowerbed[i+1]!==1) {
           n--
           i++
       }
    }
    return n>=0
}
console.log(canPlaceFlowers([1,0,0,0,1],1));
console.log(canPlaceFlowers([0,0,0,0,1],2));