document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountString = depositInput.value;
    const depositAmount = parseFloat(depositAmountString);


    const depositInitial = document.getElementById('deposit-initial');
    const depositInitialString = depositInitial.innerText;
    const depositTotalAmount = parseFloat(depositInitialString);


    const balanceInitial = document.getElementById('balance-amount');
    const balanceInitialString = balanceInitial.innerText;
    const balanceTotalAmount = parseFloat(balanceInitialString)
    
    depositInput.value = '';

    if(isNaN(depositAmount)){
        alert('Please input a number');
        return;
    }

    if(depositAmount < 0){
        alert('Please input positive value amount');
        return;
    }

    const depositTotal = depositAmount + depositTotalAmount;
    depositInitial.innerText = depositTotal

    const balanceTotal = depositAmount + balanceTotalAmount;
    balanceInitial.innerText = balanceTotal;
})