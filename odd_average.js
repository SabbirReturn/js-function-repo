// function takes an array as parameter
// give me the average of the odd numbers in the array;
let sum = 0;
let odds= [];
function oddAverage(numbers){
    for( let number of numbers){
        // console.log(number);
        if( number % 2 !==0){
            // console.log('odd Number',number);
            odds.push(number)
            sum = sum + number;   
        }
    }
    let count = odds.length;
    let result = sum / count;
    return result;
}
let average = oddAverage([11,12,13,14,15,16,17,18,19,20])
console.log('average of the number is',average);