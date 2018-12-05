'use strict';
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var {mongoose} = require('./../db/mongoose');
var {Patient} = require('./../models/patient')
var config = require('./setting');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: config.secret
    };
    passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {
        Patient.findOne({ email: jwt_payload.email }, function (err, user) {
            if (err) {
                return callback(err, false);
            } else {
                if (user) {
                    var user = user;
                    delete user.password;
                    callback(null, user);
                } else {
                    return callback(err, false);
                }
            }
        });
    }));

};
