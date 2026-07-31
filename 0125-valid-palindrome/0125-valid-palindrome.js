/**
 * @param {string} s
 * @return {boolean}
 */
 //the below code is correct but it will give the space complexity of 0(n) and we can optimize it
 let check =(s)=>{
    let left = 0;
    let right = s.length-1;
    while(left<=right){
        if(s[left]!==s[right]){
           return false;
        }
        left++;
        right--;        
    }
    return true;
 }
 
var isPalindrome = function(s) {
    let clean = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    return check(clean);
};

//this will give the space complexity of 0(1)
function isAlphaNumeric(ch) {
    const charr = ch.charCodeAt(0);
    return (
        (charr >= 48 && charr <= 57) ||
        (charr >= 65 && charr <= 90) ||
        (charr >= 97 && charr <= 122)
    );
}

function palindrome(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) l++;
        while (l < r && !isAlphaNumeric(s[r])) r--;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}




