function isOdd(num){
    if(num % 2 ===1){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isOdd(5));
// console.log(isOdd(10));


// check even number

function isEven(number){
    if(number % 2 ===0){
        return true;
    }
    return false
}
const output1 = isEven(100);
const output2 = isEven(101);
console.log(output1, output2);
