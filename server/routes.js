// require : main
var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var uploadMulter = multer({
    dest: path.join(__dirname, '../public/uploads'),
  });
// require : controllers
var home = require('../controllers/home');
var upload = require('../controllers/upload');

// routing
router.get('/', home.index);
router.get('/uploadGet', upload.indexGet);
router.post('/uploadPost', uploadMulter.single('file'), upload.indexPost);

module.exports = router;
