let evennumbers = [];
function evenAverage( numbers){
    for( let number of numbers){
        if(number % 2===0){
            evennumbers.push(number);
        }
    }
    let sum = 0;
    for( let evennumber of evennumbers){
        sum = sum + evennumber;  
    }
    let countNumber = evennumbers.length;
    let result = sum / countNumber;
    return result;
}
let numbers = [100,1001,102,1002,1003,103,104,105,1005,1006,106];
let average = evenAverage(numbers);
console.log('average of the even number',average);