// Global Var
let selectFilter = document.getElementById("filter-category").value

// id to value & id to number
const idValue = (id) => document.getElementById(id).value
const idAmount = (id) => Number(document.getElementById(id).value)

const balanceDisplay = document.getElementById('total-amount')

// Calculate Total Expence Reduce
const calculateExpences = (arrayOfExpence) => balanceDisplay.innerHTML = arrayOfExpence.reduce((sum, object) => sum + object.amount, 0).toFixed(2)

// filter the object
let filterArray = (expenceArray, cata) => newArray = expenceArray.filter((object) => object.category === cata);


// Fatch Function
function fatchList(array) {
    expenseList.innerHTML = "";

    let iconClass;
    if (category === "food") {
        iconClass = "fa-solid fa-utensils";
    } else if (category === "shopping") {
        iconClass = "fa-solid fa-cart-shopping";
    } else if (category === "grocery") {
        iconClass = "fa-solid fa-basket-shopping";
    } else if (category === "travel") {
        iconClass = "fa-solid fa-route";
    } else if (category === "entertainment") {
        iconClass = "fa-solid fa-film";
    } else {
        iconClass = "fa-solid fa-cash-register";
    }

    // Create Element
    array.forEach(element => {
        let newLi = document.createElement('li')
        newLi.classList.add("flex", "gap-5", "py-2", "px-4", "bg-white", "rounded-md", "shadow", "items-center");
        newLi.setAttribute('id', `expense-${element.id}`);
        newLi.innerHTML = `
        <div class="w-12 h-12 bg-blue-600 text-white p-4 rounded-2xl flex justify-center items-center">
            <i class="${iconClass} text-2xl"></i>
        </div>
        <div class="w-full flex justify-between items-center">
        <div>
            <p><span class="font-semibold">Amount:</span> ৳ ${element.amount}</p>
            <p><span class="font-semibold">Description:</span> ${element.description}</p>
            <p><span class="font-semibold">Date:</span> ${new Date().toLocaleDateString()}</p>
        </div>
        <div>
        <button id="delete-${element.id}" class="text-red-500 border border-red-500 text-white px-2 py-1 rounded-md"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        </div>
        `
        expenseList.appendChild(newLi);
    });

}
