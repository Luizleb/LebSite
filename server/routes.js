// require : main
var express = require('express');
var router = express.Router();
var uploadFile = require('../controllers/fileUpload');
// require : controllers
var home = require('../controllers/home');
var upload = require('../controllers/upload');
var login = require('../controllers/login');

// routing
router.get('/', home.index);
// login and register routes
router.get('/login', login.indexGet);
router.post('/register', login.indexPost);
// file uploading routes
router.get('/uploadGet', upload.indexGet);
router.post('/uploadPost', uploadFile.single('file'), upload.indexPost);

module.exports = router;
