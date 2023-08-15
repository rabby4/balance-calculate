document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userEmailInfo = userEmail.value;

    const userPassword = document.getElementById('user-pass');
    const userPassInfo = userPassword.value;

    if(userEmailInfo === 'admin@gmail.com' && userPassInfo === 'admin123'){
        window.location.href = 'deposit.html'
    }else{
        alert('Churi korar cheshta korbe na!')
    }
})