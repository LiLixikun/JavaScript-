/**
 * 实现maxDeep()

maxDeep([1,2,3,4,5]) // 1

maxDeep([1,[2,3],4,[5,6],[7]]) // 2

maxDeep([1,[2,[3],4],[5,6],[7]]) // 3
 */

function maxDeep(arr) {
  let deep = 0;
  function dfs(arr, num) {
    deep = Math.max(deep, num + 1);
    for (const item of arr) {
      if (Array.isArray(item)) {
        return dfs(item, num + 1);
      }
    }
  }
  dfs(arr, deep);
  return deep;
}

console.log(maxDeep([1,[2,[3],4],[5,6],[7]]));
