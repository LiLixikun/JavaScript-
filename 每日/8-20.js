/**
 * 执行深比较来确定两者的值是否相等
 * var obj1 = { 'a': 1 };
 * var obj2 = { 'a': 1 };
 * isEqual(obj1, obj2);
 */
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
function isEqual(obj1, obj2) {
  // 如果传入的不为对象、直接判断是否相等
  if (!obj1 || !obj2) {
    return obj1 === obj2;
  }
  if (obj1 === obj2) return true;
  // key 长度不同
  if (Object.keys(obj1).length !== Object.keys(obj2)) return false;
  for (const key in obj1) {
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }
  return true;
}

const a = {
  a: 100,
  b: 200,
  c: {
    x: 1,
    y: 2,
  },
};

const b = {
  a: 100,
  b: 200,
  c: {
    x: 1,
    y: 2,
  },
};
console.log(isEqual(a, b));
