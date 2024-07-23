
const book_biodata = require('../model/book_model')
const Delete_book_controller = async (req, res) => {
    // console.log(req.params.delbook);
    let delRes = await book_biodata.findByIdAndDelete({ _id: req.params.delbook });
    if (delRes) {
        res.json({ message: "Book Deleted Successfully", success: true });
    }
}
module.exports = { Delete_book_controller }