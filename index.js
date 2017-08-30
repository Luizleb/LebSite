var express = require('express');
var config = require('./server/config');

var app = express();

app.set('port', process.env.PORT || 3300);

app.listen(app.get('port'), function(){
    console.log("Server running on port" + app.get('port'));
});

config(app);

app.get('/', function(req, res){
  res.render('home');
});
