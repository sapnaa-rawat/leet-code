/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    let sorted = nums.sort((a,b)=>
    ((b.toString() + a.toString())-( a.toString() + b.toString())))
    let output = sorted.join("")
    if(output[0]==="0"){
        return "0"
    }
    return output
};