function oddAverage(nums){
    let oddNumber =  [];
    let sum= 0;
    for(let num of nums){
        if(num % 2==1){
            sum = sum + num;
            oddNumber.push(num)
        }
    }
    let len = oddNumber.length;
    let result = sum / len;
    return result;
}
let numbers= [1,11,2,3,4,5,6,12,13,14,15,16,17];
let outPut = oddAverage(numbers);
console.log(outPut);