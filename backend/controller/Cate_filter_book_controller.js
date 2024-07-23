const book_biodata = require('../model/book_model')

const Cate_filter_book_controller = async (req, res) => {
    // console.log("hello")
    // console.log(req.params.cate_fil_book)
    try {
        let result = await book_biodata.find({ book_category: req.params.cate_fil_book })
        // console.log(result);
        if (result != null) {
            res.json({ CateBook: result, success: true });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Cate_filter_book_controller }
