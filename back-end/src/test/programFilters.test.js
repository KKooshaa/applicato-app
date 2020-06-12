const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//filter on programs test 

const filters = {
    programId: "",
    name: "",
    major: "",
    grade: "",
    university: "",
    country: "",
    city: "",
    duration: "",
    language: "",
    rate: ""
}

describe("GET /programs/filter", function () {
    it("should return programs with matching properties, status 200", function (done) {
        request(app)
            .get("/programs/filter")
            .send(filters)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
