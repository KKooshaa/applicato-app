const isAuth = require("./middlewares/isAuth");

const universities = require("./controllers/universities")
const users = require("./controllers/users")
const auth = require("./controllers/auth")
const universitiesPage = require("./controllers/universityPage")
const category = require("./controllers/category")
const uniFilter = require("./controllers/uniFilters")
const programFilter = require("./controllers/programFilters")
const profile = require("./controllers/profile")
const emailConfirmation = require("./controllers/emailConfirmation")
const education = require("./controllers/education")
const pair = require("./controllers/pair")

module.exports = (app) => {
    app.post("/register", users.register)

    app.get("/universities", universities.showAllUniversities)

    app.get("/countryCategory", category.countryCategory)

    app.get("/majorCategory", category.majorCategory)

    app.post("/universities/filter", uniFilter.filters)

    app.post("/programs/filter", programFilter.filters)

    app.get("/user/show", isAuth, users.showAllUsers)

    app.get("/advisor/show", isAuth, users.showAdvisors)

    app.post("/login", auth.login)

    app.post("/forgotPassword", users.forgotPassword)

    app.post("/checkEmail", users.checkEmail)

    app.post("/emailVerification", auth.emailVerification)

    app.post("/sendEmail", auth.sendEmail)

    app.post("/universityPage", universitiesPage.UniversityPage)

    app.post("/showProfile", isAuth, profile.show)

    app.post("/editProfile", isAuth, profile.edit)

    app.post("/changePassword", isAuth, profile.changePassword)

    app.post("/unCofirmedEmails/confirm", isAuth, emailConfirmation.confirm)

    app.get("/unCofirmedEmails/show", isAuth, emailConfirmation.show)

    app.post("/education/add", isAuth, education.add)

    app.post("/education/show", isAuth, education.show)

    app.post("/education/edit", isAuth, education.edit)

    app.post("/education/delete", isAuth, education.delete)

    app.post("/showApplicants", isAuth, pair.showApplicants)

    app.post("/showAdvisors", isAuth, pair.showAdvisors)

    app.post("/showRequests", isAuth, pair.showRequests)

    app.post("/deletePaired", isAuth, pair.deletePaired)

    app.post("/sendRequest", isAuth, pair.sendRequest)

    app.post("/answerRequest", isAuth, pair.answerRequest)

}
