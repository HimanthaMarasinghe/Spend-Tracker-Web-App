const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Income', 'Expense'],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;