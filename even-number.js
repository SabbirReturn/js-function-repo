// function evenNumber(numbers){
//     let evens = [];
//     for(let number of numbers){
//         // console.log(number);
//         if(number % 2===0){
//             // console.log(number);
//             evens.push(number);;
//         }
//     }
//     return evens;
// }
// let numbs = [1,2,3,4,5,6,7,8,9,10];
// let num = evenNumber(numbs);
// console.log(num)

function sumOfevenNumber(numbers){
    let sum =0;
    for(let number of numbers){
        // console.log(number);
        if(number % 2===0){
            sum = sum + number;
        }
    }
    return sum;
}
let numbs = [1,2,3,4,5,6,7,8,9,10];
let num = sumOfevenNumber(numbs);
console.log('sum of even number', num);