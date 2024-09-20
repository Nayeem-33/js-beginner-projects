// ! Most used Common Variables
const transList = document.getElementById("trans-container");
const balance = document.getElementById("balance");
const numberBalance = Number(balance.innerText);

// Cash OUT
document
  .getElementById("cashOutButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentBalance = Number(balance.innerText);

    if (checkInput("agentNumber", "cashOutAmount", "cashOutPin")) {
      alert("Enter Your Card No, Amount & PIN!");
    } else if (pinVerify("cashOutPin")) {
      alert("Wrong PIN!");
    } else if (getInNum("cashOutAmount") > currentBalance) {
      alert("Insufficient Balance");
    } else {
      let agentNumber = getInNum("agentNumber");
      let cashOutAmount = getInNum("cashOutAmount");
      balance.innerText = currentBalance - cashOutAmount;

      let serialNumber = transList.getElementsByTagName("tr").length + 1;
      // Transaction
      const newTrans = document.createElement("tr");
      newTrans.classList.add("bg-white", "border-b");
      newTrans.innerHTML = `
        <td class="px-4 py-2 text-sm text-gray-700">${serialNumber}</td>
        <td class="px-4 py-2 text-sm text-gray-700">Cash Out</td>
        <td class="px-4 py-2 text-sm text-gray-700">${agentNumber}</td>
        <td class="px-4 py-2 text-sm text-red-500">-${cashOutAmount}</td>
        <td class="px-4 py-2 text-sm text-red-500"><i class="fa-solid fa-arrow-down"></i> ${
          currentBalance - cashOutAmount
        }</td>
      `;
      transList.appendChild(newTrans);

      clearInput("agentNumber", "cashOutAmount", "cashOutPin");
    }
  });

// Add Money
document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  let currentBalance = Number(balance.innerText);

  if (checkInput("cardNo", "addAmount", "addAmountPin")) {
    alert("Enter Your Card No, Amount & PIN!");
  } else if (pinVerify("addAmountPin")) {
    alert("Wrong PIN!");
  } else {
    let cardNo = getInNum("cardNo");
    let addMoney = getInNum("addAmount");
    balance.innerText = currentBalance + addMoney;

    let serialNumber = transList.getElementsByTagName("tr").length + 1;

    // Transaction
    const newTrans = document.createElement("tr");
    newTrans.classList.add("bg-white", "border-b");
    newTrans.innerHTML = `
        <td class="px-4 py-2 text-sm text-gray-700">${serialNumber}</td>
        <td class="px-4 py-2 text-sm text-gray-700">Add Money</td>
        <td class="px-4 py-2 text-sm text-gray-700">${cardNo}</td>
        <td class="px-4 py-2 text-sm text-green-500">+${addMoney}</td>
        <td class="px-4 py-2 text-sm text-green-500"><i class="fa-solid fa-arrow-up"></i> ${
          currentBalance + addMoney
        }</td>
      `;
    transList.appendChild(newTrans);

    clearInput("cardNo", "addAmount", "addAmountPin");
  }
});

//  Toggle Forms and Trans List
document.getElementById("btn-add").addEventListener("click", function () {
  formToggle("addForm");
});

document.getElementById("btn-out").addEventListener("click", function () {
  formToggle("outForm");
});

document.getElementById("btn-send").addEventListener("click", function () {
  formToggle("sendForm");
});

document.getElementById("btn-recharge").addEventListener("click", function () {
  formToggle("rechargeForm");
});

document.getElementById("btn-bill").addEventListener("click", function () {
  formToggle("billForm");
});

document.getElementById("btn-trans").addEventListener("click", function () {
  formToggle("transList");
});
