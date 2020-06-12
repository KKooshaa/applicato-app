require("../dbConfig");
const userModel = require("../models/users.model");
const UserMethods = new userModel();

const profile = {

    show: function (req, res) {
        userModel.findOne({email: req.body.email}, function (err, user) {
            if (err) throw err;
            if (!user)
                res.send({massage: "user doesnt exist"});
            else {
                res.send(user);
            }
        })
    },

    edit: function (req, res) {
        let userUpdate = {};
        userUpdate.email = req.body.email;
        userUpdate.firstName = req.body.firstName;
        userUpdate.lastName = req.body.lastName;
        userUpdate.gender = req.body.gender;
        userUpdate.birthDate = req.body.birthDate;
        userUpdate.webAddress = req.body.webAddress;
        userUpdate.researchInterests = req.body.researchInterests;

        UserMethods.edit(userUpdate, function (updatedUser) {
            res.massage = "successfully updated";
            res.send(updatedUser);
        });
    },

    changePassword: function (req, res) {
        let userUpdate = {};
        userUpdate.email = req.body.email;
        userUpdate.password = req.body.password;

        UserMethods.edit(userUpdate, function (updatedUser) {
            res.massage = "successfully updated";
            res.send(updatedUser);
        });
    }
}

module.exports = profile;
