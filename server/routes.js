// require : main
var express = require('express');
var router = express.Router();
// require : controllers
var home = require('../controllers/home');
var upload = require('../controllers/upload');

// routing
router.get('/', home.index);
router.get('/uploadGet', upload.indexGet);
router.post('/uploadPost', upload.indexPost);

module.exports = router;
