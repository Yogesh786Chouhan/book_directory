const book_biodata = require('../model/book_model')

const show_auth_book = async (req, res) => {
    // console.log(req.params.auth_book)
    try {
        let result = await book_biodata.find({ book_author: req.params.auth_book })
        // console.log(result);
        if (result != null) {
            res.json({ book : result, success:true });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { show_auth_book }
