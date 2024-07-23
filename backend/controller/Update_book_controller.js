const book_biodata = require('../model/book_model')
const fs = require('fs')

const Update_book_controller = async (req, res) => {
    console.log("update book");
    console.log(req.body);
    // console.log(req.files.book_new_image[0].filename, req.files.book_new_document[0].filename);

    // const directoryPath = path.join(__dirname);
    // console.log(directoryPath)
    //console.log(`../public/uploads/${req.body.image}`);

    fs.unlink('./public/uploads/' + req.body.book_image, (error) => {
        if (error) { console.log('error'); }
    })

    fs.unlink('./public/document/' + req.body.book_document, (error) => {
        if (error) { console.log('error'); }
    })


    const { _id, book_title, book_category, book_author, book_history, book_publish, book_price } = req.body;
    let result = await book_biodata.findByIdAndUpdate({ _id }, { book_title, book_category, book_author, book_history, book_publish, book_price, book_image: req.files.book_new_image[0].filename, book_document: req.files.book_new_document[0].filename });
    // let result = await book_biodata.findByIdAndUpdate({ _id }, { book_title, book_category, book_author, book_history, book_publish, book_price});
   console.log(result)
    if (result) {
        res.json({ message: "book successfully updated..", success: true });
    }


}

module.exports = { Update_book_controller }
