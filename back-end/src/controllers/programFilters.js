require("../dbConfig");

const programModel = require("../models/program.model");

const filters = {
    filters: function (req, res) {

        let query = {
            programId: req.body.programId,
            name: req.body.name,
            major: req.body.major,
            grade: req.body.grade,
            university: req.body.university,
            country: req.body.country,
            city: req.body.city,
            duration: req.body.duration,
            language: req.body.language,
            rate: req.body.rate,
            webAddress: req.body.webAddress
        };
        Object.keys(query).forEach(key => query[key] === undefined && delete query[key]);

        programModel.find(query, {}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    },
};
module.exports = filters
