var path = require('path');
var multer = require('multer');
var upload = multer({dest: path.join(__dirname, '../public/uploads')});

module.exports = {
    indexGet: function(req, res){
        res.render('uploadGet');
    },
    indexPost: function(req, res){
        upload.single('Santander.ofx');
        res.render('home',{remark:'File Saved'});
    }
}