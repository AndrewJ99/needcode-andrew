/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    arr1 = s.split("").sort();
    arr2 = t.split("").sort();
    
    //catch extra test cases (be sure to check if both lengths are the same)
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
            break;
        }
    }
    return true;
};