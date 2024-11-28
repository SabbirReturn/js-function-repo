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

function doOrdouble (num, doOrdouble){
    if(doOrdouble===true){
        let result = num * 3;
        return result;
    }
    else{
        let result = num * 2;
        return result
    }
}
let output1 = doOrdouble(5, true);
let output2 = doOrdouble(5, false);
console.log(output1);
console.log(output2);