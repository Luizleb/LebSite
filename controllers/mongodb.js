var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mongolebsite';
var myDB;
mongoose.connect(url);
mongoose.connection.on('open', function(err, db){
    if(err){
        throw(err)
    } else {
        console.log('Connected to Mongoose !');
        myDB = db;
    }
});

module.exports = myDB;