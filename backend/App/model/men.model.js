const mongoose = require('mongoose')
const menSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String
})
const men = mongoose.model("men", menSchema)
module.exports = men