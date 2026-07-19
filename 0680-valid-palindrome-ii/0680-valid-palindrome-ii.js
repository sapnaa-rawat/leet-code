/**
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function(s) {
//     let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,'')
//     let left = 0;
//     let right = cleaned.length-1;
//     while(left<right){
//         if(cleaned[left]==cleaned[right]){
//             left++;
//             right--;
//         }else{
//             let n =left+1;
//             let r = right-1;
//              if(cleaned[n]==cleaned[r]){
//                 console.log("indifee")
//                 left++;
//                 right--;
//             }
//             else{
//                 return false
//             }
//         }
//     }
//     return true
// };

var validPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] == cleaned[right]) {
            left++;
            right--;
        } else {
            // mismatch found — try skipping left char OR skipping right char
            return isPalindromeRange(cleaned, left + 1, right) || isPalindromeRange(cleaned, left, right - 1);
        }
    }
    return true;
};

function isPalindromeRange(cleaned, left, right) {
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}