// 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
// 输出：[10,55,45,25,25]
// 解释：
// 航班编号        1   2   3   4   5
// 预订记录 1 ：   10  10
// 预订记录 2 ：       20  20
// 预订记录 3 ：       25  25  25  25
// 总座位数：      10  55  45  25  25
// 因此，answer = [10,55,45,25,25]

var corpFlightBookings = function (bookings, n) {
  const arr = new Array(n).fill(0);
  for (const nums of bookings) {
    const first = nums[0],
      seatsi = nums.pop(),
      lasti = nums.pop();
    for (let i = first; i <= lasti; i++) {
      arr[i-1] += seatsi;
    }
  }
  return arr
};

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));
console.log(corpFlightBookings([[1,2,10],[2,2,15]],2));