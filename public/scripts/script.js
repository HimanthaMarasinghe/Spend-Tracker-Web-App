function addIncome() {
    document.getElementById('addExpense').classList.remove('active');
    document.getElementById('addIncome').classList.add('active');
    document.getElementById('add').style.boxShadow = "0 0 30px #9df79d";
}

function addExpense() {
    document.getElementById('addIncome').classList.remove('active');
    document.getElementById('addExpense').classList.add('active');
    document.getElementById('add').style.boxShadow = "0 0 30px #f79d9d";
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

function toggleForm() {
    var form = document.getElementById("add");
    var backdrop = document.getElementById("backdrop");
    form.classList.toggle("hide");
    backdrop.classList.toggle("hide");
}