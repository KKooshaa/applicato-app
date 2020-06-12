require("../dbConfig");

const countryModel = require("../models/country.model");
const majorModel = require("../models/major.model");


const category = {
    countryCategory: function (req, res) {
        countryModel.find({}, {}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    },

    majorCategory: function (req, res) {
        majorModel.find({}, {}, function (err, data) {
            if (err) throw err;
            else {
                res.send(data);
            }
        }).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip));
    }
};
module.exports = category;
