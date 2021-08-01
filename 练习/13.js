function romanToInt(str) {
    let map =new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000],
    ])
    let len = str.length
    let res =0
    for (let i = 0; i < str.length; i++) {
        const val = map.get(str[i])
        // 如果出现CM、IV、IX 、XL、XC等情况会发生 str 的 i+1的 val>i的
        if (i<len-1&&val<map.get(str[i+1])) {
            console.log(val);
            console.log(map.get(str[i+1]));
            res-=val
        }else{
            res+=val
        }
    }
    return res
}
/**
 * 输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

romanToInt("MCMXCIV")