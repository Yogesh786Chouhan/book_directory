const AdminModel = require('../model/admin_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin_login_controller = async (req, res) => {
    // console.log(req.body)
    try {
        let dbresult = await AdminModel.findOne({ email: req.body.email });
        // console.log(dbresult);

        if (dbresult != null) {
            let result = await bcrypt.compare(req.body.password, dbresult.password)
            // console.log(result);
            if (result) {
                // Generate token
                // jwt.sign({ userauthdata: dbresult }, process.env.SECRET_KEY, { expiresIn: '10s' }, (error, token) => {
                jwt.sign({ uid: dbresult._id }, process.env.SECRET_KEY, { expiresIn: '10s' }, (error, token) => {
                    // console.log(token);
                    res.send({ message: "Admin Logged in successfully", success: true, token: token })
                })
            } else {
                res.send({ message: "either email or password wrong", success: false })
            }
        } else {
            res.send({ message: "admin user does not match", success: false })
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = { Admin_login_controller }
