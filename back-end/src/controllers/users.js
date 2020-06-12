require("../dbConfig");
const CryptoJS = require("crypto-js");
const auth = require("./auth")
const userModel = require("../models/users.model");
const UserMethods = new userModel();

const users = {
    showAllUsers: function (req, res) {
        userModel.find({}, {_id: 0}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    },

    showAdvisors: function (req, res) {
        userModel.find({role: "advisor"}, {}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip))
    },

    checkEmail: function (req, res) {
        userModel.findOne({"email": req.body.email}, {}, function (err, result) {
            if (err) throw err;
            if (result) {
                res.send({result: false, message: "This E-mail account is already in use " + req.body.email});
            } else {
                res.send({result: true, message: "Not Exist"});
            }
        });
    },

    register: function (req, res) {
        let newUserObject = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "password": req.body.password,
            "role": req.body.role,
        };

        userModel.findOne({"email": req.body.email}, {}, function (err, result) {
            if (err) throw err;
            if (result) {
                res.send({result: false, message: "This E-mail account is already in use " + req.body.email});
            } else {
                UserMethods.create(newUserObject, function (newUser) {
                    res.send(newUser);
                });
            }
        });
    },

    forgotPassword: function (req, res) {
        userModel.findOne({"email": req.body.email}, {}, function (err, user) {
            if (err) throw err;
            if (user) {
                let updateQuery = {
                    $set: {
                        "password": CryptoJS.HmacSHA512(user.userId.toString(), req.body.password).toString()
                    }
                }
                userModel.findOneAndUpdate({"email": user.email}, updateQuery, {new: true}, function (err, result) {
                    if (err) throw err;
                    if (result) {
                        res.send(result);
                    } else {
                        res.send({result: false, message: "err " + user.email});
                    }
                });

            } else {
                res.status(401);
                res.send("Invalide Email")
            }
        });
    }
};

module.exports = users;
