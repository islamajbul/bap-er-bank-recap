// Step 01
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    // Step 02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Step 03
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please input a valid number');
        return
    }
    
    // Step 04
    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    
    // Step 05
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
/***********Validation*********/
    if(newWithdrawAmount > previousBalanceTotalAmount){
        alert('Insufficient Balance');
        return;
    }
    
    // Step 06
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // Step 07
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
    

})