const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const mongoose = require('mongoose')
const app = express();
const digitalRoutes = require("./App/routes/digitalRoutes.js");

app.use(cors());
app.use(express.json());


app.use('/api/', digitalRoutes)

// connection to database
mongoose.connect(process.env.DBURL)
    .then(() => {
        console.log("Connected to database");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

