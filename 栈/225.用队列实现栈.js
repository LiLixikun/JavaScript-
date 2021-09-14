// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
const myQuere = function () {
  this.stack = [];
  this.helperStack = [];
};
// 队列先进先出
// 栈先进后出
myQuere.prototype.push = function (x) {
  while (this.stack.length) {
    this.helperStack.push(this.stack.pop());
  }
  this.stack.push(x);
  while (this.helperStack.length) {
    this.stack.push(this.helperStack.pop());
  }
};

myQuere.prototype.pop = function () {
  return this.stack.pop();
};

myQuere.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

myQuere.prototype.empty = function () {
  return this.stack.length === 0;
};
