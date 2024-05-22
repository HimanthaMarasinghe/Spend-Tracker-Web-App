const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
}


app.get('/', (req, res) => {

    const TotalIncome = 321;
    const TotalExpense = 123;

    const historyItems = [{
        type : 'Income - Salary',
        class : 'incomeItem',
        Date : new Date().toLocaleDateString("en-us", options),
        amount : 200,
        description : 'This is a salary'
    },
    {
        type : 'Expese - Grosery',
        class : 'expenseItem',
        Date : new Date().toLocaleDateString("en-us", options),
        amount : 500,
        description : 'This is a grosery'
    },
    {
        type : 'Income - Business',
        class : 'incomeItem',
        Date : new Date().toLocaleDateString("en-us", options),
        amount : 1500,
        description : 'This is a business'
    }]

    res.render('home', {
        TotalIncome : TotalIncome,
        TotalExpense : TotalExpense,
        Balance : TotalIncome - TotalExpense,
        historyItems : historyItems
    });
})

app.listen(3000, () => console.log('Server started at http://localhost:3000'));