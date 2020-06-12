const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//add test

const education1 = {
    email: "email1@gmail.com",
    number: 1,
    country: "country1",
    university: "university1",
    grade: "grade1",
    major: "major1",
    programTitle: "title"
}

describe("POST /education/add", function () {
    it("should add user background education, status 200", function (done) {
        request(app)
            .post("/education/add")
            .send(education1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not add education because user doesnt exist", function (done) {
        request(app)
            .post("/education/add")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "user doesnt exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//show education test

const user1 = {
    email: "email2@gmail.com"
}

const user2 = {
    email: "incorrectEmail"
}

describe("GET /education/show", function () {
    it("should return one user background education, status 200", function (done) {
        request(app)
            .get("/education/show")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not return education because user doesnt exist", function (done) {
        request(app)
            .get("/education/show")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "user doesnt exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//edit test

const education2 = {
    email: "email1@gmail.com",
    number: 1001,
    country: "",
    university: "",
    grade: "",
    major: "",
    programTitle: ""
}

describe('POST /education/edit', function (req, res) {
    it('should edit user background education, status 200', function (done) {
        request(app)
            .post('/education/edit')
            .send(education1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it('should not edit education because user doesnt exist', function (done) {
        request(app)
            .post('/education/edit')
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "user doesn't exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not edit education because education doesn't exist", function (done) {
        request(app)
            .post("/education/edit")
            .send(education2)
            .expect((res) => {
                if (res.body.message !== "education doesn't exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//delete test

describe("POST /education/delete", function (req, res) {
    it("should delete user background education, status 200", function (done) {
        request(app)
            .post("/education/delete")
            .send(education1)
            .expect((res) => {
                if (res.body.message !== "deleted succesfully")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not delete education because user doesn't exist", function (done) {
        request(app)
            .post("/education/delete")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "user doesnt exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not delete education because education doesn't exist", function (done) {
        request(app)
            .post("/education/delete")
            .send(education2)
            .expect((res) => {
                if (res.body.message !== "education doesn't exist")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
