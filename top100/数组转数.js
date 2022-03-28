// 转换为: [{
//           id: 1,
//           pid: 0,
//           name: 'body',
//           children: [{
//                   id: 2,
//                   pid: 1,
//                   name: 'title',
//                   children: [{
//                       id: 3,
//                       pid: 1,
//                       name: 'div'
//                   }]
//               }
//           }]

function toTree(array) {
  let map = new Map();
  let result = []
  array.forEach(item => {
    map.set(item.id, item)
    delete item.children
  });
  array.forEach((item) => {
    let parent = map.get(item.pid)
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
const source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]

const result = toTree(source)
console.log(result);