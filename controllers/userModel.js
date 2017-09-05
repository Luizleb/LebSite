require('../controllers/mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

// authenticate method
UserSchema.statics.authenticate = function(email, password, callback){
    User.findOne({email: email})
    .exec(function(err, user){
        if(err){
            return callback(err);
        } else if(!user){
            var err = new Error('User not found');
            err.status = 401;
            return callback(err);
        } else {
            bcrypt.compare(password, user.password,function(err){
                if(err){
                    return callback(err);
                } else {
                    return callback(null, user);
                }
            });
        }  
    });
}

// hashing the password before saving it to the database
UserSchema.pre('save', function(next){
    user = this;
    bcrypt.hash(user.password, 10, function(err,hash){
        if(err) throw err;
        user.password = hash;
        next();
    })
});

var User = mongoose.model('User', UserSchema);

module.exports = User;