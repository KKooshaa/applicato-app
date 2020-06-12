const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const programSchema = new Schema({
    "programId": Number,
    "name": String,
    "major": String,
    "grade": String,
    "university": String,
    "country": String,
    "city": String,
    "duration": String,
    "language": String,
    "rate": Number,
    "webAddress": String,
});

programSchema.plugin(mongoosePaginate);
let program = mongoose.model("programs", programSchema);
module.exports = program;
