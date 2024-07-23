const Signup = require("../model/signup_model");
const bcrypt = require('bcrypt');

const Signup_controller = async (req, res) => {
    console.log("Signup user")
    console.log(req.body)
    // Check email, exists or not
    let data = await Signup.find({ user_email: req.body.user_email });
    // console.log(data);
    if (data.length > 0) {
        res.json({ message: "email already exists", success: false })
    }

    else {
        // bcrypt password
        bcrypt.hash(req.body.user_password, 10, async (err, hash) => {
            // Store hash in your db password
            if (err) {
                res.json({ message: "invalid", success: false })
            }
            else {
                req.body.user_password = hash;
                const { user_name, user_email, user_password } = req.body;
                let result = await Signup({ user_name, user_email, user_password });
                // console.log(result);
                let signup_result = await result.save();
                // console.log(signup_result);
                if (signup_result) {

                    res.json({ message: "User added successfully", success: true })
                } else {
                    res.json({ message: "error", success: false })
                }
            }
        })


    }



}
module.exports = { Signup_controller }
