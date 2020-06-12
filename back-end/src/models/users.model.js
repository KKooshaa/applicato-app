const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncr = require("mongoose-sequence")(mongoose);
const bcrypt = require("bcryptjs");
const CryptoJS = require("crypto-js");


const userSchema = new Schema({
    "userId": Number,
    "firstName": String,
    "lastName": String,
    "gender": String,
    "birthDate": String,
    "email": String,
    "isConfirmed": String,
    "password": String,
    "role": String,
    "webAddress": String,
    "researchInterests": String,
    "createdAt": String,
    "updateAt": String
});

userSchema.methods.create = function (userObject, callback) {
    userObject.createdAt = Date.now();
    userObject.updatedAt = Date.now();
    // await bcrypt.hash(userObject.password, 8)
    //   .then(pass => {
    //     userObject.password = pass;
    //   });
    let newUser = new User(userObject);
    newUser.setNext("userId", function (err, user) {
        console.log("user.userId : " + user.userId)

        newUser.isConfirmed = "pend";

        newUser.password = CryptoJS.HmacSHA512(user.userId.toString(), userObject.password).toString();
        console.log("hashed pass : " + newUser.password);
        if (err) throw err;
        newUser.save({}, function (err) {
            if (err)
                return callback({error: err});
            else
                return callback(newUser);
        });
    });
};

userSchema.methods.edit = function (userUpdate, callback) {

    User.findOne({email: userUpdate.email}).then(function (user) {
        if (!user) {
            return callback({Status: 401, message: "user dosen't exist"});
        }

        user.updatedAt = Date.now();

        if (typeof userUpdate.lastName !== "undefined") {
            user.lastName = userUpdate.lastName;
        }
        if (typeof userUpdate.firstName !== "undefined") {
            user.firstName = userUpdate.firstName;
        }
        if (typeof userUpdate.gender !== "undefined") {
            user.gender = userUpdate.gender;
        }
        if (typeof userUpdate.birthDate !== "undefined") {
            user.birthDate = userUpdate.birthDate;
        }
        if (typeof userUpdate.webAddress !== "undefined") {
            user.webAddress = userUpdate.webAddress;
        }
        if (typeof userUpdate.researchInterests !== "undefined") {
            user.researchInterests = userUpdate.researchInterests;
        }
        if (typeof userUpdate.password !== "undefined") {
            user.password = CryptoJS.HmacSHA512(user.userId.toString(), userUpdate.password).toString();
            console.log("hashed pass : " + user.password);
        }

        user.save({}, function (err) {
            if (err)
                return callback({error: err, message: "couldn't save update"});
            else
                return callback(user);
        });


    }).catch(() => {
        return callback({Status: 401, message: "couldn't update user"});
    });

};

userSchema.methods.emailConfirmation = function (email, callback) {

    User.findOne({email: email.email}).then(function (user) {
        if (!user) {
            return callback({Status: 401, message: "user dosen't exist"});
        }

        user.updatedAt = Date.now();

        user.isConfirmed = email.isConfirmed;

        user.save({}, function (err) {
            if (err)
                return callback({error: err, message: "couldn't save update"});
            else if (user.isConfirmed === "YES")
                return callback({massage: "email accepted"});
            else
                return callback({massage: "email rejected"});
        });


    }).catch(() => {
        return callback({Status: 401, message: "couldn't finish process"});
    });

};

userSchema.plugin(autoIncr, {inc_field: "userId", disable_hooks: true});
let user = mongoose.model("users", userSchema);
let User = mongoose.model("users");

module.exports = user;
