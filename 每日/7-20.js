// 请在分隔符不确定的情况下、设计一个函数对字符串进行分割、输出一个数组
// 输入 'ass ff; fdd,ggg dddh'
function splitStr(str) {
    const reg = /[0-9a-z]/i
    let res =[]
    let currentStr=""
    for (const s of str) {
        if (reg.test(s)) {
            currentStr+=s
        }else{
            if (currentStr) {
                res.push(currentStr)
                currentStr=''
            }
        }
    }
    console.log(res);
    return res
}

splitStr('ass ff; fdd,ggg dddh')