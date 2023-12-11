function inputType(myType){
    

if(myType === 'string'){
    return myType
}else if(myType === 30){
    return myType
}else if(myType === null ){
    return myType
}else if(myType === true){
    return myType
}else if (myType === undefined){
    return myType
}
}
let myNewType=inputType(true)
console.log(typeof myNewType )