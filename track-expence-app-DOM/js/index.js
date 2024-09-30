const expenseList = document.getElementById("expense-list");

let expenceObjArr = [];

let filteredArray

// Add input as aobject in array and account balance
document.getElementById("submit-expence").addEventListener("click", function (event) {
    event.preventDefault();
    // Creating New Object: Selecting Value
    let id = Date.now()
    let description = idValue("description")
    let amount = idAmount("amount")
    let category = idValue("category")
    // Creating New Object: Creating & Push
    const newObject = { id, description, amount, category }
    expenceObjArr.push(newObject)

    // Clear Form
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value = 'other';

    calculateExpences(expenceObjArr)

    fatchList(expenceObjArr)
})

// filter Array - Filter By Category
document.getElementById("filter-category").addEventListener("change", function (event) {
    event.preventDefault()
    let filterValue = idValue("filter-category")
    // sss
    console.log(filterValue)

    if (filterValue === "food") {
        filteredArray = filterArray(expenceObjArr, "food")
        fatchList(filteredArray)
    } else if (filterValue === "shopping") {
        filteredArray = filterArray(expenceObjArr, "shopping")
        fatchList(filteredArray)
    } else if (filterValue === "grocery") {
        filteredArray = filterArray(expenceObjArr, "grocery")
        fatchList(filteredArray)
    } else if (filterValue === "travel") {
        filteredArray = filterArray(expenceObjArr, "travel")
        fatchList(filteredArray)
    } else if (filterValue === "entertainment") {
        filteredArray = filterArray(expenceObjArr, "entertainment")
        fatchList(filteredArray)
    } else if (filterValue === "other") {
        filteredArray = filterArray(expenceObjArr, "other")
        fatchList(filteredArray)
    } else{
        fatchList(expenceObjArr)
    }


})

// fatch object - 