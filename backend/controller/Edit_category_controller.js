
const addcategory = require('../model/category_model')
const Edit_category_controller = async (req, res) => {
    //   console.log("edit cate")
    // console.log(req.params.cateditId)
    let edit_data = await addcategory.findById({ _id: req.params.cateditId })
    // console.log(edit_data)
    try {
        if (edit_data != null) {
            res.json({ edit_data, success: true })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Edit_category_controller }
