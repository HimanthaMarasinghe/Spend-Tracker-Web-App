const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('User', userSchema);