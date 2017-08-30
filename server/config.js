var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){
// req body parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

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