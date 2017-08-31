var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,path.join(__dirname,'../public/uploads'));
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-'+ Date.now() + '-'+ path.extname(file.originalname));
    }
});

var uploadFile = multer({storage: storage});

module.exports = uploadFile;