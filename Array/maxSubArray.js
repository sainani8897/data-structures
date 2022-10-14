function maxSubArraySum(a, size)
{
    let max_so_far = Number.MIN_VALUE,
    max_ending_here = 0,start = 0,
    end = 0, s = 0;
 
    for(let i = 0; i < size; i++)
    {
        max_ending_here += a[i];
 
        if (max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }
 
        if (max_ending_here < 0)
        {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    return (end - start + 1);
}
 
// Driver code
let a = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
let n = a.length;
 
console.log(maxSubArraySum(a, n));