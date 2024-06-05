let itemId;

function openUpdateForm(Id, amount, category, date, description, type) {

    if(type == "Expense") {
        rightUpdateForm();
    } else {
        leftUpdateForm();
    }

    itemId = Id;

    const dateObj = new Date(date);
    formatedDate = dateObj.toISOString().split('T')[0];

    document.getElementById("update").classList.remove("hide");
    document.getElementById("backdrop-dark").classList.remove("hide");

    document.getElementById("Income-UpdAmount").value = amount;
    document.getElementById("Income-UpdTypes").value = category;
    document.querySelector("#leftForm-Upd input[name='date']").value = formatedDate;
    document.querySelector("#leftForm-Upd input[name='description']").value = description;
    
    document.getElementById("Expense-UpdAmount").value = amount;
    document.getElementById("Expense-UpdTypes").value = category;
    document.querySelector("#rightForm-Upd input[name='date']").value = formatedDate;
    document.querySelector("#rightForm-Upd input[name='description']").value = description;

}

document.getElementById("leftForm-Upd").addEventListener('submit', function() {
    let newInput = document.createElement("input");
    newInput.type = "hidden";
    newInput.name = "id";
    newInput.value = itemId;
    document.getElementById("leftForm-Upd").appendChild(newInput);
});

document.getElementById("rightForm-Upd").addEventListener('submit', function() {
    let newInput = document.createElement("input");
    newInput.type = "hidden";
    newInput.name = "id";
    newInput.value = itemId;
    document.getElementById("rightForm-Upd").appendChild(newInput);
});

document.getElementById("Income-UpdTypes").addEventListener('change', function() {checkForNewItem("newIncome-UpdType", this)});
document.getElementById("Expense-UpdTypes").addEventListener('change', function() {checkForNewItem("newExpense-UpdType", this)});

function passItemId(form) {
    let newInput = document.createElement("input");
    newInput.type = "hidden";
    newInput.name = "id";
    newInput.value = itemId;
    form.appendChild(newInput);
}

document.getElementById("leftForm-Upd").addEventListener('submit', function() {
    handleSubmit("Income-Upd");
    passItemId(this);
});

document.getElementById("rightForm-Upd").addEventListener('submit', function() {
    handleSubmit("Expense-Upd");
    passItemId(this);
});