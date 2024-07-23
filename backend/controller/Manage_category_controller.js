const addcategory = require('../model/category_model')


const Manage_category_controller = async (req, res) => {
    // console.log("user name")
    let category_data = await addcategory.find({})
    // console.log(category_data)  
    if (category_data.length > 0) {
        // console.log(req.body.userauthdata)
        res.json({ category_result: category_data, success: true, userauthdata: req.body.userauthdata })
        // res.json({ category_result: category_data })
    }




}

module.exports = { Manage_category_controller }

