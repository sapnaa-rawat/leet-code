/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {    
    let v1= s.split('').sort().join('')
    console.log(v1)
    let v2= t.split('').sort().join('')
    console.log(v2)
    if(v1===v2&&v1.length===v2.length){
        return true
    }else
    return false
};