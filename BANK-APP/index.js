// MOST USED VAR
let input = document.getElementById('accountNo');
let pin = document.getElementById('pin');

// LOGIN
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    if (input.value === '' || pin.value === '') {
        alert('Enter Your Account No and PIN!')
    } else if (input.value === '1234' && pin.value === '1234') {
        window.location.href = 'home.html';
    } else {
        alert('Wrong Account No and PIN!');
    }
})


