// require : main
var express = require('express');
var router = express.Router();
var uploadFile = require('../controllers/fileUpload');
// require : controllers
var home = require('../controllers/home');
var upload = require('../controllers/upload');

// routing
router.get('/', home.index);
router.get('/uploadGet', upload.indexGet);
router.post('/uploadPost', uploadFile.single('file'), upload.indexPost);

module.exports = router;
