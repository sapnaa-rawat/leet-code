/**
 * @param {number} x
 * @return {boolean}
 */
  
 const check = (clean)=>{
    let left =0;
    let right = clean.length-1;
    while(left<=right){
        if(clean[left]!==clean[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
 }
var isPalindrome = function(x) {
    let newString = x.toString();
    if(newString<0){
        return false
    }
    let clean = newString.replace(/[^A-Za-z0-9]/g,'')

    return check(clean)

};