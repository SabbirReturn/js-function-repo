function evenAverage(nums){
    let evenNumber=[];
    let sum =0;
    for(let i= 0; i<nums.length; i++){
        let num = nums[i];
        if(num % 2===0){
            evenNumber.push(num);
            sum = sum + num;
        }
    }
    let len = evenNumber.length;
    let result = sum + len;
    return result;
}
let numbers = [1,2,13,14,15,11,13,111,15,20,29,28,31,32];
let avg = evenAverage(numbers);
console.log('the average number is:', avg);