var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('../controllers/mongodb');
var MongoStore = require('connect-mongo')(session);

module.exports = function(app){
// sessions midleware
app.use(session({
    secret: 'itabirito',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection:db})
}));

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

// catch status 404 and forward to error handler
    app.use(function(err, req, res, next){
        var err = err || new Error('File not found.');
        res.status = 404;
        next(err);
    });

// error handler - Defined as the last app.use callback
    app.use(function(err, req, res, next){
        res.status = err.status || 500;
        res.render('loginErr', {msg: err.message});
    });
    
    return app;
};