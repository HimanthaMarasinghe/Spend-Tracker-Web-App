const {
    queryAllItems,
    insertItem
} = require('../service/transaction');

const getAllItems = async (req, res) => {

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    let TotalIncome = 0;
    let TotalExpense = 0;

    const historyItems = await queryAllItems();

    historyItems.forEach(item => {
        if(item.type === 'Income'){
            TotalIncome += item.amount;
        }
        else{
            TotalExpense += item.amount;
        }
    });

    return res.render('home', {
        TotalIncome: TotalIncome,
        TotalExpense: TotalExpense,
        Balance: TotalIncome - TotalExpense,
        historyItems: historyItems
    });
};

const addIncomeItem = async (req, res) => {
    const {type, amount, description} = req.body;

    const newItem = {
        type: 'Income',
        category: type,
        amount: amount,
        description: description
    };

    await insertItem(newItem);

    return res.redirect('/');
}

const addExpenseItem = async (req, res) => {
    const { type, amount, description} = req.body;

    const newItem = {
        type: 'Expense',
        category: type,
        amount: amount,
        description: description
    };

    await insertItem(newItem);

    return res.redirect('/');
}

module.exports = {
    getAllItems,
    addIncomeItem,
    addExpenseItem
};