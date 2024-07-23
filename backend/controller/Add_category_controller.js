const addcategory = require('../model/category_model')

const Add_category_controller = async (req, res) => {
    // console.log(req.body)
    // console.log("add")
    const { category, category_icon } = req.body;
    let result = await addcategory({ category, category_icon });
    // console.log(result);
    let data = await result.save();
    // console.log(data);

}

module.exports = { Add_category_controller }
