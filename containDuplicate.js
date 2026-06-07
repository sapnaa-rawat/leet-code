/*Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true*/

//1st brute force approach
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result =[]
        for(let i=0;i<nums.length;i++){
            if(result.includes(nums[i])){
                return true
            }else{                
                result.push(nums[i])
            }
        }
        return false
    }
}

let nums = [1, 2, 3, 3]
let obj = new Solution;
console.log(obj.hasDuplicate(nums))

//2nd brute force approach
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result =[]
        for(let i=0;i<nums.length;i++){
            for(let j= i+1;j<nums.length;j++){
                console.log(nums[i])
                console.log(nums[j])
                if(nums[i]==nums[j]){
                    return true
                }
            }
        }
        return false
    }
}

let nums = [1, 2, 3, 3]
let obj = new Solution;
console.log(obj.hasDuplicate(nums))