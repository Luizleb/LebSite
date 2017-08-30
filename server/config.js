var exphbs = require('express-handlebars');
var routes = require('./routes');

module.exports = function(app){
// define the router
    app.use(routes);

// define handlebars as the view engine
    app.engine('handlebars',exphbs.create({
        defaultLayout: 'mainLayout'
    }).engine);
    app.set('view engine', 'handlebars');
    
    return app;
};