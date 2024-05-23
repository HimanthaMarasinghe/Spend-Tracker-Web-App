const Item = require('../models/transaction');

const queryAllItemsAmount = () => {
    return Item.find({}, { type : 1, amount : 1}).then(result => {
        return result;
    });
};

const queryTenItems = () => {

    return Item.find().sort({ date: -1 }).limit(10).then(result => {
        return result;
    });
};

const insertItem = (newItem) => {
    const item = new Item(newItem);
    return item.save();
}

module.exports = {
    queryTenItems,
    queryAllItemsAmount,
    insertItem
};