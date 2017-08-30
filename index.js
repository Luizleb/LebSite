var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3300);
app.get('/', function(req, res){
  res.send("Future Leb Site");
});
app.listen(app.get('port'), function(){
    console.log("Server running on port" + app.get('port'));
});
