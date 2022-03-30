// 2.算法题：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
  this.maxSize = maxSize
  this.stack = []
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function(x) {
  if( this.stack.length < this.maxSize){
      this.stack.push(x)
  }
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function() {
  if(this.stack.length===0){
      return -1
  }
  return this.stack.pop()
};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function(k, val) {
  k = (k<this.stack.length?k:this.stack.length)
  for(let i = 0; i< k; i++){
      this.stack[i]+=val
  }
};