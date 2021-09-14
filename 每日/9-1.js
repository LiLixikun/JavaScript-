// 165  比较版本号
// version1 = "1.0", version2 = "1.0.0" 0
// version1 = "0.1", version2 = "1.1" -1
// version1 = "1.0.1", version2 = "1" 1
// version1 = "7.5.2.4", version2 = "7.5.3" -1

var compareVersion = function (version1, version2) {
  const arr1 = version1.split("."),
    arr2 = version2.split(".");
  const maxLen = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLen; i++) {
    const num1 = arr1[i] || 0,
      num2 = arr2[i] || 0;
    if (+num1 < +num2) return -1;
    else if (+num1 === +num2) continue;
    else return 1;
  }
  return 0;
};

console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("7.5.2.4", "7.5.3"));

