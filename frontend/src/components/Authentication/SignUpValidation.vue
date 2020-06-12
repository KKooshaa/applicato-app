<template>
  <div id="SignUpValidationPage">
    <img src="../../assets/Cambridge1.jpg" id="UniversityBackground" />

    <div id="MainContent1" class="split left">
      <div class="UniversityImageInfoPadding">
        <div id="UniversityImageInfo">
          <h1>University of Cambridge</h1>
          <h1>Cambridge, England</h1>
        </div>
      </div>
    </div>

    <div id="MainContent2" class="split right">
      <div class="centered">
        <h1 id="SignUpValidationText">تایید ثبت نام</h1>

        <v-form
          ref="form"
          id="SignUpValidationForm"
          v-model="valid"
          lazy-validation
          autocomplete="off"
        >
          <h2 id="CountDown" v-if="!endCountdown">{{countDownNum}}</h2>

          <h6 id="ValidationText">کد تایید 6 حرفی به آدرس ایمیل شما ارسال شده است</h6>

          <div id="form">
            <div class="code-verification">
              <otp-input v-model="code" class="style-1" size="24" :length="6" pattern="[^0-9]+"></otp-input>
            </div>
            <div id="FormActions">
              <v-btn
                v-on:click="register"
                id="ValidateButton"
                rounded
                color="#00A20C"
                :elevation="0"
              >تایید</v-btn>

              <v-btn
                v-if="endCountdown"
                v-on:click="sendEmail"
                id="ResendCodeButton"
                rounded
                outlined
                color="#00A20C"
                :elevation="0"
              >ارسال مجدد</v-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import OTPInput from "@8bu/vue-otp-input";

const counterTimer = 120;

export default {
  data() {
    return {
      error: null,
      userType: "",
      firstName: this.$route.params.firstName,
      lastName: this.$route.params.lastName,
      email: this.$route.params.email,
      role: this.$route.params.role,
      password: this.$route.params.password,
      passwordRepeat: "",
      code: "",
      endCountdown: false,
      valid: true,
      InputRules: [value => !!value || "تکمیل الزامی است"],
      countDownNum: counterTimer,
      timer: null
    };
  },
  methods: {
    register() {
      console.log(this.$route.params.email);
      console.log(this.code);
      axios
        .post("http://localhost:8084/emailVerification", {
          email: this.email,
          code: this.code
          // email: "zpedram77@gmail.com",
          // code: "PRPDYM",
        })
        .then(response => {
          if (response.data.result) {
            axios
              .post("http://localhost:8084/register", {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                role: this.role
              })
              .then(response => {
                axios
                .post("http://localhost:8084/login", {
                  email: this.email,
                  password: this.password,
                })
                .then(response => {
                  localStorage.setItem('token', response.data.token);
                  localStorage.setItem("email", this.users.email);
                  this.$router.push({
                    name: "Home"
                  });
                })
                .catch(e => {
                  console.log("errors : " + e);
                  console.log("error : " + e);
                  this.$toast(e.message, {
                    color: "red"
                  });
                  this.errors.push(e);
                });
              })
              .catch(e => {
                console.log("errors : " + errors);
                console.log("error : " + error);
                this.$toast(e.message, {
                  color: "red"
                });
                this.errors.push(e);
              });
          } else {
            this.errors.push(Response.data.message);
          }
        })
        .catch(e => {
          this.$toast("کد درست نیست", {
            color: "red"
          });
          this.errors.push(e);
        });
    },
    countDown: function() {
      this.timer = setInterval(() => {
        this.countDownNum--;
        if (this.countDownNum <= 0) {
          clearInterval(this.timer);
          this.endCountdown = true;
        }
      }, 1000);
    },
    sendEmail() {
      this.email = "zpedram77@gmail.com";
      if (!(this.email === "")) {
        axios
          .post("http://localhost:8084/sendEmail", {
            email: this.email
          })
          .then(response => {
            if (response.status === 200) {
              this.countDownNum = counterTimer;
              this.endCountdown = false;
              this.countDown();
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    }
  },
  mounted: function() {
    this.countDown();
  },
  components: {
    "otp-input": OTPInput
  },
  beforeCreate : function() {
    if (localStorage.getItem("token")) {
      this.$router.push({
        name: "Home",
      });
    }
    else {
    }  
  },
};
</script>

<style scoped>
.code-verification {
  text-align: center;
  vertical-align: middle;
  display: inline-table;
}

>>> application ul {
  padding-left: 0 !important;
}

>>> input {
  outline-width: 0;
  width: 45px;
  height: 45px;
  text-align: center;
}

>>> .otp-input-8-field {
  background-color: rgb(168, 168, 168);
  border-style: none;
  color: black;
  height: 45px;
  width: 45px;
  border: 0;
  border-radius: 50px;
  text-align: center;
  margin: 4px;
  text-decoration: underline;
  outline-width: 0 !important;
}

.style-1 {
  direction: ltr;
  display: flex;
  padding: 0;
  margin-bottom: 40px;
  list-style-type: none;
}

.split {
  height: 100%;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}
.left {
  left: 0;
  width: 67%;
}
.right {
  right: 0;
  width: 33%;
}
body #SignUpValidationPage {
  overflow: hidden;
  background-color: #171717;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
body {
  overflow: hidden;
  position: fixed;
}
#MainContent1 {
  float: left;
  height: 100%;
}
#MainContent2 {
  float: right;
  background-color: #303030;
  direction: ltr;
  height: 100%;
  opacity: 0.95;
  display: flex;
}
.centered {
  margin: auto;
  padding: 100px 7% 50px 7%;
  width: 100%;
  direction: rtl;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 33%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, 0%);
}
#CountDown {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  color: white;
}
#ResendCodeButton {
  letter-spacing: 0px;
  font-family: "B Koodak";
  font-weight: bold;
  width: 145px;
  height: 45px;
  vertical-align: middle;
  text-align: center;
  font-size: 22px;
  margin: 5px;
}
/* input {
  margin: 0 3px;
  margin-top: 20px;
  margin-bottom: 70px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border: solid 1px #ccc;
  box-shadow: 0 0 5px #ccc inset;
  outline: none;
  width: 10%;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  color: white;
  background-color: #9f9f9f;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px blue inset;
  }

  &::selection {
    background: transparent;
  }
} */

#SignUpValidationText {
  flex-shrink: 1;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  color: white;
  opacity: 1;
  padding-bottom: 30px;
}
#ValidateButton {
  letter-spacing: 0px;
  font-family: "B Koodak";
  background-color: #ffc61b;
  font-weight: bold;
  width: 145px;
  height: 45px;
  vertical-align: middle;
  text-align: center;
  font-size: 22px;
  margin: 5px;
}
#FormActions {
  padding-top: 20px;
  opacity: 1;
}
#ValidationText {
  color: white;
  padding-bottom: 40px;
  font-size: 19px;
}
.UniversityImageInfoPadding {
  padding-top: 60px;
  padding-right: 3px;
}
#UniversityImageInfo {
  background: #ffffff2e;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: xx-small;
  min-width: 200px;
  max-width: fit-content;
  position: relative;
  right: 10px;
  color: black;
  font-family: "Alegreya Sans SC", Courier, monospace;
}
#UniversityBackground {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 50px;
}
</style>
