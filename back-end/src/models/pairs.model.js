const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const pairSchema = new Schema({
    "advisorEmail": String,
    "applicantEmail": String,
    "situation": String,
    "message": String,
    "createdAt": String,
    "updateAt": String
});

pairSchema.methods.create = function (pairObject, callback) {

    Pair.findOne({advisorEmail: pairObject.advisorEmail, applicantEmail: pairObject.applicantEmail}, function (pair) {
        if (pair) return callback({Status: 401, message: "pair already exist"});
        else {
            pairObject.createdAt = Date.now();
            pairObject.updatedAt = Date.now();
            pairObject.situation = "pend";
            let newPair = new Pair(pairObject);
            newPair.save(function (err) {
                if (err)
                    return callback({error: err});
                else
                    return callback(newPair);
            });
        }
    })

};

pairSchema.methods.accept = function (Update, callback) {
    let query = {
        advisorEmail: Update.advisorEmail,
        applicantEmail: Update.applicantEmail,
        situation: "pend"
    };

    Pair.findOne(query).then(function (pair) {
        if (!pair) {
            return callback({Status: 401, message: "pair dosen't exist"});
        }

        pair.updatedAt = Date.now();
        pair.situation = "active";


        pair.save({}, function (err) {
            if (err)
                return callback({error: err, message: "couldn't save update"});
            else
                return callback(pair);
        });


    }).catch(() => {
        return callback({Status: 401, message: "couldn't update pair"});
    });
}

pairSchema.methods.reject = function (Update, callback) {
    let query = {
        advisorEmail: Update.advisorEmail,
        applicantEmail: Update.applicantEmail
    };

    Pair.findOne(query).then(function (pair) {
        if (!pair || pair.situation === "deleted") {
            return callback({message: "pair dosen't exist"});
        }

        pair.updatedAt = Date.now();
        pair.situation = "deleted";

        if (typeof Update.message !== "undefined") {
            pair.message = Update.message;
        }

        pair.save({}, function (err) {
            if (err)
                return callback({error: err, message: "couldn't save update"});
            else
                return callback(pair);
        });


    }).catch(() => {
        return callback({Status: 401, message: "couldn't update pair"});
    });

};

pairSchema.plugin(mongoosePaginate);
let pair = mongoose.model("pairs", pairSchema);
let Pair = mongoose.model("pairs");
module.exports = pair;
