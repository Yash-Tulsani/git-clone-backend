require('dotenv').config()
const express = require('express');
const app = express();
const db=require('./database')
const router=require('./routes');
const cors = require('cors')

const GenerateData = require("./models/Generate_Data")

// GenerateData.GenerateData()

const PORT=process.env.PORT || 5000;

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.use(router);

app.get("*", (req,res)=>{
    res.send("Error 404")
})
app.listen(5000, () => console.log('Server running on port 5000'));


