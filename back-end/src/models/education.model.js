const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    "email": String,
    "number": Number,
    "country": String,
    "university": String,
    "grade": String,
    "major": String,
    "programTitle": String,
    "createdAt": String,
    "updateAt": String
});

educationSchema.methods.create = function (educationObject, callback) {
    educationObject.createdAt = Date.now();
    educationObject.updatedAt = Date.now();
    let newEducation = new Education(educationObject);
    newEducation.save(function (err) {
        if (err)
            return callback({error: err});
        else
            return callback(newEducation);
    });
};

educationSchema.methods.edit = function (educationUpdate, callback) {

    let query = {
        email: educationUpdate.email,
        number: educationUpdate.number
    };

    Education.findOne(query).then(function (education) {
        if (!education) {
            return callback({Status: 401, message: "education dosen't exist"});
        }

        education.updatedAt = Date.now();

        if (typeof educationUpdate.country !== "undefined") {
            education.country = educationUpdate.country;
        }
        if (typeof educationUpdate.university !== "undefined") {
            education.university = educationUpdate.university;
        }
        if (typeof educationUpdate.grade !== "undefined") {
            education.grade = educationUpdate.grade;
        }
        if (typeof educationUpdate.major !== "undefined") {
            education.major = educationUpdate.major;
        }
        if (typeof educationUpdate.programTitle !== "undefined") {
            education.programTitle = educationUpdate.programTitle;
        }

        education.save({}, function (err) {
            if (err)
                return callback({error: err, message: "couldn't save update"});
            else
                return callback(education);
        });


    }).catch(() => {
        return callback({Status: 401, message: "couldn't update education"});
    });

};

educationSchema.plugin(mongoosePaginate);
let education = mongoose.model("education", educationSchema);
let Education = mongoose.model("education");
module.exports = education;
