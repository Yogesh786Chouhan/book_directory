const author_biodata = require('../model/author_model')
const fs = require('fs')

const Update_author_controller = async (req, res) => {
    console.log("update author");
    console.log(req.body);
    // const directoryPath = path.join(__dirname);
    // console.log(directoryPath)
    //console.log(`../public/uploads/${req.body.image}`);

    // fs.unlink('./public/uploads/' + req.body.author_image, (error) => {
    fs.unlink('./public/uploads/' + req.body.author_image, (error) => {
    // fs.unlink('./public/uploads/' + req.body.auth_img, (error) => {
        if (error) { console.log('error'); }
    })
    const { _id, author_name, popular_books, history } = req.body;
    let result = await author_biodata.findByIdAndUpdate({ _id }, { author_name, popular_books, history, author_image:req.files.logo[0].filename });
    if (result) {
        res.json({ message: "Author successfully updated..", success: true });
    }


}

module.exports = { Update_author_controller }
