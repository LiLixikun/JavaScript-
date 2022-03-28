// 请用算法实现，从给定的无序、不重复的数组廯攃壧攃中，取出巖个数，使其相加和为巙孅厲。并给出算法的时间/空间复杂度。(不需要找到所有的解，找到一个解即可)
let results = []
function getAllCombin(array, n, sum, temp) {
  if (temp.length === n) {
    if (temp.reduce((pre, num) => pre + num) === sum) {
      return temp
    }
    return false
  }

  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    temp.push(num)
    const result = getAllCombin(array, n, sum, temp)
    if (result && result.length) {
      results.push([...result])
    }
    temp.pop()
    // array.push(num)
  }
}

const arr = [1, 5, 6, 2, 4, 3];
getAllCombin(arr, 3, 10, [])
console.log(results);
