require('dotenv').config();
const express = require('express');
const app = express();
const db=require('./database')
const router=require('./routes')

const PORT=process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());
app.use(router);


app.listen(5000, () => console.log('Server running on port 5000'));


