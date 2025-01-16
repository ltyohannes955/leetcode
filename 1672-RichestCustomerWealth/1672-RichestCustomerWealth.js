/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans = 0;
    let res = 0;
    for(let i=0; i<accounts.length; i++){
        for (j=0; j<accounts[i].length; j++){
            ans+=accounts[i][j] 
        }
        console.log(ans)
        if(ans >= res){
                res = ans
            }
            ans = 0
    }
    
    return res
};