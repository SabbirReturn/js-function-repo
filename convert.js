function feettoInc(feet){
    let result = feet * 12;
    return result;
}
// let sabbirHeigh = feettoInc(5.9);
// console.log(sabbirHeigh);

// 75

function inchToFeet(inch){
    let heightRemain = inch/12;
    let height = parseInt(heightRemain);
    let heightmodulo = inch % 12;
    let result = height + ' feet ' + heightmodulo + ' Inch '
    return result;
}
let sabbirHeigh = inchToFeet(75);
console.log(sabbirHeigh);