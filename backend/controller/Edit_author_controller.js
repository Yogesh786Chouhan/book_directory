const author_biodata = require('../model/author_model')
const Edit_author_controller = async (req, res) => {
    console.log("Edit Author")
    try {
        let edit_auth_data = await author_biodata.findById({ _id: req.params.editauthid });
        console.log(edit_auth_data);
        if (edit_auth_data != null) {
            res.json({ edit_auth_data, success: true });
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = { Edit_author_controller }
