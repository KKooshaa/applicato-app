require("../dbConfig");

const universityModel = require("../models/universities.model");

const filters = {
    filters: function (req, res) {

        let query = {
            country: req.body.country,
            city: req.body.city,
            continent: req.body.continent,
            rate: req.body.rate
        }
        Object.keys(query).forEach(key => query[key] === undefined && delete query[key])

        universityModel.find(query, {}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    },
};
module.exports = filters
