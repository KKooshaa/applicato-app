const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//sendRequest

const pair1 = {
    advisorEmail: "email1@gmail.com",
    applicantEmail: "email3@gmail.com"
}
const pair2 = {
    advisorEmail: "incorrectEmail",
    applicantEmail: "email3@gmail.com"
}
const pair3 = {
    advisorEmail: "email1@gmail.com",
    applicantEmail: "incorrectEmail"
}
describe("POST /sendRequest", function () {

    it("should add new pair. status 200", function (done) {
        request(app)
            .post("/sendRequest")
            .send(pair1)
            .expect((res) => {
                if (res.body.situation !== "pend") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such advisor exists", function (done) {
        request(app)
            .post("/sendRequest")
            .send(pair2)
            .expect((res) => {
                if (res.body.message !== "no such advisor exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such applicant exists", function (done) {
        request(app)
            .post("/sendRequest")
            .send(pair3)
            .expect((res) => {
                if (res.body.message !== "no such applicant exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//showRequests

const user1 = {
    email: "email1@gmail.com"
}
const user2 = {
    email: "incorrectEmail"
}
const user3 = {
    email: "email2@gmail.com"
}
describe("GET /showRequests", function (req, res) {
    it("should return all pair requests of user , status 200", function (done) {
        request(app)
            .get("/showRequests")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such advisor exists", function (done) {
        request(app)
            .get("/showRequests")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "no such advisor exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no requests for this advisor", function (done) {
        request(app)
            .get("/showRequests")
            .send(user3)
            .expect((res) => {
                if (res.body.message !== "no requests") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//answerRequest

const pair4 = {
    advisorEmail: "email1@gmail.com",
    applicantEmail: "email4@gmail.com",
    answer: "reject",
    message: "deleting reason"
}

pair1.answer = "accept";

const pair5 = {
    advisorEmail: "email2@gmail.com",
    applicantEmail: "email3@gmail.com"
}
describe("POST /answerRequest", function () {

    it("should reject request, status 200", function (done) {
        request(app)
            .post("/answerRequest")
            .send(pair4)
            .expect((res) => {
                if (res.body.situation !== "deleted") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should accept request, status 200", function (done) {
        request(app)
            .post("/answerRequest")
            .send(pair1)
            .expect((res) => {
                if (res.body.situation !== "active") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such advisor exists", function (done) {
        request(app)
            .post("/answerRequest")
            .send(pair2)
            .expect((res) => {
                if (res.body.message !== "no such advisor exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such applicant exists", function (done) {
        request(app)
            .post("/answerRequest")
            .send(pair3)
            .expect((res) => {
                if (res.body.message !== "no such applicant exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such pair exists", function (done) {
        request(app)
            .post("/answerRequest")
            .send(pair5)
            .expect((res) => {
                if (res.body.message !== "pair dosen't exist") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//showApplicants

describe("GET /showApplicants", function () {
    it("should return all Applicants of user , status 200", function (done) {
        request(app)
            .get("/showApplicants")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such advisor exists", function (done) {
        request(app)
            .get("/showApplicants")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "no such advisor exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no applicants for this advisor", function (done) {
        request(app)
            .get("/showApplicants")
            .send(user3)
            .expect((res) => {
                if (res.body.message !== "no applicants") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//showAdvisors

const user4 = {
    email: "email3@gmail.com"
}
const user5 = {
    email: "email4@gmail.com"
}

describe("GET /showAdvisors", function (req, res) {
    it("should return all Advisors of user , status 200", function (done) {
        request(app)
            .get("/showAdvisors")
            .send(user4)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such applicant exists", function (done) {
        request(app)
            .get("/showAdvisors")
            .send(user1)
            .expect((res) => {
                if (res.body.message !== "no such applicant exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no advisor for this applicant", function (done) {
        request(app)
            .get("/showAdvisors")
            .send(user5)
            .expect((res) => {
                if (res.body.message !== "no advisors") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//deletePaired

pair1.message = "deleting reason";

describe("POST /deletePaired", function () {

    it("should change the situation of one pair, status 200", function (done) {
        request(app)
            .post("/deletePaired")
            .send(pair1)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such advisor exists", function (done) {
        request(app)
            .post("/deletePaired")
            .send(pair2)
            .expect((res) => {
                if (res.body.message !== "no such advisor exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such applicant exists", function (done) {
        request(app)
            .post("/deletePaired")
            .send(pair3)
            .expect((res) => {
                if (res.body.message !== "no such applicant exists") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("no such pair exists", function (done) {
        request(app)
            .post("/deletePaired")
            .send(pair5)
            .expect((res) => {
                if (res.body.message !== "pair dosen't exist") {
                    res.status = 406;
                }
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});
