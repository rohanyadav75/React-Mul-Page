const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require('mongoose')
const app = express();
const digitalRoutes = require("./App/routes/digitalRoutes.js");

app.use(cors());
app.use(express.json());


app.use('/api/', digitalRoutes)

// connection to database
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port 3000");
    });
})

