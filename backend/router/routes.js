const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
// const AdminModel = require('../model/admin_model');
const { Add_category_controller } = require('../controller/Add_category_controller');
const { Manage_category_controller } = require('../controller/Manage_category_controller');
const { Delete_category_controller } = require('../controller/Delete_category_controller');
const { Edit_category_controller } = require('../controller/Edit_category_controller');
const { Update_category_controller } = require('../controller/Update_category_controller');
const { Add_author_controller } = require('../controller/Add_author_controller');
const multer = require('multer');
const { Manage_author } = require('../controller/Manage_author');
const { Delete_author_controller } = require('../controller/Delete_author_controller');
const { Edit_author_controller } = require('../controller/Edit_author_controller');
const { Update_author_controller } = require('../controller/Update_author_controller');
const { Add_book_controller } = require('../controller/Add_book_controller');
const { Manage_book } = require('../controller/Manage_book');
const { Delete_book_controller } = require('../controller/Delete_book_controller');
const { Edit_book_controller } = require('../controller/Edit_book_controller');
const { Update_book_controller } = require('../controller/Update_book_controller');
const { See_more_controller } = require('../controller/See_more_controller');
const { show_auth_book } = require('../controller/Show_auth_book_controller');
const { Cate_filter_book_controller } = require('../controller/Cate_filter_book_controller');
const { Admin_login_controller } = require('../controller/Admin_login_controller');
const { auth_middleware } = require('../middleware/auth_middleware');
const { Signup_controller } = require('../controller/Signup_controller');
const { login_controller } = require('../controller/login_controller');





// const axios = require('axios');
router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router;


/* --------------------------ROUTER START---------------------------------------*/

// USER SIGN UP || POST REQUEST
router.post('/signup', Signup_controller)

// USER LOG IN || POST REQUEST
router.post('/login', login_controller)

// ADMIN LOG IN || POST REQUEST
router.post('/adminlogin', Admin_login_controller)


/* --------------------------CATEGORY ROUTER START---------------------------------------*/

// POST CATEGORY || POST REQUEST
router.post('/addcategory', auth_middleware, Add_category_controller);

//GET CATEGORY || GET REQUEST
router.get('/managecategory', Manage_category_controller)

//DELETE CATEGORY || DELETE REQUEST
router.get('/delete_category/:catdelId', auth_middleware, Delete_category_controller)

//EDIT CATEGORY || EDIT REQUEST
router.get('/edit_category/:cateditId', auth_middleware, Edit_category_controller)

//UPDATE CATEGORY || UPDATE REQUEST
router.put('/update_category', auth_middleware, Update_category_controller)

/* --------------------------CATEGORY ROUTER END---------------------------------------*/




/*-------------------------Start---MultiType Image And Pdf------------------------------*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (
      file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp' || file.mimetype === 'image/jpg') {
      cb(null, './public/uploads')
    } else {
      cb(null, './public/document')
    }
  },

  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});

const upload = multer({
  storage: storage
}).fields([{ name: "auth_img" }, { name: "logo" }, { name: "author_image" }, { name: "book_img" }, { name: "book_new_image" }, { name: "book_new_document" }, { name: "book_image" }, { name: "book_doc" }, { name: "book_document" }]);

/*-------------------------End---MultiType Image And Pdf------------------------------*/






/*----Start--Author Information with image with "MULTER PACKAGE"------*/

//Author info || Post Request 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads')
//   },

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })
// router.post('/author_detail', upload.single('auth_img'), Add_author_controller)



router.post('/author_detail', auth_middleware, upload, Add_author_controller)

//GET AUTHOR|| GET REQUEST
router.get('/manage_author', Manage_author)


// DELETE AUTHOR REQUEST || DELETE AUTHOR 
router.get("/delete_author/:delId", Delete_author_controller);

// EDIT AUTHOR REQUEST || EDIT AUTHOR 
router.get("/edit_author/:editauthid", Edit_author_controller);

// UPDATE AUTHOR REQUEST || UPDATE AUTHOR 
// router.put('/update_author', upload.single('auth_img'), Update_author_controller)
router.put('/update_author', upload, Update_author_controller)

//<---End---Author Information with image with "MULTER PACKAGE"------->




/*---Start---BOOK DETAIL with IMAGE and DOCUMENT with "MULTER PACKAGE"-------*/

// BOOK DETAIL REQUEST || BOOK DETAIL 
router.post('/book_detail', auth_middleware, upload, Add_book_controller)
// router.post('/book_detail', upload.single('book_img'), Add_book_controller)

// MANAGE BOOK
router.get('/manage_book', Manage_book)

//Delete book
router.get('/delete_book/:delbook', Delete_book_controller)

// Edit Book request || edit book
router.get("/edit_book/:editbookid", Edit_book_controller);


//Update book || Update REQUEST
router.put('/update_book', upload, Update_book_controller)

// See more book || Get Request
router.get('/see_more/:seemoreid', See_more_controller)

/*---End---BOOK DETAIL with IMAGE and DOCUMENT with "MULTER PACKAGE"-------*/



//GET Author Filtered Book || GET REQUEST
router.get('/show_auth_book/:auth_book', show_auth_book)

//GET Category Filtered Book || GET REQUEST
router.get('/show_cate_book/:cate_fil_book', Cate_filter_book_controller)





// Get See_more_page



