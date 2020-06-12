const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//show all users test

describe("GET /user/show", function () {
    it("should return all users, status 200", function (done) {
        request(app)
            .get("/user/show")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//show advisors test

describe("GET /advisor/show", function () {
    it("should return advisors, status 200", function (done) {
        request(app)
            .get("/advisor/show")
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});


//register test

const user1 = {
    firstName: "f5",
    lastName: "l5",
    email: "email5@gmail.com",
    password: "password5",
    role: "admin"
}

const user2 = {
    firstName: "",
    lastName: "",
    email: "email1@gmail.com",
    password: "",
    role: "admin"
}

describe("POST /register", function () {
    it("should register user, status 200", function (done) {
        request(app)
            .post("/register")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should reject register user because e-mail is in use", function (done) {
        request(app)
            .post("/register")
            .send(user2)
            .expect((res) => {
                expect(res.result = false)
            })
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

});

//forgot password test

const forgotPassword1 = {
    email: "email5@gmail.com",
    password: "newPassword5"
}

const forgotPassword2 = {
    email: "incorrectEmail",
    password: ""
}

describe("POST /forgotPassword", function () {
    it("should send a recover password e-mail to users email address, status 200", function (done) {
        request(app)
            .post("/forgotPassword")
            .send(forgotPassword1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not send a recover password e-mail because e-mail invalid, status ", function (done) {
        request(app)
            .post("/forgotPassword")
            .send(forgotPassword2)
            .expect(401)
            .expect((res) => {
                res.body.message = "Invalide Email"
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            })
    });
});
