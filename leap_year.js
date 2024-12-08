function leapyear(year){
    if(year % 4===0){
        return true;
    }
    else{
        return false;
    }
}
// let lyear = leapyear(2021);
// console.log(lyear);

function isLeapYear(year){
    if(year % 100 !==0 & year % 4===0){
        return true;
    }
    else{
        return false;
    }
}
let leapyear1= isLeapYear(2024);
console.log(leapyear1);