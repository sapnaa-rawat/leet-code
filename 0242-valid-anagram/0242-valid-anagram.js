/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  if(s.length !=t.length)  {
//         return false
//     }
//     let v1= s.split('').sort().join('')
//     console.log(v1)
//     let v2= t.split('').sort().join('')
//     console.log(v2)
//     if(v1===v2){
//         return true
//     }else
//     return false
var isAnagram = function(s, t) {  
    if (s.length !== t.length) return false;
        const freq = new Map();
        for (const char of s) {
            //freq increases
            freq.set(char, (freq.get(char) || 0) + 1)
        }

        for (const char of t) {
            if (!freq.has(char) || freq.get(char) === 0) return false;
            //freq decreases
            freq.set(char, freq.get(char) - 1);
        }
        return true;
}