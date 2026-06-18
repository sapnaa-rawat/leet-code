/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = new Set()
    for(let i=0;i<nums.length;i++){
        seen.add(nums[i])
    }
    let newarr = [...seen]
    for(let i=1;i<newarr.length;i++){
        nums[i]=newarr[i]
    }
    return newarr.length
};