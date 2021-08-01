// 算法题：[1,2,3,4,1,2,3,6,7,8] => ['1-4','1-3','6-8']

function combine(arr) {
    if (!Array.isArray(arr)) {
        return []
    }
    let cur=0,next=1,len=arr.length,begin=0,res=[];
    while (next<=len) {
        if (arr[cur]+1!==arr[next]||next===len) {
            res.push(`${arr[begin]}-${arr[cur]}`)
            begin=next
        }
        cur++
        next++
    }
    return res
}
console.log(combine([1,2,3,4,1,2,3,6,7,8]))