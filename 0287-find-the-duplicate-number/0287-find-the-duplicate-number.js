/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1,3,4,2,2]
// Output: 2
var findDuplicate = function(nums) {   
    nums.sort((a,b)=>a-b); 
    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return nums[i];
        }       
    }
    return false
};