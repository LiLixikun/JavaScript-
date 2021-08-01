var topKFrequent = function(words, k) {
    const map = {}
    for(let item of words){
        if(!map[item]){
            map[item]=1
        }else{
            map[item]=map[item]+1
        }
    }
    const res = []
    for(let key of Object.keys(map)){
        res.push(key)
    }
    res.sort((str1,str2)=>{
        return map[str1]==map[str2]?str1.localeCompare(str2):map[str2]-map[str1]
    })
    return res.slice(0,k)
};
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],4));