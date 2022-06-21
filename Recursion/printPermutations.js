function permute(str,left=0,right=str.length-1) {
    if (left == right) {
        console.log(str)
        return ;
    }

    for (let i = left; i <= right ; i++) {

      str = swap(str,left,i)

      console.log("swap:"+str);

      permute(str,left+1,right)  
      str = swap(str,left,right)
    }
}

function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp   
    console.log(arr)
    return arr;                           
}


console.log(permute("abc"));