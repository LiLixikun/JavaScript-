// 两个有序整数数组，数组中可能会有重复数字，求两个数组的交集和并集，
// 要求交集和并集中没有重复数字
function getArr(arr1, arr2) {
   const set1 = new Set(arr1)
   const set2 = new Set(arr2)
    let arrMin = []
    for (const num of set1) {
        if (set2.has(num)) {
            arrMin.push(num)
        }
    }
    let arrMax = new Set([...arr1, ...arr2])
    return [arrMin,arrMax]
}
console.log(getArr([1, 2, 2, 3], [2, 3, 4, 5]));