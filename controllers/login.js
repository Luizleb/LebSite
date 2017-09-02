var User = require('../controllers/userModel');
module.exports = {
    indexGet: function(req, res) {
        res.render('login');
    },
    indexPost: function(req, res) {
        var userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        }
        var newUser = User(userData);
        newUser.save(function(err){
            if(err) {
                throw(err);
            } else {
                console.log("Saved...");
                res.redirect('/');
            }
        }); 
    }
};

