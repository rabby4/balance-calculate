document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const withInitial = document.getElementById('withdraw-initial');
    const withInitialString = withInitial.innerText;
    const withdrawTotalAmount = parseFloat(withInitialString);

    const balanceInitial = document.getElementById('balance-amount');
    const balanceInitialString = balanceInitial.innerText;
    const balanceTotalAmount = parseFloat(balanceInitialString);

    withdrawInput.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please input a number');
        return;
    }

    if(withdrawAmount > balanceTotalAmount){
        alert('Your account have not much money');
        return;
    }

    const withdrawTotal = withdrawAmount + withdrawTotalAmount;
    withInitial.innerText = withdrawTotal;

    const finalBalance = balanceTotalAmount - withdrawAmount;
    balanceInitial.innerText = finalBalance;



})