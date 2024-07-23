const book_biodata = require('../model/book_model')
const Edit_book_controller = async (req, res) => {
    // console.log("Edit book")
    try {
        let edit_book_data = await book_biodata.findById({ _id: req.params.editbookid });
        console.log(edit_book_data);
        if (edit_book_data != null) {
            res.json({ edit_book_data, success: true });
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = { Edit_book_controller }
