const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    "name": String,
    "continent": String,
    "capitalName": String,
    "numOfUniversities": Number,
    "universities": Array,
    "population": Number,
    "officialLanguage": String,
    "description": String
});

countrySchema.plugin(mongoosePaginate);
let country = mongoose.model("countries", countrySchema);
module.exports = country;
