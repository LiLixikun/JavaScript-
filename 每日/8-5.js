// 最短无序连续子数组
// nums = [2,6,4,8,10,9,15] 
// 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
function findUnsortedSubarray(nums) {
    let max = -Infinity, right = -1;
    let min = Infinity, left = -1;
    const len = nums.length
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        if (max > num) {
            right = i
        } else {
            max = num
        }
        if (min < nums[len - i - 1]) {
            left = len - i - 1;
        } else {
            min = nums[len - i - 1]
        }
    }
    return right == -1 ? 0 : right - left + 1
}
findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])