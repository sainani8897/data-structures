var arr = [4,3,33,4,13,1,5,91,21];



function partionArray(arr){
    
    if(arr.length<2){
        return arr;
    }

    // console.log(arr);
    
    let partion = arr[0];
    let ita = 0;
    let left = [];
    let right = [];
    let newArr = [];
    let pivot = arr.shift();

    // will divide the array into two parts / based on  the pivot like in 
    // 1st iteration we will take 4 and create two new arrays which are greater than 4 and less than 4;
    // ex left  = [3,1] and right = [33,4,13,5,91,21]
    // so.... again we will call the recursive fuction so and so forth
    // uncommnet the two console.log for debugging to get a better idea.
    while(ita < arr.length){
        if(arr[ita] < partion)
        {
            left.push(arr[ita]);
        }
        else right.push(arr[ita]);
        ita++;
    }
    
    //console.log(left,right)

    return newArr.concat(partionArray(left),pivot,partionArray(right));
    
}

console.log(partionArray(arr));