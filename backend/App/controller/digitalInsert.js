const userModel = require("../model/user.model");

const digitalInsert = (req, res) => {
    let { name, email, phone } = req.body;

    console.log(name, email, phone);

    let user = new userModel({
        name: name,
        email: email,
        phone: phone,
    })
    user.save()
        .then(() => {
            res.send({
                status: 1,
                message: "data saved successfully"
            });
        })
        .catch((err) => {
            res.send({
                status: 0,
                message: "data not saved",
                error: err.message
            });
        });
}
module.exports = digitalInsert
