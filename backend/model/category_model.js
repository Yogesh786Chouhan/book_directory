const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://yogeshchouhan074358:sOqeW4ZpzOinkNQT@bookproject.6s9l8ge.mongodb.net/?retryWrites=true&w=majority`);
const adminSchema = mongoose.Schema({
    "category_icon": String,
    "category": String,
  
});

const category = mongoose.model('addcategory', adminSchema);
module.exports = category;


// password : sOqeW4ZpzOinkNQT
// email : yogeshchouhan074358