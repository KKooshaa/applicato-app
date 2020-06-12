const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
    "name": String,
    "category": String
});


fieldSchema.plugin(mongoosePaginate);
let field = mongoose.model("majors", fieldSchema);
module.exports = field;
