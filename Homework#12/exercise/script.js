// I shoul know the curent year;
// I should know user age
// 1.I should make defin a function;
// 2.I should make a variable with subtraction from curent year and birth year;
// 3.The return should be the curent age of the user
// 4.I should make a new variable to print the return value
// 5.I should put the value of the arguments amd use console. log to print the result.




function calculateAge(birthYear){
    let curentYear=2023;
    let curentAge=curentYear - birthYear;

    return curentAge
}

let userOneCuretnAge=calculateAge(1995)
console.log(`User age are:` ,userOneCuretnAge);
let userTwoCurentAge=calculateAge(1971)
console.log(`User age are:`,userTwoCurentAge);
let userThreeCurentAge=calculateAge(1973)
console.log(`User age are:` ,userThreeCurentAge)
