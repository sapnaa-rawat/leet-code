/**
 * @param {string} s
 * @return {boolean}
 */
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

// var isPalindrome = function(s) {
//     let l = 0;
//     let r = s.length-1;
//     while(l<r){
//         if(l!=r){
//             return false;
//         }
//         l++
//         r--
//     }

// };

