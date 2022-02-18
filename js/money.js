function calculation(expensesList) {
    // food
    const expenseParameter = document.getElementById(expensesList);
    const expenseParameterText = expenseParameter.value;
    const paramenterCost = parseFloat(expenseParameterText);
    return paramenterCost;
}

document.getElementById('button-calculate').addEventListener('click', function () {
    // food
    const foodCost = calculation('food');
    // rent
    const rentCost = calculation('rent');
    // cloth
    const clothCost = calculation('cloth');

    if (foodCost < 0 || rentCost < 0 || clothCost < 0) {
        const error = document.getElementById('error-signal');
        error.style.display = 'block';
    }

    // totalExpense
    const expense = foodCost + rentCost + clothCost;
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    totalExpense.innerText = expense;

    // income and balance
    const income = document.getElementById('income');
    const incomeText = income.value;
    const incomeAmount = parseFloat(incomeText);
    const balance = incomeAmount - expense;
    const balanceShow = document.getElementById('balance-show');
    const balanceText = balanceShow.innerText;
    balanceShow.innerText = balance;
})
