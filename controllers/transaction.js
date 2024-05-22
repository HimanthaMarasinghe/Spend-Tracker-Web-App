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

    const TotalIncome = 321;
    const TotalExpense = 123;

    const historyItems = await queryAllItems();

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