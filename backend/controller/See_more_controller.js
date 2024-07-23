const book_biodata = require('../model/book_model')

const See_more_controller = async (req, res) => {
    try {
        let see_more_result = await book_biodata.findById({ _id: req.params.seemoreid })
        // console.log(see_more_result);
        if (see_more_result != null) {
            res.json({ see_more_result });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { See_more_controller }
