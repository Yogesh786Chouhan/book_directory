const author_biodata = require('../model/author_model')
const Add_author_controller = async (req, res) => {
    // console.log("author")
    // console.log(req.body)
    // console.log(req.files.auth_img[0].filename)
    
    const { author_name, popular_books, history } = req.body;

    let Author_result = await author_biodata({ author_name, popular_books, history, author_image: req.files.auth_img[0].filename });
    // console.log(Athuor_result)
    // console.log(req.file)
    // console.log(req.file.filename)

    let Author_Information = await Author_result.save();
    // console.log(Author_Information)

}

module.exports = { Add_author_controller }
