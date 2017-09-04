var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mongolebsite';
mongoose.connect(url);
mongoose.connection.on('open', function(err, db){
    if(err){
        throw(err)
    } else {
        console.log('Connected to Mongoose !');
    }
});
var db = mongoose.connection;

module.exports = db;