const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

const university1 = {
    country: "Australia",
    name: "The University of Queensland"
}

describe("GET /universityPage", function () {
    it("should return a university", function (done) {
        request(app)
            .get("/universityPage")
            .send(university1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
