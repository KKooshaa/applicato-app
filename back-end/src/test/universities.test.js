const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//show all universities test

describe("GET /universities", function () {
    it("should return all universities, status 200", function (done) {
        request(app)
            .get("/universities")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
