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
// console.log(output1);
// console.log(output2);


function numberOfElement(number){
    let len = number.length;
    return len;
}
// let output = numberOfElement([1,2,3,4,5,6,7]);
// console.log(output);


function getAge(person){
    let age = person;
    return age;
}
 let output = getAge(
    man={
        name:'Sabbir Hasan',
        age: 25,
        address: 'Uttara',
    }
)
console.log(output);