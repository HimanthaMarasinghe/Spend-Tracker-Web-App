const Item = require('../models/transaction');

const queryAllItems = () => {

    return Item.find().then(result => {
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