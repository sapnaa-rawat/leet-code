/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let newString = x.toString();
    if(newString<0){
        return false
    }
    let left =0;
    let right = newString.length-1;
    while(left<=right){
        if(newString[left]!==newString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};