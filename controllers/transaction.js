const {
    queryTenItems,
    queryAllItemsAmount,
    insertItem,
    dropItem,
    update
} = require('../service/transaction');

const getAllItems = async (req, res) => {

    const userId = req.user._id;

    let TotalIncome = 0;
    let TotalExpense = 0;

    const historyItemsAmount = await queryAllItemsAmount(userId);

    historyItemsAmount.forEach(item => {
        if(item.type === 'Income'){
            TotalIncome += item.amount;
        }
        else{
            TotalExpense += item.amount;
        }
    });

    const tenHistoryItems = await queryTenItems(userId);

    return res.render('home', {
        username : req.user.fName,
        TotalIncome,
        TotalExpense,
        Balance: TotalIncome - TotalExpense,
        historyItems: tenHistoryItems
    });
};

const addItem = async (req, res) => {
    
    const {type, amount, date, description} = req.body;

    const newItem = {
        userId: req.user._id,
        type: req.params.type,
        category: type,
        amount: amount,
        date : date === '' ? Date.now() : date,
        description: description
    };

    await insertItem(newItem);

    return res.redirect('/');
}

const deleteItem = async (req, res) => {
    await dropItem(req.params.itemId);
    return res.redirect('/');
}

const updateItem = async (req, res) => {
    const {id, type, amount, date, description} = req.body;

    const updatedItem = {
        type: req.params.type,
        category: type,
        amount: amount,
        description: description
    };

    if(date !== ''){
        updatedItem.date = date;
    }

    await update(id, updatedItem);

    return res.redirect('/');

}

module.exports = {
    getAllItems,
    addItem,
    deleteItem,
    updateItem
};