function leapyear(year){
    if(year % 4===0){
        return true;
    }
    else{
        return false;
    }
}
let lyear = leapyear(2021);
console.log(lyear);