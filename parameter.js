// function square(number){
    // console.log(number);
// }
// square(4);


function square(number){
    // console.log(number);
    let ans = number * number;
    // console.log('ans for square',ans);
}
square(4);
// console.log('--------------------------')
square(12);


// function sum(num1,num2,num3){
//     let sum = num1 +num2 +num3;
//     console.log(sum);
// }
// sum(4,5,6);

function number(a,b,c,d){
    if(a % 2 ===0){
        console.log('even Num:',a);
    }
    else if( b % 2===0){
        console.log('even num :',b);
    }
    else if( c % 2===0){
        console.log('even num :',c);
    }
    else if( d % 2===0){
        console.log('even num :',d);
    }
    else{
        console.log('This is odd number')
    }
}
number(1,3,4,6);