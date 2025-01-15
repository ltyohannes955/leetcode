/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ind = []
    for(let i=0; i<words.length; i++){
        for (j=0; j<words[i].length; j++){
            if(words[i][j] == x){
                ind.push(i)
                break;
            }
        }
    }
    return ind
};