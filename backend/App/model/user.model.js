let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
})
let userModel = mongoose.model('user', userSchema)
module.exports = userModel