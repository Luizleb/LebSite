var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes');
var path = require('path');

module.exports = function(app){

// define the router
    app.use(routes);

// define the public path
    app.use('/assets', express.static(path.join(__dirname , '../public')));

// define handlebars as the view engine
    app.engine('handlebars',exphbs.create({
        defaultLayout: 'mainLayout'
    }).engine);
    app.set('view engine', 'handlebars');
    
    return app;
};