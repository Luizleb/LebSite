var User = require('../controllers/userModel');

module.exports = {
    indexGet: function(req, res) {
        res.render('login');
    },
    profileGet: function(req, res, next){
        User.findById(req.session.userId)
        .exec(function(err, user){
            if(err) {
                return next(err);
            } else {
                if(user === null){
                    var err = new Error('Authorization denied !');
                    err.status = 400;
                    return next(err);
                } else {
                    res.render('profile', {name: user.username, email: user.email});
                }
            }
        });
    },
    logout: function(req, res, next){
        if(req.session){
            req.session.destroy(function(err){
                if(err){
                    return next(err);
                } else {
                    res.redirect('/');
                }
            });
        }
    },
    indexPost: function(req, res, next) {
        // confirm that user typed same password twice
        if(req.body.password !== req.body.passwordConf){
            var err = new Error('Passwords do not match !');
            err.status = 400;
            res.send('Passwords do not match !');
            return next(err);
        }

        if(req.body.username && req.body.email && req.body.password && req.body.passwordConf){
            // register a new user
            var userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                passwordConf: req.body.passwordConf
            }
    
            User.create(userData, function(err,user){
                if(err){
                    return next(err);
                } else {
                    req.session.userId = user._id;
                    res.redirect('/profile');
                }
            });
        } else if(req.body.logemail && req.body.logpassword) {
            // login an existing user
            User.authenticate(req.body.logemail, req.body.logpassword, function(err, user){
                if(err){
                    var err = new Error('Wrong email or password !');
                    err.status = 401;
                    return next(err);
                } else {
                    req.session.userId = user._id;
                    res.redirect('/profile');
                }
            });

        } else {
            var err = new Error('All fields required !');
            err.status = 400;
            return next(err);
        }
        
    }
};

