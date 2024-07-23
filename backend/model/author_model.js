const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://yogeshchouhan074358:<password>@bookdirectory.0z12hmw.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(`mongodb+srv://yogeshchouhan074358:sOqeW4ZpzOinkNQT@bookproject.6s9l8ge.mongodb.net/?retryWrites=true&w=majority`);
const authorSchema = mongoose.Schema({
    "author_name": String,
    "popular_books": String,
    "history": String,
    "author_image": String
});

const AuthorModel = mongoose.model('author_biodata', authorSchema);
module.exports = AuthorModel;


// password : sOqeW4ZpzOinkNQT
// email : yogeshchouhan074358