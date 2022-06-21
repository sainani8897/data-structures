function getGCD(a,b){
    if(b==0) return a

   return getGCD(b,a%b)
}


console.log(getGCD(4,6))