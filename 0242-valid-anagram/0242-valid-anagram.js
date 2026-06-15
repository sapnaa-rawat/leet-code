/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {  
    if(s.length !=t.length)  {
        return false
    }
    let v1= s.split('').sort().join('')
    console.log(v1)
    let v2= t.split('').sort().join('')
    console.log(v2)
    if(v1===v2){
        return true
    }else
    return false
};