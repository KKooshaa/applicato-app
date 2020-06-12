require("../dbConfig");
const educationModel = require("../models/education.model");
const EducationMethods = new educationModel();
const userModel = require("../models/users.model");
const UserMethods = new userModel();
const profile = require("./profile")


const educationBackground = {

    show: function (req, res) {

        userModel.find({email: req.body.email}, function (err, user) {
            if (err) throw err;
            if (!user[0])
                res.send({message: "user doesnt exist"});
            else {
                educationModel.find({email: req.body.email}, function (err, obj) {
                    if (err) throw err;
                    else {
                        obj.researchInterests = user.researchInterests;
                        obj.webAddress = user.webAddress;
                        res.send(obj);
                    }
                });
            }
        });
    },

    add: function (req, res) {

        userModel.findOne({email: req.body.email}, function (err, user) {
            if (err) throw err;
            if (!user) res.send({message: "user doesnt exist"});
            else {

                let education = {};
                education.email = req.body.email;
                education.number = req.body.number;
                education.country = req.body.country;
                education.university = req.body.university;
                education.grade = req.body.grade;
                education.major = req.body.major;
                education.programTitle = req.body.programTitle;

                EducationMethods.create(education, function (newEducation) {
                    let profile = {};
                    profile.email = req.body.email;
                    profile.webAddress = req.body.webAddress;
                    profile.researchInterests = req.body.researchInterests;

                    UserMethods.edit(profile, function (WR) {
                        newEducation.researchInterests = WR.researchInterests;
                        newEducation.webAddress = WR.webAddress;
                        res.send(newEducation);
                    });
                });
            }
        });
    },

    edit: function (req, res) {

        userModel.findOne({email: req.body.email}, function (err, user) {
            if (err) throw err;
            if (!user) res.send({message: "user doesnt exist"});
            else {

                let education = {};
                education.email = req.body.email;
                education.number = req.body.number;
                education.country = req.body.country;
                education.university = req.body.university;
                education.grade = req.body.grade;
                education.major = req.body.major;
                education.programTitle = req.body.programTitle;

                EducationMethods.edit(education, function (updatedEducation) {
                    let profile = {};
                    profile.email = req.body.email;
                    profile.webAddress = req.body.webAddress;
                    profile.researchInterests = req.body.researchInterests;

                    UserMethods.edit(profile, function (WR) {
                        updatedEducation.researchInterests = WR.researchInterests;
                        updatedEducation.webAddress = WR.webAddress;
                        res.send(updatedEducation);
                    });

                });

            }
        });
    },

    delete: function (req, res) {

        userModel.findOne({email: req.body.email}, function (err, user) {
            if (err) throw err;
            if (!user) res.send({message: "user doesnt exist"});
            else {
                let query = {
                    email: req.body.email,
                    number: req.body.number
                };
                educationModel.findOne(query, function (err, education) {
                    if (err) throw err;
                    if (!education) res.send({message: "education dosen't exist"});
                    else {
                        educationModel.deleteOne(education, function (err) {
                            if (err) throw err;
                            else {
                                res.send({message: "deleted succesfully"});
                            }
                        });
                    }
                });
            }
        });
    }
}

module.exports = educationBackground;
