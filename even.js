let num = 10;
let sum = 0;
function even (num){
    for(let i = 0; i<10; i++){
        // console.log(i);
        if( i % 2===0){
            console.log('even num:',i);
            sum = sum + i;
            console.log('sum of even number:',sum);
        }
    }
}
even(num);