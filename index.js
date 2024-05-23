const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const transaction = require('./routes/transaction');
const add = require('./routes/addNewItem');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/', transaction);
app.use('/add', add);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));