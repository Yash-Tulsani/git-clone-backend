require('dotenv').config()
const express = require('express');
const app = express();
const db=require('./database')
const cors = require('cors')

const GenerateData = require("./models/Generate_Data")

// GenerateData.GenerateData()

const PORT=process.env.PORT || 5000;

app.use(cors())
app.use(express.static('public'));
app.use(express.json());


app.listen(5000, () => console.log('Server running on port 5000'));

//routes import
const user = require("./routes/userRoute");
const auth = require("./routes/authRoute");
const chat = require("./routes/chatRoute");
const service = require("./routes/serviceRoute");
const charts = require("./routes/chartRoute");
const wdc = require("./routes/wdcRoute");
const fpo = require("./routes/fpoRoute");

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/chat', chat);
app.use('/api/service', service);
app.use('/api/charts', charts);
app.use('/api/wdc', wdc);
app.use('/api/fpo', fpo);

app.use((err,req,res,next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        error : message,
        statusCode: statusCode,
    })
})

app.get("*", (req,res)=>{
    res.status(404).json({
        message: "Route not found",
        status: 404
    })
})

module.exports = app;