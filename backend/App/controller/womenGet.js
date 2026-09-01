const womenModel = require("../model/user.model")

const womenGet = async (req, res) => {
        let womenid = req.params.id;

    let womenlist = await womenModel.findOne({_id: womenid });
    res.send({ status: 1, message: "Data find successfull", data: womenlist })
}
module.exports = womenGet