// ! Most used Common Variables
const transList = document.getElementById("trans-container");
const balance = document.getElementById("balance");

// Pay Bill
document
  .getElementById("payBillButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentBalance = Number(balance.innerText);

    if (checkInput("billNo", "billingAmount", "billingPin")) {
      alert("Enter Bill No, Amount & PIN!");
    } else if (pinVerify("billingPin")) {
      alert("Wrong PIN!");
    } else if (getInNum("billingAmount") > currentBalance) {
      alert("Insufficient Balance");
    } else {
      let billNo = getInNum("billNo");
      let billingAmount = getInNum("billingAmount");
      balance.innerText = currentBalance - billingAmount;

      let serialNumber = transList.getElementsByTagName("tr").length + 1;

      // Transaction
      const newTrans = document.createElement("tr");
      newTrans.classList.add("bg-white", "border-b");
      newTrans.innerHTML = `
        <td class="px-4 py-2 text-sm text-gray-700">${serialNumber}</td>
        <td class="px-4 py-2 text-sm text-gray-700">${new Date().toLocaleDateString()}</td>
        <td class="px-4 py-2 text-sm text-gray-700">Pay Bill</td>
        <td class="px-4 py-2 text-sm text-gray-700">${billNo}</td>
        <td class="px-4 py-2 text-sm text-red-500">-${billingAmount}</td>
        <td class="px-4 py-2 text-sm text-red-500"><i class="fa-solid fa-arrow-down"></i> ${
          currentBalance - billingAmount
        }</td>
      `;
      transList.appendChild(newTrans);

      clearInput("billNo", "billingAmount", "billingPin");
    }
  });

// Mobile Recharge
document
  .getElementById("mobileRechargeButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentBalance = Number(balance.innerText);

    if (checkInput("mobileNumber", "rechargeAmount", "mobileRechargePin")) {
      alert("Enter Mobile Number, Amount & PIN!");
    } else if (pinVerify("mobileRechargePin")) {
      alert("Wrong PIN!");
    } else if (getInNum("rechargeAmount") > currentBalance) {
      alert("Insufficient Balance");
    } else {
      let mobileNumber = getInNum("mobileNumber");
      let rechargeAmount = getInNum("rechargeAmount");
      balance.innerText = currentBalance - rechargeAmount;

      let serialNumber = transList.getElementsByTagName("tr").length + 1;

      // Transaction
      const newTrans = document.createElement("tr");
      newTrans.classList.add("bg-white", "border-b");
      newTrans.innerHTML = `
        <td class="px-4 py-2 text-sm text-gray-700">${serialNumber}</td>
        <td class="px-4 py-2 text-sm text-gray-700">${new Date().toLocaleDateString()}</td>
        <td class="px-4 py-2 text-sm text-gray-700">Mobile Recharge</td>
        <td class="px-4 py-2 text-sm text-gray-700">${mobileNumber}</td>
        <td class="px-4 py-2 text-sm text-red-500">-${rechargeAmount}</td>
        <td class="px-4 py-2 text-sm text-red-500"><i class="fa-solid fa-arrow-down"></i> ${
          currentBalance - rechargeAmount
        }</td>
      `;
      transList.appendChild(newTrans);

      clearInput("mobileNumber", "rechargeAmount", "mobileRechargePin");
    }
  });

// Send Money
document
  .getElementById("sendMoneyButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentBalance = Number(balance.innerText);

    if (checkInput("recipientNumber", "sendMoneyAmount", "sendMoneyPin")) {
      alert("Enter Recipient Number, Amount & PIN!");
    } else if (pinVerify("sendMoneyPin")) {
      alert("Wrong PIN!");
    } else if (getInNum("sendMoneyAmount") > currentBalance) {
      alert("Insufficient Balance");
    } else {
      let recipientNumber = getInNum("recipientNumber");
      let sendMoneyAmount = getInNum("sendMoneyAmount");
      balance.innerText = currentBalance - sendMoneyAmount;

      let serialNumber = transList.getElementsByTagName("tr").length + 1;
      // Transaction
      const newTrans = document.createElement("tr");
      newTrans.classList.add("bg-white", "border-b");
      newTrans.innerHTML = `
        <td class="px-4 py-2 text-sm text-gray-700">${serialNumber}</td>
        <td class="px-4 py-2 text-sm text-gray-700">${new Date().toLocaleDateString()}</td>
        <td class="px-4 py-2 text-sm text-gray-700">Send Money</td>
        <td class="px-4 py-2 text-sm text-gray-700">${recipientNumber}</td>
        <td class="px-4 py-2 text-sm text-red-500">-${sendMoneyAmount}</td>
        <td class="px-4 py-2 text-sm text-red-500"><i class="fa-solid fa-arrow-down"></i> ${
          currentBalance - sendMoneyAmount
        }</td>
      `;
      transList.appendChild(newTrans);

      clearInput("recipientNumber", "sendMoneyAmount", "sendMoneyPin");
    }
  });

// Cash Out
document
  .getElementById("cashOutButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentBalance = Number(balance.innerText);

    if (checkInput("agentNumber", "cashOutAmount", "cashOutPin")) {
      alert("Enter Agent Number, Amount & PIN!");
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
        <td class="px-4 py-2 text-sm text-gray-700">${new Date().toLocaleDateString()}</td>
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
        <td class="px-4 py-2 text-sm text-gray-700">${new Date().toLocaleDateString()}</td>
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
