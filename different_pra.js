function evenSizeString (str){
    const size = str.length
    console.log(str,size)
    if(size % 2===0){
        return true;
    }
    else{
        return false;
    }
}
// let output1 =evenSizeString('Dhaka');
// let output2=evenSizeString('faka')
// console.log(output1,output2);