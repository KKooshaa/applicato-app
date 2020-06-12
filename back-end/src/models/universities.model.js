const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const universitySchema = new Schema({
    "name": String,
    "pName": String,
    "city": String,
    "pCity": String,
    "country": String,
    "pCountry": String,
    "continent": String,
    "pContinent": String,
    "url": String,
    "webAddress": String,
    "description": String,
    "pDescription": String,
    "departments": Array,
    "rate": String,
    "totalStudents": Number,
    "bachelorStudents": Number,
    "masterStudents": Number,
    "phdStudents": Number,
    "studentStaffRatio": Number,
    "intlStudents": String,
    "femaleToMale": String,
});


universitySchema.plugin(mongoosePaginate);
let university = mongoose.model("universities", universitySchema);
module.exports = university;
