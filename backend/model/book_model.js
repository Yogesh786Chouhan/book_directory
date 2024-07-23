const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://yogeshchouhan074358:<password>@bookdirectory.0z12hmw.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(`mongodb+srv://yogeshchouhan074358:sOqeW4ZpzOinkNQT@bookproject.6s9l8ge.mongodb.net/?retryWrites=true&w=majority`);
const bookSchema = mongoose.Schema({
    "book_title": String,
    "book_category": String,
    "book_author": String,
    "book_history": String,
    "book_publish": String,
    "book_image": String,
    "book_document": String,
    "book_price": String,
});

const BookModel = mongoose.model('book_biodata', bookSchema);
module.exports = BookModel;


// password : sOqeW4ZpzOinkNQT
// email : yogeshchouhan074358