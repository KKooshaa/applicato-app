const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//filter on universities test 

const filters = {
    country: "Germany",
    city: "",
    continent: "",
}

describe("GET /universities/filter", function () {
    it("should return universities with matching properties, status 200", function (done) {
        request(app)
            .get("/universities/filter")
            .send(filters)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
