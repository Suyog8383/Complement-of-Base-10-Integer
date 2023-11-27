function findValue(n){
    if(n == 0) return 1;
    let biNum="";
    while( n > 0){
        let rem = n % 2;
        n = parseInt(n / 2);
        biNum = rem + biNum;
    }
    let biNum2="";
    for(let i=0;i<biNum.length;i++){
        if(biNum[i]==="1"){
            biNum2 = biNum2 + "0"
        }else{
            biNum2 = biNum2 + "1"
        }
    }
    return parseInt(biNum2,2);
}
console.log(findValue(7));
