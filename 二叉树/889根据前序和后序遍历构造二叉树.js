// 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
// 输出：[1,2,3,4,5,6,7]
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val ? val : 0;
        this.left = left;
        this.right = right;
    }
}
var constructFromPrePost = function (pre, post) {
    if(pre.length == 0){
        return null;
    };

    let tmp = pre[0];
    let index = post.indexOf(pre[1]);
    let root = new TreeNode(tmp);
    root.left = constructFromPrePost(pre.slice(1,index+2),post.slice(0,index+1));
    root.right = constructFromPrePost(pre.slice(index+2),post.slice(index+1,post.length-1));
    return root;
};