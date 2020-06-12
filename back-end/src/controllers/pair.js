require("../dbConfig");
const pairModel = require("../models/pairs.model");
const PairMethods = new pairModel();
const userModel = require("../models/users.model");
const UserMethods = new userModel();

const Pair = {

    showApplicants: function (req, res) {

        userModel.findOne({email: req.body.email, role: "advisor"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such advisor exists"});
            } else {
                let query = {
                    advisorEmail: req.body.email,
                    situation: "active"
                };

                let limit = {applicantEmail: 1, _id: 0};

                var arr = []
                pairModel.find(query, limit, function (err, pairs) {
                    if (err) throw err;
                    if (pairs[0]) {
                        pairs.forEach(function (pair, i) {
                            let q = {
                                email: pair.toString().split(" ")[2].split("'")[1]
                            };
                            userModel.find(q, function (err, obj) {
                                if (err) throw err;
                                arr.push(obj[0])
                                if (i === pairs.length - 1) {
                                    res.send(arr);
                                }
                            })

                        })
                    } else {
                        res.send({message: "no applicants"})
                    }

                })
            }
        })

    },
    showAdvisors: function (req, res) {
        userModel.findOne({email: req.body.email, role: "applicant"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such applicant exists"});
            } else {
                let query = {
                    applicantEmail: req.body.email,
                    situation: "active"
                };

                let limit = {advisorEmail: 1, _id: 0};


                var arr = []
                pairModel.find(query, limit, function (err, pairs) {
                    if (err) throw err;
                    if (pairs[0]) {
                        pairs.forEach(function (pair, i) {
                            let q = {
                                email: pair.toString().split(" ")[2].split("'")[1]
                            };
                            userModel.find(q, function (err, obj) {
                                if (err) throw err;
                                arr.push(obj[0])
                                if (i === pairs.length - 1) {
                                    res.send(arr);
                                }
                            })

                        })
                    } else {
                        res.send({message: "no advisors"})
                    }

                })
            }
        })


    },
    showRequests: function (req, res) {
        userModel.findOne({email: req.body.email, role: "advisor"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such advisor exists"});
            } else {
                let query = {
                    advisorEmail: req.body.email,
                    situation: "pend"
                };

                let limit = {applicantEmail: 1, _id: 0};

                var arr = []
                pairModel.find(query, limit, function (err, pairs) {
                    if (err) throw err;
                    if (pairs[0]) {
                        pairs.forEach(function (pair, i) {
                            let q = {
                                email: pair.toString().split(" ")[2].split("'")[1]
                            };
                            userModel.find(q, function (err, obj) {
                                if (err) throw err;
                                arr.push(obj[0])
                                if (i === pairs.length - 1) {
                                    res.send(arr);
                                }
                            })

                        })
                    } else {
                        res.send({message: "no requests"})
                    }

                })
            }
        })
    },
    deletePaired: function (req, res) {
        let pair = {};
        pair.advisorEmail = req.body.advisorEmail;
        pair.applicantEmail = req.body.applicantEmail;
        pair.message = req.body.message;

        userModel.findOne({email: pair.advisorEmail, role: "advisor"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such advisor exists"});
            } else {
                userModel.findOne({email: pair.applicantEmail, role: "applicant"}, function (err, obj) {
                    if (err) throw err;
                    if (!obj) {
                        res.send({message: "no such applicant exists"});
                    } else {
                        PairMethods.reject(pair, function (updatedPair) {
                            res.send(updatedPair);
                        })
                    }
                })
            }
        })

    },
    sendRequest: function (req, res) {

        let pair = {};
        pair.advisorEmail = req.body.advisorEmail;
        pair.applicantEmail = req.body.applicantEmail;

        userModel.findOne({email: req.body.advisorEmail, role: "advisor"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such advisor exists"});
            } else {
                userModel.findOne({email: req.body.applicantEmail, role: "applicant"}, function (err, obj) {
                    if (err) throw err;
                    if (!obj) {
                        res.send({message: "no such applicant exists"});
                    } else {
                        PairMethods.create(pair, function (newPair) {
                            res.send(newPair);
                        })
                    }
                })
            }
        })


    },
    answerRequest: function (req, res) {

        let pair = {};
        pair.advisorEmail = req.body.advisorEmail;
        pair.applicantEmail = req.body.applicantEmail;

        userModel.findOne({email: req.body.advisorEmail, role: "advisor"}, function (err, obj) {
            if (err) throw err;
            if (!obj) {
                res.send({message: "no such advisor exists"});
            } else {
                userModel.findOne({email: req.body.applicantEmail, role: "applicant"}, function (err, obj) {
                    if (err) throw err;
                    if (!obj) {
                        res.send({message: "no such applicant exists"});
                    } else {
                        if (req.body.answer === "accept") {
                            PairMethods.accept(pair, function (updatedPair) {
                                res.send(updatedPair);
                            })
                        } else {
                            pair.message = req.body.message;
                            PairMethods.reject(pair, function (updatedPair) {
                                res.send(updatedPair);
                            })
                        }
                    }
                })
            }
        })


    }


}
module.exports = Pair;
