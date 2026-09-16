const womenModel = require("../model/user.model");

const womenUpdate = async (req, res) => {
    let womenid = req.params.id;
    let { name, email, phone } = req.body;
    const updateWomen = {
        name: name,
        email: email,
        phone: phone,
    };
    const updateRes = await womenModel.updateOne({ _id: womenid }, updateWomen)
    res.send({
        status: 1,
        message: "Updated successfull",
        updateRes
    })
}
module.exports = womenUpdate