const express = require("express");
const digitalInsert = require("../controller/digitalInsert");
// const womenGet = require("../controller/womenGet");
// const womenDelete = require("../controller/womendelete");
// const womenUpdate = require("../controller/womenUpdate");
const digitalRoutes = express.Router();



// womenRoutes.get('/women/:id', womenGet)
digitalRoutes.post('/user', digitalInsert)
// womenRoutes.delete('/women/:id', womenDelete)
// womenRoutes.put('/women/:id', womenUpdate)
module.exports = digitalRoutes
