require("../dbConfig")

const universityModel = require("../models/universities.model");

const universitiesPage = {
    UniversityPage: function (req, res) {

        let query = {
            country: req.body.country,
            city: req.body.city,
            name: req.body.name
        };
        Object.keys(query).forEach(key => query[key] === undefined && delete query[key]);

        universityModel.findOne(query, {},
            function (err, obj) {
                if (err) throw err;
                else {
                    res.send(obj);
                }
            });
    }
};
module.exports = universitiesPage;
