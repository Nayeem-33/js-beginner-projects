// MOST USED VAR
const addPin = document.getElementById('addPin');
const cardNo = document.getElementById('cardNo');
const addAmount = document.getElementById('addAmount')

const CashOutPin = document.getElementById('cashOutPin');
const agentNumber = document.getElementById('agentNumber');
const cashOutAmount = document.getElementById('cashOutAmount');

const bal = document.getElementById('balance');
const balance = Number(bal.innerText);

// LOGOUT
document.getElementById('logoutBtn').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
})

// CASH OUT
document.querySelector('#cashOutButton').addEventListener('click', function (event) {
    event.preventDefault();
        if (CashOutPin.value === '' || agentNumber.value === '' || cashOutAmount.value === '') {
            alert('Enter Your Card Number, Amount & PIN!')
        } else if(balance < Number(cashOutAmount.value)){
            alert('Insufficient Balance!')
        } else if (CashOutPin.value === '1234') {
            bal.innerText = balance - Number(cashOutAmount.value);
        } else {
            alert('Wrong PIN!');
        }

    CashOutPin.value = ''
    agentNumber.value = ''
    cashOutAmount.value = ''
})

// ADD MONEY
document.querySelector('#addMoney').addEventListener('click', function (event) {
    event.preventDefault();
    if (addPin.value === '' || cardNo.value === '') {
        alert('Enter Your Card Number & PIN!')
    } else if (addPin.value === '1234') {
        bal.innerText = balance + Number(addAmount.value);
    } else {
        alert('Wrong PIN!');
    }
    addPin.value = ''
    cardNo.value = ''
    addAmount.value = ''
})