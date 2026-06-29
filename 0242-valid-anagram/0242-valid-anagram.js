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
    if(s.length!=t.length){
        return false;
    }
    let seen = new Map();
    for(let char of s){
        if(seen.has(char)){
            seen.set(char,seen.get(char)+1)
        }else
        seen.set(char,1)
    }
    for(let char of t){
        if(!seen.has(char)){
            return false
        }
        seen.set(char,seen.get(char)-1)
        if(seen.get(char)<0){
            return false;
        }
    }
    return true
}