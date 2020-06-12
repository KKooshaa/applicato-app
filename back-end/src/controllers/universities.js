require("../dbConfig");

const universityModel = require("../models/universities.model");

const universities = {
    showAllUniversities: function (req, res) {
        universityModel.find({}, {_id: 0}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    },
};
module.exports = universities;
