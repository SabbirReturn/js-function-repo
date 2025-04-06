function noDuplicate(array){
    let uniquePerson = [];
    for(let iteam of array){
        if(uniquePerson.includes(iteam) ===false){
            uniquePerson.push(iteam);
        }
    }
    return uniquePerson
}
let berinyKhor = ['Sabbir','Hasan','Robin','Misu','Sabbir','Hasan'];
let unique = noDuplicate(berinyKhor);
console.log(unique);



function noDuplicate(array){
    let uniquePerson = [];
    for(let iteam of array){
        if(uniquePerson.includes(iteam) ===false){
            uniquePerson.push(iteam);
        }
    }
    return uniquePerson
}
let berinyKhor = ['Sabbir','Hasan','Robin','Misu','Sabbir','Hasan'];
let unique = noDuplicate(berinyKhor);
console.log(unique);
