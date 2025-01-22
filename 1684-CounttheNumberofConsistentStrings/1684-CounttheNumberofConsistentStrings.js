/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = new Array(words.length);
    let count=0;
    let allow = allowed.split('');
    for(let i=0;i<words.length;i++){
        res[i]=words[i];
        for(let j=0;j<allow.length;j++){
         res[i] = res[i].replaceAll(allow[j],'');
        }
         if(res[i]==''){
            count++;
         }
    }
    console.log(res);
    return count;
};