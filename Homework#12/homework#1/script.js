function inputAmount(moneyAmount){
    let parseMoneyAmound=parseFloat(moneyAmount);
    
    
    if(parseMoneyAmound <= 3000){
        let yourMoney=(moneyAmount)

        return yourMoney
    }else if(parseMoneyAmound > 3000) {
        let notEnoughMoney=("Not enough money.")
        return notEnoughMoney;
    }

    
    
       

}

let inputAmountMoney=inputAmount(2900);
console.log(inputAmountMoney);
