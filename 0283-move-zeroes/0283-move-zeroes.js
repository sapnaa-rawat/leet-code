/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //Input: nums = [0,1,0,3,12]

var moveZeroes = function(nums){
    let j=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=0){//1
            console.log(nums[i]);
            [nums[j],nums[i]]=[nums[i],nums[j]];//i=0,j=1; j=
            j++;
        }
    }
    return nums;
}
var nums = [0,1,0,3,12]
console.log(moveZeroes(nums))