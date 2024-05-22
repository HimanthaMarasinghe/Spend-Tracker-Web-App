const Item = require('../models/transaction');

const queryAllItems = () => {

    return Item.find().sort({ date: -1 }).limit(10).then(result => {
        return result;
    });
};

const insertItem = (newItem) => {
    const item = new Item(newItem);
    return item.save();
}

module.exports = {
    queryAllItems,
    insertItem
};