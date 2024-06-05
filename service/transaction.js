const Item = require('../models/transaction');

const queryAllItemsAmount = (userId) => {
    return Item.find({userId}, { type : 1, amount : 1}).then(result => {
        return result;
    });
};

const queryTenItems = (userId) => {

    return Item.find({userId}).sort({ date: -1 }).limit(10).then(result => {
        return result;
    });
};

const insertItem = (newItem) => {
    const item = new Item(newItem);
    return item.save();
}

const dropItem = (itemId) => {
    return Item.findByIdAndDelete(itemId);
}

const update = (itemId, updateItem) => {
    return Item.findByIdAndUpdate(itemId, updateItem);
}

module.exports = {
    queryTenItems,
    queryAllItemsAmount,
    insertItem,
    dropItem,
    update
};