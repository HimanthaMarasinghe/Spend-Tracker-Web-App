function addIncome() {
    document.getElementById('addExpense').classList.remove('active');
    document.getElementById('addIncome').classList.add('active');
}

function addExpense() {
    document.getElementById('addIncome').classList.remove('active');
    document.getElementById('addExpense').classList.add('active');
}

function checkForNewIncomeOption() {
    var select = document.getElementById("incomeTypes");
    var newIncomeInput = document.getElementById("newIncomeType");

    if (select.value === "new") {
        newIncomeInput.style.display = "inline";
        select.classList.add("narrow")
    } else {
        newIncomeInput.style.display = "none";
        select.classList.remove("narrow")
    }
}

function handleIncomeSubmit() {
    var select = document.getElementById("incomeTypes");
    var newIncomeInput = document.getElementById("newIncomeType");

    if (select.value == "new") 
        select.name = "";
    else
        newIncomeInput.name = "";
}

function checkForNewExpenseOption() {
    var select = document.getElementById("expenseTypes");
    var newExpenseInput = document.getElementById("newExpenseType");

    if (select.value === "new") {
        newExpenseInput.style.display = "inline";
        select.classList.add("narrow");
    } else {
        newExpenseInput.style.display = "none";
        select.classList.remove("narrow");
    }
}

function handleExpenseSubmit() {
    var select = document.getElementById("expenseTypes");
    var newExpenseInput = document.getElementById("newExpenseType");

    if (select.value == "new") 
        select.name = "";
    else
        newExpenseInput.name = "";
}