const womenModel = require("../model/user.model");

let womenDelete = async (req, res) => {
    let womenid = req.params.id;
    let deletedwomen = await womenModel.deleteOne({_id: womenid })
    res.send({
        status: 1,
        message: "Deleted successfull",
        id: womenid,
        delRes: deletedwomen,

    })
}
module.exports = womenDelete;