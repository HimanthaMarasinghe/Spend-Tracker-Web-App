const {
    queryTenItems,
    queryAllItemsAmount,
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

    const historyItemsAmount = await queryAllItemsAmount();

    historyItemsAmount.forEach(item => {
        if(item.type === 'Income'){
            TotalIncome += item.amount;
        }
        else{
            TotalExpense += item.amount;
        }
    });

    const tenHistoryItems = await queryTenItems();

    return res.render('home', {
        TotalIncome: TotalIncome,
        TotalExpense: TotalExpense,
        Balance: TotalIncome - TotalExpense,
        historyItems: tenHistoryItems
    });
};

const addItem = async (req, res) => {
    const {type, amount, date, description} = req.body;

    const newItem = {
        type: req.params.type,
        category: type,
        amount: amount,
        date : date === '' ? Date.now() : date,
        description: description
    };

    await insertItem(newItem);

    return res.redirect('/');
}

module.exports = {
    getAllItems,
    addItem
};