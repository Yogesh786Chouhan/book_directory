const author_biodata = require('../model/author_model')
const Manage_author = async (req, res) => {
    // console.log("manage author")
    let author_data = await author_biodata.find({})
    // console.log(category_data)  
    if (author_data.length > 0) {
        res.json({ author_result: author_data })
    }

}

module.exports = { Manage_author }
