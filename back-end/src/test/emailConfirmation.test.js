const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//show test
describe("GET /unCofirmedEmails/show", function () {
    it("should return all unconfirmed emails of advisors, status 200", function (done) {
        request(app)
            .get("/unCofirmedEmails/show")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

const email1 = {
    email: "email1@gmail.com",
    isConfirmed: "YES"
}
const email2 = {
    email: "email2@gmail.com",
    isConfirmed: "NO"
}

//confirm test
describe("POST /unCofirmedEmails/confirm", function () {
    it("should confirm email of advisor, status 200", function (done) {
        request(app)
            .post("/unCofirmedEmails/confirm")
            .send(email1)
            .expect((res) => {
                if (res.body.massage !== "email accepted")
                    res.status = 406;
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should reject email of advisor, status 200", function (done) {
        request(app)
            .post("/unCofirmedEmails/confirm")
            .send(email2)
            .expect((res) => {
                if (res.body.massage !== "email rejected")
                    res.status = 406;
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
