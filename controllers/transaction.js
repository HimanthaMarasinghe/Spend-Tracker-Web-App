const { queryAllItems } = require('../service/transaction');

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
        TotalIncome : TotalIncome,
        TotalExpense : TotalExpense,
        Balance : TotalIncome - TotalExpense,
        historyItems : historyItems
    });
}

module.exports = {getAllItems};