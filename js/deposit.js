// step 01: Add Event Handler
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 02-1: Get Deposit Amount From Input Field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // step 02-2: Convert string deposit amount to number type
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 03 Input field clear
    depositField.value = '';

    // Step 04: Get the previous total deposit balance
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 05 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    
    // Step 06 Get Current Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // Step 07: Calculate the new balance set it to the balance total element
    const newBalanceTotal = previousBalanceTotalAmount + newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})