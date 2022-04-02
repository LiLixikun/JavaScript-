// 1.算法题：https://leetcode-cn.com/problems/implement-queue-using-stacks/

// 2.手写题：https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

// angle('23:30') // 165

function angle(time) {
  const [hour, mins] = time.split(":");
  // 计算时针的角度
  const hourAngle = (360 / 12) * ((hour % 12) + mins / 60); // 这个地方分针的转动也会导致时针有一定的角度
  // 计算分针的角度
  const minAngle = (360 / 60) * (mins % 60);
  // 求出来角度差
  const diff = Math.abs(minAngle - hourAngle);
  const res = Math.min(360 - diff, diff);
  return Math.round(res)
}
