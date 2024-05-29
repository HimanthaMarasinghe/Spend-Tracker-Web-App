function leftForm() {
    document.getElementById('rightForm').classList.remove('active');
    document.getElementById('leftForm').classList.add('active');
    document.getElementById('add').style.boxShadow = "0 0 30px #9df79d";
}

function rightForm() {
    document.getElementById('leftForm').classList.remove('active');
    document.getElementById('rightForm').classList.add('active');
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
    document.getElementById("add").classList.toggle("hide");
    document.getElementById("backdrop-dark").classList.toggle("hide");
}

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("hide");
    document.getElementById("backdrop-light").classList.toggle("hide");
}

async function logout() {
    try {
        await fetch('/auth/logout', {
            method: 'POST'
        });
    } catch (error) {
        console.error('Error:', error);
    }
}