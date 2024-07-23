
const author_biodata = require("../model/author_model")
const Delete_author_controller = async (req, res) => {
    // console.log(req.params.delId);
    let delRes = await author_biodata.findByIdAndDelete({ _id: req.params.delId });
    if (delRes) {
        res.json({ message: "Author Deleted Successfully", success: true });
    }
}
module.exports = { Delete_author_controller }