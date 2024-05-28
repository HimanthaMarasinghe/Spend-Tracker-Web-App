require('./config/db');
const express = require('express');
const transaction = require('./routes/transaction');
const add = require('./routes/addNewItem');
const auth = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/', transaction);
app.use('/add', add);
app.use('/auth', auth);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));