const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//show profile test
const user0 = {
    email: "email1@gmail.com"
}
const user00 = {
    email: "incorrectEmail"
}
describe("GET /showProfile", function () {
    it("should return users information, status 200", function (done) {
        request(app)
            .get("/showProfile")
            .send(user0)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not return users information because email doesnt exist, status 200", function (done) {
        request(app)
            .get("/showProfile")
            .send(user00)
            .expect((res) => {
                if (res.body.message !== "user doesnt exist")
                    res.status = 406;
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//edit profile test

const user1 = {
    email: "email1@gmail.com",
    firstName: "firstname1",
    lastName: "lastname1",
    gender: "gender1",
    birthDate: "1998-12-30"
};

const user2 = {
    email: "incorrectEmail",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "1998-01-01"
};

describe("POST /editProfile", function () {

    it("should edit users, status 200", function (done) {
        request(app)
            .post("/editProfile")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not edit users profile because email doesnt exist, status 401", function (done) {
        request(app)
            .post("/editProfile")
            .send(user2)
            .expect((res) => {
                res.status = 401, res.message = "user dosen't exist"
            })
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//change password test

const user3 = {
    email: "email3@gmail.com",
    password: "newPassword3"
};


describe("POST /changePassword", function () {

    it("should change password, status 200", function (done) {
        request(app)
            .post("/changePassword")
            .send(user3)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not change password because email doesnt exist, status 401", function (done) {
        request(app)
            .post("/changePassword")
            .send(user2)
            .expect((res) => {
                res.status = 401, res.message = "user dosen't exist"
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            })
    });

});
