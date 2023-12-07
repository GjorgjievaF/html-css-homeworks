


let userInput = prompt('Write the amount of money:');
console.log(typeof userInput);

let userInputNumber = parseFloat(userInput);
console.log(typeof userInputNumber);

if(userInputNumber === 500){
    console.log('You should buy pizza,coca cola and chocolate')

}else if(userInputNumber >= 400 && userInputNumber <= 500){
    console.log('you should eat pizza and coca cola')
}else if (userInputNumber >= 300 && userInputNumber < 400){
    console.log('You should eat burger,coca cola and chocolate')
}else if(userInputNumber >= 200 && userInputNumber <300){
    console.log('You should eat burger and coca cola')
}else if(userInputNumber >= 100 && userInputNumber <300){
    console.log('You should eat burger')
}else if (userInputNumber >=30 && userInputNumber < 100){
    console.log('You can eat toast')
}else if(userInputNumber >=1 && userInputNumber <=30){
    console.log('You can\'t eat')
}else{
    console.log('Parsed input in else')
}




