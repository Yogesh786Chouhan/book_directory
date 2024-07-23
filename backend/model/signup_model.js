const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://yogeshchouhan074358:sOqeW4ZpzOinkNQT@bookproject.6s9l8ge.mongodb.net/?retryWrites=true&w=majority`);
const signUpSchema = mongoose.Schema({
    "user_name": String,
    "user_email": String,
    "user_password": String

});

const Signup = mongoose.model('signup', signUpSchema);
module.exports = Signup;


// password : sOqeW4ZpzOinkNQT
// email : yogeshchouhan074358