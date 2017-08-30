// require : main
var express = require('express');
var router = express.Router();
// require : controllers
var home = require('../controllers/home');

// routing
router.get('/', home.index);

module.exports = router;
