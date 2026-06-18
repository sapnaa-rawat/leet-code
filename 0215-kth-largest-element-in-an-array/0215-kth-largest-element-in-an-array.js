/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sortedArr=nums.sort((a,b)=>a-b)
    let length = sortedArr.length
    let kthElement = length-k;
    console.log("kth",length-k)
    let op = sortedArr[kthElement]

    return op
    
};