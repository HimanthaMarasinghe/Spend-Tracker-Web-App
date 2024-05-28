require('dotenv').config();
require('./config/db');
const express = require('express');
const transaction = require('./routes/transaction');
const auth = require('./routes/auth');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./config/passport');
const { ensureAuthenticated } = require('./middleware/auth');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: 'mongodb://localhost:27017/spendingtrackerDB',
        ttl: 30 * 60 
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/', ensureAuthenticated, transaction);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));