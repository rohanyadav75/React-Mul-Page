const mongoose = require('mongoose')

const ecommerceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

})
let ecommerceModel = mongoose.model("userproduct", ecommerceSchema);
module.exports = ecommerceModel;