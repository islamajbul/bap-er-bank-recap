// step 01: Add Event Handler
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 02-1: Get Deposit Amount From Input Field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // step 02-2: Convert string deposit amount to number type
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 03 Input field clear
    depositField.value = '';
})