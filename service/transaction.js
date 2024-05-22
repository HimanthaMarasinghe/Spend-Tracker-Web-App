const Item = require('../models/transaction');

const queryAllItems = () => {

    return Item.find().then(result => {
        return result;
    });
};

module.exports = {
    queryAllItems
};