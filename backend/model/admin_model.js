const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://yogeshchouhan074358:<password>@bookdirectory.0z12hmw.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(`mongodb+srv://yogeshchouhan074358:sOqeW4ZpzOinkNQT@bookproject.6s9l8ge.mongodb.net/?retryWrites=true&w=majority`);
const adminSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "password": String
});

const AdminModel = mongoose.model('adminlogin', adminSchema);
module.exports = AdminModel;


// password : sOqeW4ZpzOinkNQT
// email : yogeshchouhan074358