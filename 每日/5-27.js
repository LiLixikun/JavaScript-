function PlusOne(nums = []) {
    let carry = true  
    for (let i = nums.length - 1; i >= 0; i--) {
        if (carry) {
            const sum = carry + nums[i];
            nums[i]=sum%10
            carry = sum > 9 ? 1 : 0;
        }
    }
    if (carry) {
        nums.unshift(1)
    }
    console.log(nums);
}
PlusOne([9])