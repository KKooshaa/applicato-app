const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const request = require("supertest");

//login test

const user1 = {
    email: "email1@gmail.com",
    password: "password1"
}

const user2 = {
    email: "email1@gmail.com",
    password: "incorrectPassword"
}

const user3 = {
    email: "incorrectEmail",
    password: "password1"
}

const user4 = {
    email: "",
    password: ""
}

describe("POST /login", function () {
    it("should login the user, status 200", function (done) {
        request(app)
            .post("/login")
            .send(user1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should reject login because password incorrect, status 401", function (done) {
        request(app)
            .post("/login")
            .send(user2)
            .expect((res) => {
                if (res.body.message !== "Email or password incorrect")
                    res.status = 406
            })
            .expect(401)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should reject login because email incorrect, status 401", function (done) {
        request(app)
            .post("/login")
            .send(user3)
            .expect((res) => {
                if (res.body.message !== "Email or password incorrect")
                    res.status = 406
            })
            .expect(401)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should reject login because Invalid credentials, status 401", function (done) {
        request(app)
            .post("/login")
            .send(user4)
            .expect((res) => {
                if (res.body.message !== "Invalid credentials")
                    res.status = 406
            })
            .expect(401)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//send e-mail test

let code = 0
describe("POST /sendEmail", function () {
    it("should send verification code to users email, status 200", function (done) {
        request(app)
            .post("/sendEmail")
            .send(user1)
            .expect((res) => {
                if (res.body.message !== "Email sent: ")
                    res.status = 406;
                code = res.body.code;
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});

//email verification test

const email1 = {
    email: "email1@gmail.com",
    code: code
}

const email2 = {
    email: "email1@gmail.com",
    code: "incorrectCode"
}

describe("POST /emailVerification", function () {
    it("should verify users email, status 200", function (done) {
        request(app)
            .post("/emailVerification")
            .send(email1)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });

    it("should not verify users email because invalid code", function (done) {
        request(app)
            .post("/emailVerification")
            .send(email2)
            .expect((res) => {
                if (res.body.message !== "Invalid Code")
                    res.status = 406
            })
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    });
});
