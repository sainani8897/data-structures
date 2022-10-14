function fastPower(a,b){
    let res = 1;
    
    while(b>0){
        if((b&1)!=0){
            res = res * a;
        }
        a= a * a;
        b=b/2
        
    }
    return res;
    
}

/** Using Modulo arthmatics */

function fastPowerModulo(a,b,n){
    let res = 1;
    // Here n is modulo value given
    while(b>0){
        if((b&1)!=0){
            res = (res * a%n)%n;
        }
        a= (a%n * a%n)%n;
        b=b>>1 // same as b/2
        
    }
    return res;
    
}


console.log(fastPowerModulo(2,4,100000007))


