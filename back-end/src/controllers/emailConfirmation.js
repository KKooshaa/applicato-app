require("../dbConfig");
const userModel = require("../models/users.model");
const UserMethods = new userModel();

const emailConfirmation = {
    show: function (req, res) {
        let query = {
            role: "advisor",
            isConfirmed: "pend"
        };

        userModel.find(query, {_id: 0}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));

    },

    confirm: function (req, res) {
        let email = {};
        email.email = req.body.email;
        email.isConfirmed = req.body.isConfirmed;

        UserMethods.emailConfirmation(email, function (response) {
            res.send(response);
        })
    }
};

module.exports = emailConfirmation;
