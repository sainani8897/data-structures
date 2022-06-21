var findTheWinner = function(n, k) {
    return jos(n,k)+1
};


function jos(n,k){
    if(n==1){
        return 0
    }
    
    return parseInt((jos(n-1,k)+k) % n)
}

console.log(findTheWinner(6,5))