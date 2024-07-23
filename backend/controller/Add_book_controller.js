const book_biodata = require('../model/book_model')
const Add_book_controller = async (req, res) => {
    // console.log("book");
    // console.log(req.body);
    // console.log(req.files.book_img[0].filename, req.files.book_doc[0].filename)
    const { book_title, book_name, book_category, book_author, book_history, book_publish, book_price } = req.body;

    // let book_result = await book_biodata({ book_title, book_name, book_category, book_author, book_history, book_publish, book_price });
    // let book_result = await book_biodata({ book_title, book_name, book_category, book_author, book_history, book_publish, book_price, book_image: req.files.filename, book_doc: req.files.filename, });
    let book_result = await book_biodata({ book_title, book_name, book_category, book_author, book_history, book_publish, book_image: req.files.book_img[0].filename, book_document: req.files.book_doc[0].filename, book_price });
    // console.log(book_result)
    // console.log(req.file)
    // console.log(req.file.filename)

    let book_Information = await book_result.save();
    // console.log(book_Information)

}

module.exports = { Add_book_controller }
