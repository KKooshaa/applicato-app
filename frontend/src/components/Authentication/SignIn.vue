<template>
  <div id="SignInPage">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <img src="../../assets/UofT.jpg" id="UniversityBackground" />

    <div id="MainContent1" class="split left">
      <div class="Centered">
        <h1 id="SignInText">ورود به اپلیکاتو</h1>

        <v-form ref="form" id="SignInForm" v-model="valid">
          <div id="EmailInput">
            <v-text-field
              :class="{ 'input-group--dirty': dirtyEmail }"
              dark
              v-model="users.email"
              label="ایمیل"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="EmailRules"
              background-color="#3F4142"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
            ></v-text-field>
            <img id="EmailIcon" src="../../assets/EmailIcon.png" />
          </div>
          <div id="PasswordInput">
            <v-text-field
              :class="{ 'input-group--dirty': dirtyPwd }"
              dark
              v-model="users.password"
              label="رمز عبور"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="PasswordRules"
              type="password"
              background-color="#3F4142"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
            ></v-text-field>
            <img id="KeyIcon" src="../../assets/Key.png" />
          </div>

          <v-btn v-on:click="forgotPassword" text id="ForgetPassword">رمز عبور خود را فراموش کرده‌ام</v-btn>

          <div id="FormActions">
            <!-- <router-link :to="{name: 'UniversitiesDetailView'}" id="SignInButtonLink"> -->
            <v-btn
              id="SignInButton"
              v-on:click="login"
              rounded
              color="#FFC61B"
              class="validate"
              :elevation="0"
            >
              ورود
              <img id="SignInIcon" src="../../assets/Icons/login-button.png" />
            </v-btn>
            <!-- </router-link> -->
          </div>
        </v-form>
      </div>
    </div>

    <div id="MainContent2" class="split right">
      <div class="centered">
        <!-- <img src="../../assets/McGill.jpg" id="UniversityBackground"> -->
        <div class="UniversityImageInfoPadding">
          <div id="UniversityImageInfo">
            <h1>University of Toronto</h1>
            <h1>Toronto, Canada</h1>
          </div>
        </div>
        <div id="ImagesText">
          <div class="center">
            <router-link :to="{name: 'SignUp'}" id="SignUpLink">
              <v-btn id="SignUpButton" rounded color="#FFC61B" :elevation="hover ? 24 : 6">
                ثبت نام
                <img id="SignUpIcon" src="../../assets/Icons/login-button.png" />
              </v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      users: {
        email: "",
        password: ""
      },
      dirtyPwd: null,
      dirtyEmail: null,
      error: null,
      valid: true,
      EmailRules: [
        value => !!value || "تکمیل الزامی است",
        value => /.+@.+\..+/.test(value) || "ایمیل باید درست باشد"
      ],
      PasswordRules: [value => !!value || "تکمیل الزامی است"]
    };
  },
  methods: {
    login() {
      if (!(this.users.email === "" || this.users.password === "")) {
        axios
          .post("http://localhost:8084/login", {
            email: this.users.email,
            password: this.users.password
          })
          .then(response => {
            if (response.status === 200) {
              localStorage.setItem('token', response.data.token);
              localStorage.setItem("email", this.users.email);
              this.$toast("خوش آمدید", {
                color: "green"
              });
              this.users = [...response.data];
              this.$router.push({
                name: "Home",
                params: {
                  loggedIn: true,
                }
              });
            } else {
              this.$toast("خوش نیامدید", {
                color: "red"
              });
            }
          })
          .catch(error => {
            this.$toast("خوش نیامدید", {
              color: "red"
            });
            console.log(error);
          });
      } else {
      }
    },
    forgotPassword() {
      if (!(this.users.email === "")) {
        axios
          .post("http://localhost:8084/sendEmail", {
            email: this.users.email
          })
          .then(response => {
            if (response.status === 200) {
              this.$router.push({
                name: "RenewPassword",
                params: {
                  email: this.users.email,
                }
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    }
  },
  mounted () {
    let times = 0;
    const interval = setInterval(() => {
      times += 1;
      if ((this.dirtyPwd && this.dirtyRePwd) || times === 20) {
        clearInterval(interval);
      }
      this.dirtyPwd = document.querySelector('input[type="password"]:-webkit-autofill');
      this.dirtyEmail = document.querySelector('input[type="password"]:-webkit-autofill');
    }, 100);
  },
  beforeCreate : function() {
    if (localStorage.getItem("token")) {
      this.$router.push({
        name: "Home",
      });
    }
    else {
    }  
  }
};
</script>

<style scoped>
>>>input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s !important;
    -webkit-text-fill-color: #fff !important;
}
html {
  overflow: hidden;
}
.split {
  height: 100%;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}
.left {
  left: 0;
  width: 33%;
}
.right {
  right: 0;
  width: 67%;
}
body #SignInPage {
  background-color: #171717;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
body {
  position: fixed;
}
#MainContent1 {
  float: left;
  background-color: #303030;
  height: 100%;
  opacity: 0.95;
  display: flex;
}
#MainContent2 {
  float: left;
  height: 100%;
}
.Centered {
  margin: auto;
  padding: 100px 7% 50px 7%;
  width: 100%;
  direction: rtl;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  right: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(0%, 0%);
}
#EmailInput,
#PasswordInput {
  display: inline-flex;
  width: 100%;
  padding-left: 12%;
  padding-right: 12%;
  margin-right: 15px;
}
#KeyIcon {
  width: 30px;
  height: 30px;
  position: relative;
  top: 13px;
  left: 40px;
}
#EmailIcon {
  width: 30px;
  height: 30px;
  position: relative;
  top: 13px;
  left: 40px;
}
#SignInText {
  flex-shrink: 1;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  color: white;
  margin-bottom: 45px;
  opacity: 1;
}
#SignInButton {
  letter-spacing: 0px;
  width: 145px;
  height: 45px;
  font-weight: bold;
  position: relative;
  font-size: 22px;
  background-color: #ffc61b;
}
#SignInButtonRouter {
  text-decoration: none;
}
#FormActions {
  position: relative;
  opacity: 1;
}
#ForgetPassword {
  letter-spacing: 0px;
  color: #ffc61b;
  font-size: 14px;
  position: relative;
  bottom: 10px;
  font-family: "B Koodak";
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
#SignUpButton {
  letter-spacing: 0px;
  font-family: "B Koodak";
  background-color: #ffc61b;
  font-weight: bold;
  width: 145px;
  height: 45px;
  vertical-align: middle;
  text-align: center;
  font-size: 22px;
}
#SignUpLink {
  text-decoration: none;
}
#SignUpIcon {
  width: 15px;
  position: relative;
  right: 8px;
}
#SignInIcon {
  width: 15px;
  position: relative;
  right: 8px;
}
#ForgetPasswordLink {
  text-decoration: none;
}
#SignInButtonLink {
  text-decoration: none;
}
</style>
