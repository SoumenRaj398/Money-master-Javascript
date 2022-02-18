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


// saving part

document.getElementById('save-btn').addEventListener('click', function () {
    const savingPercentage = document.getElementById('save-input-btn');
    const savingPercentageText = savingPercentage.value;
    const savingPercentageAmount = parseFloat(savingPercentageText / 100);


    // income
    const income = document.getElementById('income');
    const incomeText = income.value;
    const incomeAmount = parseFloat(incomeText);
    // save balance
    const savingAmount = incomeAmount * savingPercentageAmount;
    const balanceSave = document.getElementById('saving-amount');
    const balanceSaveText = balanceSave.innerText;
    balanceSave.innerText = savingAmount;



    // remaining balance
    const food = document.getElementById('food');
    const foodText = food.value;
    const foodCost = parseFloat(foodText);
    // rent
    const rent = document.getElementById('rent');
    const rentText = rent.value;
    const rentCost = parseFloat(rentText);
    // cloth
    const cloth = document.getElementById('cloth');
    const clothText = cloth.value;
    const clothCost = parseFloat(clothText);
    // totalExpense
    const expense = foodCost + rentCost + clothCost;
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    totalExpense.innerText = expense;

    // income and balance
    const incomeValue = document.getElementById('income');
    const incomeValueText = incomeValue.value;
    const incomeValueAmount = parseFloat(incomeText);
    const balance = incomeAmount - expense;
    const balanceShow = document.getElementById('balance-show');
    const balanceText = balanceShow.innerText;
    balanceShow.innerText = balance;
    // balance remain
    const balanceRemaining = balance - savingAmount;
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    remainingBalance.innerText = balanceRemaining;

})
