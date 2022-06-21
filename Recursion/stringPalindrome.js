
let str = "racecar";
function stringPalindrome(str,left,right) {
    
    if (left>right) {
        return true
    }

    // console.log(str[left],str[right],right)
    if (str[left]!=str[right]) {
        return false
    }

    return stringPalindrome(str,left+1,right-1)



}

console.log(stringPalindrome(str,0,(str.length-1)));