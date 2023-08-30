/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let sorted = strs.map((str) => str.split("").sort().join(""));
    console.log(sorted);

    let map = {};

    for(let i = 0; i < sorted.length; i++){
        if(!map[sorted[i]]){
            map[sorted[i]] = [strs[i]];  // Initialize the value as an array
            //console.log(map);
        } else {
            map[sorted[i]].push(strs[i]);  // Push to the existing array
        }
    }

    return Object.values(map);

};