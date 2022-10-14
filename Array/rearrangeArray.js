
let A = []
function rearrangeArray(params) {
    for(let i=0;i<A.length;i++){
        let x = A[i];
        let y = A[x]
        A[i] = x+(y%n)*n 
     }
     
     for(let i=0;i<A.length;i++){
        let res = Math.floor(A[i]/n)
        A[i] =  res;
     }
     
     return A
}

