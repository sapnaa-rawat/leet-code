/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1,3,4,2,2]
// Output: 2
var findDuplicate = function(nums) {   
     let set = new Set;
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return nums[i]
        }
        set.add(nums[i])     
    }
    return -1
};