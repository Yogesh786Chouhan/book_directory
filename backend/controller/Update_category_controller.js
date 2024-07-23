
const addcategory = require('../model/category_model')
const Update_category_controller = async (req, res) => {
    //  console.log("update category");
    // console.log(req.body)
    // const { category } = req.body;
    let result = await addcategory.findByIdAndUpdate({ _id: req.body._id }, { category: req.body.category })
    // console.log(result)
    if (result) {
        res.json({ message: "User successfully updated..", success: true });
    }

}

module.exports = { Update_category_controller }
