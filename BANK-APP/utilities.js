// ! Most used Common Variables

// TODO: Toggle Function
function formToggle(id) {
  document.getElementById("addForm").classList.add("hidden");
  document.getElementById("outForm").classList.add("hidden");
  document.getElementById("sendForm").classList.add("hidden");
  document.getElementById("rechargeForm").classList.add("hidden");
  document.getElementById("billForm").classList.add("hidden");
  document.getElementById("transList").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

// TODO: Toggle Effect
function toggleFocus(id) {
  // bg-blue-600 text-white hover:bg-blue-700
  document.getElementById("btn-add").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-add").classList.remove("text-blue-600")
  document.getElementById("btn-out").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-out").classList.remove("text-blue-600")
  document.getElementById("btn-send").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-send").classList.remove("text-blue-600")
  document.getElementById("btn-recharge").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-recharge").classList.remove("text-blue-600")
  document.getElementById("btn-bill").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-bill").classList.remove("text-blue-600")
  document.getElementById("btn-trans").classList.add("bg-blue-600", "text-white", "hover:bg-blue-700")
  document.getElementById("btn-trans").classList.remove("text-blue-600")

  document.getElementById(id).classList.add("bg-white", "text-blue-600")
  document.getElementById(id).classList.remove("bg-blue-600", "text-white", "hover:bg-blue-700")
}

// TODO: Input Value To Number
function getInNum(id) {
  let i = document.getElementById(id).value;
  return Number(i);
}

// TODO: Input Value
function getValue(id) {
  let i = document.getElementById(id).value;
  return i;
}

// TODO: Check Input Fill
function checkInput(id1, id2, id3) {
    if (getValue(id1) === "" || getValue(id2) === "" || getValue(id3) === "") {
      return true;
    } else {
      return false;
    }
  }

// TODO: Clear Input Fill
function clearInput(id1, id2, id3) {
    document.getElementById(id1).value = '';
    document.getElementById(id2).value = '';
    document.getElementById(id3).value = '';
  }
  
// TODO: Pin Verify
function pinVerify(id) {
  let pin = document.getElementById(id).value;
  if (pin !== "1234") {
    return true;
  } else {
    return false;
  }
}
