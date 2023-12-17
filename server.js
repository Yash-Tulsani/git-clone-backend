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

app.get("*", (req,res)=>{
    res.send("Error 404")
})
app.listen(5000, () => console.log('Server running on port 5000'));

//routes import
const user = require("./routes/userRoute");
const auth = require("./routes/authRoute");

app.use('/api/user', user);
app.use('/api/auth', auth);

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



