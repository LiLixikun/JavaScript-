// 求 二维数组的全排列组合

function combine(array, n) {
  let result = [], path = []

  function backtracking(path, index) {
    if (path.length === n) {
      result.push(path.join(""))
      return
    }
    for (let i = 0; i < array[index].length; i++) {
      path.push(array[index][i])
      backtracking(path, index + 1)
      path.pop()
    }
  }
  backtracking(path, 0)
  console.log(result);
}

const array = [["A", "B"], ["a", "b"], [1, 2]]
combine(array, array.length)