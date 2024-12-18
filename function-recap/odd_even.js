function odd_even(numbers){
    let oddNumber = [];
    let evenNumber = [];
    for(let number of numbers){
        if(number % 2===0){
           evenNumber.push(number);
        }
        else{
            oddNumber.push(number)
        }
    }
    return {odd:oddNumber, even:evenNumber}
}
let numbers = [12,13,11,14,15,16,17,18,19,10]
let outPut= odd_even(numbers);
console.log(outPut);