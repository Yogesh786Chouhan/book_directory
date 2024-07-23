
const addcategory = require('../model/category_model')
const Delete_category_controller = async (req, res) => {
    //   console.log("Hello delete")
    //   console.log(req.params.catdelId)
    let catDelData = await addcategory.findByIdAndDelete({ _id: req.params.catdelId })
    // console.log(catDelData)
    if (catDelData) {
        res.json({ message: "Category deleted successfully", success: true })
    }

}

module.exports = { Delete_category_controller }

