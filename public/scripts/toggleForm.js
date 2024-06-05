function leftForm() {
    document.getElementById('rightForm').classList.remove('active');
    document.getElementById('leftForm').classList.add('active');
    if (add) {document.getElementById('add').style.boxShadow = "0 0 30px #9df79d";}
}

function rightForm() {
    document.getElementById('leftForm').classList.remove('active');
    document.getElementById('rightForm').classList.add('active');
    if (add) {document.getElementById('add').style.boxShadow = "0 0 30px #f79d9d";}
}