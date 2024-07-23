const express = require('express')
const app = express()
// require('dotenv').config();
const router = require('./router/routes');
const AdminModel = require('./model/admin_model');
const category = require('./model/category_model')
const AuthorModel = require('./model/author_model')
const BookModel = require('./model/book_model')
const Signup = require('./model/signup_model')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config();

}
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
})

app.use(cors());
app.use('/public', express.static('public'))
app.use(router);
app.listen(process.env.PORT, () => {
    console.log(`Book_directory server is working on port ${process.env.PORT}`);
})

