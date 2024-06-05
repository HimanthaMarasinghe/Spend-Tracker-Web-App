function leftUpdateForm() {
    document.getElementById('rightForm-Upd').classList.remove('active');
    document.getElementById('leftForm-Upd').classList.add('active');
    document.getElementById('update').style.boxShadow = "0 0 30px #9df79d";
}

function rightUpdateForm() {    
    document.getElementById('leftForm-Upd').classList.remove('active');
    document.getElementById('rightForm-Upd').classList.add('active');
    document.getElementById('update').style.boxShadow = "0 0 30px #f79d9d";
}



function checkForNewItem(newType, type) {
    const newInput = document.getElementById(newType);

    if (type.value === "new") {
        newInput.style.display = "inline";
        type.classList.add("narrow");
    } else {
        newInput.style.display = "none";
        type.classList.remove("narrow");
    }
};



document.getElementById("IncomeTypes").addEventListener('change', function() {checkForNewItem("newIncomeType", this)});
document.getElementById("ExpenseTypes").addEventListener('change', function() {checkForNewItem("newExpenseType", this)});

function handleSubmit(type) {
    const select = document.getElementById(`${type}Types`);
    const newExpenseInput = document.getElementById(`new${type}Type`);
    
    if (select.value == "new")
        select.name = "";
    else
        newExpenseInput.name = "";
}

document.getElementById("leftForm").addEventListener('submit', function() {handleSubmit("Income")});
document.getElementById("rightForm").addEventListener('submit', function() {handleSubmit("Expense")});

function openAddForm() {
    document.getElementById("add").classList.remove("hide");
    document.getElementById("backdrop-dark").classList.remove("hide");
}

function closeForm() {
    document.getElementById("add").classList.add("hide");
    document.getElementById("update").classList.add("hide");
    document.getElementById("backdrop-dark").classList.add("hide");
}

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("hide");
    document.getElementById("backdrop-light").classList.toggle("hide");
}

async function logout() {
    try {
        await fetch('/auth/logout', {method: 'POST'});
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteItem(itemID) {
    try {
        await fetch(`/delete/${itemID}`, {method: 'DELETE'});
        location.reload();
    } catch (error) {
        console.error('Error:', error);
    }
}