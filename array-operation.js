function sumOfNumber(numbers){
    let sum =0;
    for( let number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;
}
let numbs =[11,12,13,14,15]
let sum = sumOfNumber(numbs);
console.log('sum of all number',sum);