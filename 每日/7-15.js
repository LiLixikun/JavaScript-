// 字符串解析，要求
// 相同key的多个值用数组封装
// 如果能用JSON解析则作为json对象
// 没有value，赋值false的boolean值
// 需要转义
// input: name=adam&name=bob&obj={a:1,b:2}&use&encodeStr=%20
// output:
// {
//   name: ['adam', 'bob'],
//   obj: {a:1, b:2},
//   use: false,
//   encodeStr: ' '
// }

function tranform(str) {
    const arr = decodeURI(str).split("&")
    let map = {}
    for (const item of arr) {
        let [key, value = false] = item.split("=")
        try {
            value=eval(`(${value})`)
        } catch (error) {
            
        }
        if (!map[key]) {
            map[key] = value
        } else {
            if (typeof map[key] === "string") {
                map[key] = [map[key], value]
            } else {
                map[key].push(value)
            }
        }
    }
    console.log(map);
    return map
}
tranform("name=aotu&name=adam&name=bob&obj={a:1,b:2}&use&encodeStr=%20")