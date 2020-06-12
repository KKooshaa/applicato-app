const CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');
const generator = require('generate-password');
const redis = require('redis');

// const port = process.env.REDIS_PORT || 6379;
// const host = process.env.REDIS_HOST || '127.0.0.1';

const client = redis.createClient( /*host, port*/ ); //creates a new client

require('../dbConfig');

const userModel = require('../models/users.model');
const bcrypt = require("bcryptjs");
const UserMethods = new userModel();

const auth = {
  login: function(req, res) {
    if (req.body["email"] && req.body["password"]) {
      let email = req.body.email;
      let password = req.body.password;
      // Fire a query to your DB and check if the credentials are valid
      auth.validate(email, password, function(callback) {
        let userDbObject = callback;
        if (!userDbObject.userId) { // authentication failed
          res.status(callback.status);
          res.send({
            result: callback.result,
            message: callback.message
          });
        } else {
          let token = genToken(userDbObject.email);
          res.send(JSON.parse(token));
        }

      });

    } else {
      res.status(401)
      res.send({ message: "Invalid credentials" });
    }
  },
  validate: function(email, password, callback) {
    // spoofing the DB response for simplicity
    userModel.findOne({ "email": email }, {}, function(err, user) {
      if (err) throw err;
      if (user) {
        let hashPassword = CryptoJS.HmacSHA512(user.userId.toString(), password).toString();
        // console.log("pass1 :" + user.password , "\n pass2 :" + hashPassword);
        if (user.password === hashPassword) {
          // logged in
          return callback(user);

        } else {
          return callback({ result: false, status: 401, message: "Email or password incorrect" });
        }
      } else {
        return callback({ result: false, status: 401, message: "Email or password incorrect" });
      }
    });
  },
  emailVerification: function(req, res) {
    client.get(req.body.email, function(err, reply) {
      console.log(reply);
      if (err) throw err;
      if (reply && (reply === req.body.code)) {
        res.send({ result: true, message: "valid Code" });
      } else {
        res.send({ result: false, message: "Invalid Code" });
      }
    });
  },
  sendEmail: function(req, res) {
    if (req.body.email) {
      let email = req.body.email;
      let code = generator.generate({
        length: 6,
        numbers: true,
        uppercase: false,
        lowercase: true,
        exclude: "a" + "b" + "c" + "d" + "e" + "f" + "g" + "h" + "i" + "j" + "k" + "l" + "m" + "n" + "o" + "p" + "q" + "r" + "s" + "t" + "u" + "v" + "w" + "x" + "y" + "z"
      });

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'applicatoapp@gmail.com',
          pass: 'rezvanpedramrosekoosha'
        }
      });

      let mailOptions = {
        from: 'applicatoapp@gmail.com',
        to: email,
        subject: 'Verification Code',
        html: emailHTML(code)
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          res.send(error);
          console.log(error);
        } else {
          res.send({ message: 'Email sent: ', code: code });
          console.log('Email sent: ' + info.response);
        }
      });

      client.on('connect', function() {
        console.log('Redis Connected');
      });

      client.set(email, code);

      client.get(email, function(err, reply) {
        console.log(reply);
      });
      client.expire(email, 120); // 60 seconds
    }
  }
};

module.exports = auth;


const jwt = require('jwt-simple');
const secret = 'Applicato'

// private method
function genToken(email) {
  let expires = expiresIn(1); // 1 day
  let token = jwt.encode({
    exp: expires,
    key: email
  }, secret);

  return JSON.stringify({
    token: token,
  });
}

function expiresIn(numDays) {
  let dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

function emailHTML(code) {
  let htmlCode = "<!DOCTYPE html>\n" +
    "<html>\n" +
    "\n" +
    "<head>\n" +
    "    <title></title>\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n" +
    "    <style type=\"text/css\">\n" +
    "        @media screen {\n" +
    "            @font-face {\n" +
    "                font-family: 'Lato';\n" +
    "                font-style: normal;\n" +
    "                font-weight: 400;\n" +
    "                src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\n" +
    "            }\n" +
    "\n" +
    "            @font-face {\n" +
    "                font-family: 'Lato';\n" +
    "                font-style: normal;\n" +
    "                font-weight: 700;\n" +
    "                src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');\n" +
    "            }\n" +
    "\n" +
    "            @font-face {\n" +
    "                font-family: 'Lato';\n" +
    "                font-style: italic;\n" +
    "                font-weight: 400;\n" +
    "                src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');\n" +
    "            }\n" +
    "\n" +
    "            @font-face {\n" +
    "                font-family: 'Lato';\n" +
    "                font-style: italic;\n" +
    "                font-weight: 700;\n" +
    "                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        /* CLIENT-SPECIFIC STYLES */\n" +
    "        body,\n" +
    "        table,\n" +
    "        td,\n" +
    "        a {\n" +
    "            -webkit-text-size-adjust: 100%;\n" +
    "            -ms-text-size-adjust: 100%;\n" +
    "        }\n" +
    "\n" +
    "        table,\n" +
    "        td {\n" +
    "            mso-table-lspace: 0pt;\n" +
    "            mso-table-rspace: 0pt;\n" +
    "        }\n" +
    "\n" +
    "        img {\n" +
    "            -ms-interpolation-mode: bicubic;\n" +
    "        }\n" +
    "\n" +
    "        /* RESET STYLES */\n" +
    "        img {\n" +
    "            border: 0;\n" +
    "            height: auto;\n" +
    "            line-height: 100%;\n" +
    "            outline: none;\n" +
    "            text-decoration: none;\n" +
    "        }\n" +
    "\n" +
    "        table {\n" +
    "            border-collapse: collapse !important;\n" +
    "        }\n" +
    "\n" +
    "        body {\n" +
    "            height: 100% !important;\n" +
    "            margin: 0 !important;\n" +
    "            padding: 0 !important;\n" +
    "            width: 100% !important;\n" +
    "        }\n" +
    "\n" +
    "        /* iOS BLUE LINKS */\n" +
    "        a[x-apple-data-detectors] {\n" +
    "            color: inherit !important;\n" +
    "            text-decoration: none !important;\n" +
    "            font-size: inherit !important;\n" +
    "            font-family: inherit !important;\n" +
    "            font-weight: inherit !important;\n" +
    "            line-height: inherit !important;\n" +
    "        }\n" +
    "\n" +
    "        /* MOBILE STYLES */\n" +
    "        @media screen and (max-width:600px) {\n" +
    "            h1 {\n" +
    "                font-size: 32px !important;\n" +
    "                line-height: 32px !important;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        /* ANDROID CENTER FIX */\n" +
    "        div[style*=\"margin: 16px 0;\"] {\n" +
    "            margin: 0 !important;\n" +
    "        }\n" +
    "    </style>\n" +
    "</head>\n" +
    "\n" +
    "<body style=\"background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;\">\n" +
    "    <!-- HIDDEN PREHEADER TEXT -->\n" +
    "    <div style=\"display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;\"> We're thrilled to have you here! Get ready to dive into your new account. </div>\n" +
    "    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n" +
    "        <!-- LOGO -->\n" +
    "        <tr>\n" +
    "            <td bgcolor=\"#303030\" align=\"center\">\n" +
    "                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n" +
    "                    <tr>\n" +
    "                        <td align=\"center\" valign=\"top\" style=\"padding: 40px 10px 40px 10px;\"> </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td bgcolor=\"#303030\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n" +
    "                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;\">\n" +
    "                            <h1 style=\"font-size: 48px; font-weight: 400; margin: 2;\">Welcome!</h1>\n" +
    "                            <a href=\"https://imgbb.com/\"><img src=\"https://i.ibb.co/NtXq62B/1296373-512.png\" alt=\"1296373-512\" width=\"125\" height=\"120\" style=\"display: block; border: 0px;\" /></a>\n" +
    "                            \n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n" +
    "                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 20px 30px 10px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n" +
    "                            <p style=\"margin: 0;\">Here is the verification code you need to complete your registration:</p>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffffff\" align=\"left\">\n" +
    "                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n" +
    "                              <tr>\n" +
    "                                <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"padding: 20px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #FFC61B; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;\">\n" +
    "                            <h1 style=\"font-size: 38px; font-weight: 400; margin: 2;\">" + code + "</h1>\n" +
    "                        </td>\n" +
    "                              </tr>\n" +
    "                            </table>\n" +
    "                        </td>\n" +
    "                    </tr> <!-- COPY -->\n" +
    "                   \n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n" +
    "                            <p style=\"margin: 0;\">If you have any questions, just reply to this email—we're always happy to help out.</p>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #444444; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n" +
    "                            <p style=\"margin: 0;\"><br>Applicato Team</p>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 30px 10px 0px 10px;\">\n" +
    "                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#ffecb3\" align=\"center\" style=\"padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n" +
    "                            <h2 style=\"font-size: 20px; font-weight: 400; color: #111111; margin: 0;\">Need more help?</h2>\n" +
    "                            <p style=\"margin: 0;\"><a href=\"#\" target=\"_blank\" style=\"color: #FFC61B;\">We&rsquo;re here to help you out</a></p>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n" +
    "                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n" +
    "                    <tr>\n" +
    "                        <td bgcolor=\"#f4f4f4\" align=\"left\" style=\"padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;\"> <br>\n" +
    "                            <p style=\"margin: 0;\">If these emails get annoying, please feel free to <a href=\"#\" target=\"_blank\" style=\"color: #111111; font-weight: 700;\">unsubscribe</a>.</p>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</body>\n" +
    "\n" +
    "</html>"
  return htmlCode;
}
