var exphbs = require('express-handlebars');

module.exports = function(app){
// define handlebars as the view engine
    app.engine('handlebars',exphbs.create({
        defaultLayout: 'mainLayout'
    }).engine);
    app.set('view engine', 'handlebars');
    
    return app;
};