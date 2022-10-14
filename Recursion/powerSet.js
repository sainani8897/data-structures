function powerSet(str,i=0,currStr="") {
    if(i==str.length){
        console.log(currStr);
        return;
    }

    powerSet(str,i+1,currStr+str[i])
    powerSet(str,i+1,currStr)

}

powerSet("abc")