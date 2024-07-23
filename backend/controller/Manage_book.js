const book_biodata = require('../model/book_model')
const Manage_book = async (req, res) => {
    // console.log("manage book")
    let book_data = await book_biodata.find({})
    // console.log(book_data)  
    if (book_data.length > 0) {
        res.json({ book_result: book_data })
    }

}

module.exports = { Manage_book }
