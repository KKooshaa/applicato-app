const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//country categorization test 

describe("GET /countryCategory", function () {
    it("should return all countries, status 200", function (done) {
        request(app)
            .get("/countryCategory")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//major categorization test 

describe("GET /majorCategory", function () {
    it("should return all majors, status 200", function (done) {
        request(app)
            .get("/majorCategory")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
