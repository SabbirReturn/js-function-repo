function removeDuplicate(names){
    let uniqueName = [];
    for( let name of names){
        if(uniqueName.includes(name)=== false){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}
let names = ['Hasan','Robin','Sabbir','Misu','Hasan','Misu','Mahfuza','Mamun'];
let output = removeDuplicate(names);
console.log(output);