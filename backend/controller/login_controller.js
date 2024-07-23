const Signup = require('../model/signup_model')
const bcrypt = require('bcrypt')


const login_controller = async (req, res) => {
    // console.log("login");
    // console.log(req.body);
    let data = await Signup.findOne({ user_email: req.body.user_email });
    // console.log(data);

    if (data == null) {
        res.json({ message: "Invalid user", success: false });
    }
    else {
        bcrypt.compare(req.body.user_password, data.user_password, (err, result) => {
        // console.log(result)
            if (result) {
                res.json({ message: "User Logged in successfully", success: true })
            }
            else {
                res.json({ message: "Invalid user", success: false });
            }
        })

    }


}

module.exports = { login_controller }
