// Select DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');
const filterCategory = document.getElementById('filter-category');

// Array to hold expenses
let expenses = [];

// !Handle form submission
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  // Create a new expense object with a unique ID
  const expense = { id: Date.now(), description, amount, category };

  // Add the new expense to the expenses array
  expenses.push(expense);

  // Update the UI
  renderExpenses(expenses);
  calculateTotal();
  clearForm();
});
// !Handle form submission ends


// !Function to render expenses
function renderExpenses(expenseArray) {
  // Clear the current list
  expenseList.innerHTML = '';

  // Use forEach to iterate over expenses and display them
  expenseArray.forEach(expense => {
    const li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'bg-gray-100', 'p-2', 'rounded-md');
    li.setAttribute('id', `expense-${expense.id}`);

    li.innerHTML = `
      <span>${expense.description} - $${expense.amount} [${expense.category}]</span>
      <button id="delete-${expense.id}" class="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
    `;

    // Add delete functionality to the button
    document.getElementById(`delete-${expense.id}`)?.addEventListener('click', () => {
      deleteExpense(expense.id);
    });

    // Append the list item to the DOM
    expenseList.appendChild(li);
  });
}
// !Function to render expenses

// !Function to filter expenses by category
filterCategory.addEventListener('change', function() {
  const category = this.value;

  if (category === 'all') {
    renderExpenses(expenses);  // Show all expenses
  } else {
    const filteredExpenses = expenses.filter(expense => expense.category === category);
    renderExpenses(filteredExpenses);
  }
});
// !Function to filter expenses by category

// *Function to calculate total expenses using reduce
function calculateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalAmount.textContent = total.toFixed(2);  // Update the total in DOM
}

// *Function to clear the form fields after submission
function clearForm() {
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('category').value = 'food';
}


// *Function to delete an expense
function deleteExpense(expenseId) {
  expenses = expenses.filter(expense => expense.id !== expenseId);  // Remove expense by id
  renderExpenses(expenses);   // Re-render the list
  calculateTotal();           // Recalculate the total
}
