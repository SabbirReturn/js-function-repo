function evenNumber(numbers){
    let evens = [];
    for(let number of numbers){
        // console.log(number);
        if(number % 2===0){
            // console.log(number);
            evens.push(number);;
        }
    }
    return evens;
}
let numbs = [1,2,3,4,5,6,7,8,9,10];
let num = evenNumber(numbs);
console.log(num)