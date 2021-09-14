var decodeString = function(s) {
  const numStack =[];
  const strStack =[];
  let resStr = "",num=""
  for(let str of s){
      if(!isNaN(str))num+=str
      else if(str==="["){
          strStack.push(resStr)
          numStack.push(num)
          resStr=''
          num=""
      }
      else if(str==="]"){
          resStr=strStack.pop()+resStr.repeat(numStack.pop())
      }else resStr+=str
  }
  return resStr
};

decodeString("3[a2[c]]")