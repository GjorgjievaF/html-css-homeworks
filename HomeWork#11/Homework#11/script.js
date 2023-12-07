
let userInput=prompt('Year that you are born:');
let inputZodiacYear= ( year - 4) % 12;
let inputChineseYear=parseFloat(inputZodiacYear);


if (inputChineseYear < 12 && inputChineseYear ==0){
    console.log('You\'r Chinese Zodiac is :RAT')
}else if(inputChineseYear < 12 && inputChineseYear ==1){
    console.log('You\'r Chinese Zodiac is :OX')
}else if (inputChineseYear < 12 && inputChineseYear ==2){
    console.log('You\'r Chinese Zodiac is:TIGAR')
}else if (inputChineseYear <12 && inputChineseYear ==3){
    console.log('You\'r Chinese Zodiac is:RABBIT')
}else if(inputChineseYear <12 && inputChineseYear ==4){
    console.log ('You\'r Chinese ZOdiac is:DRAGON')
}else if(inputChineseYear < 12 && inputChineseYear ==5){
    console.log('You\'r Chinese Zodiac is :SNAKE')
}else if(inputChineseYear < 12 && inputChineseYear ==6){
    console.log('You\'r Chinese Zodiac is :HORSE')
}else if(inputChineseYear <12 && inputChineseYear ==7){
    console.log('You\'r Chinese Zodiac is :GOAT')
}else if(inputChineseYear < 12 && inputChineseYear ==8){
    console.log('You\'r Chinese Zodiac is :MONKEY')
}else if(inputChineseYear < 12 && inputChineseYear ==9){
    console.log('You\'r Chinese Zodiac is :ROOSTER')
}else if(inputChineseYear < 12 && inputChineseYear ==10){
    console.log('You\'r Chinese Zodiac is :DOG')
}else if(inputChineseYear <12 && inputChineseYear ==11){
    console.log('You\'r Chinese Zodiac is :PIG')
}else{
    console.log('No such Chinese Zodiac')
}
    