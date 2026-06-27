/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    let sorted = nums.sort((a,b)=>{
        let ba = b.toString() + a.toString()
        let ab = a.toString() + b.toString()
    if(ba>ab) return 1
    if(ab>ba) return -1
    return 0
    })
    

    let output = sorted.join("")
    if(output[0]==="0"){
        return "0"
    }
    return output
};