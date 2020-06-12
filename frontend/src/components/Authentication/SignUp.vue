<template>
  <div id="SignUpPage">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <img src="../../assets/Cambridge1.jpg" id="UniversityBackground" />

    <div id="MainContent1" class="split left">
      <div class="UniversityImageInfoPadding">
        <div id="UniversityImageInfo">
          <h1>University of Cambridge</h1>
          <h1>Cambridge, England</h1>
        </div>
      </div>
      <div id="ImagesText">
        <div class="center">
          <router-link :to="{name: 'SignIn'}" id="SignInLink">
            <v-btn id="SignInButton" rounded :elevation="hover ? 24 : 6">
              ورود
              <img id="SignInIcon" src="../../assets/Icons/login-button.png" />
            </v-btn>
          </router-link>
        </div>
        <router-link to="signin" id="SignInLink"></router-link>
      </div>
    </div>

    <div id="MainContent2" class="split right">
      <div class="centered">
        <h1 id="SignUpText">ثبت نام در اپلیکاتو</h1>

        <v-form ref="form" id="SignUpForm" v-model="valid" autocomplete="off">
          <div id="RoleInput">
            <toggle-switch
              :options="option"
              @change="updateMap($event.value)"
              @selected="selectedMethod()"
              v-model="selectedMapOption"
              :value="selectedMapOption"
            />
          </div>

          <div class="container">
            <div class="horizontal" id="FirstNameInput">
              <v-text-field
                height="50px"
                dark
                v-model="firstName"
                label="نام"
                outlined="true"
                rounded="true"
                persistent-hint="true"
                :rules="FirstNameRules"
                required
                background-color="#3F4142"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly');"
              ></v-text-field>
            </div>
            <div class="horizontal" id="LastNameInput">
              <v-text-field
                height="50px"
                dark
                v-model="lastName"
                label="نام خانوادگی"
                outlined="true"
                rounded="true"
                persistent-hint="true"
                :rules="LastNameRules"
                required
                background-color="#3F4142"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly');"
              ></v-text-field>
            </div>
          </div>

          <div id="EmailInput">
            <v-text-field
              dark
              v-model="email"
              label="ایمیل"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="EmailRules"
              required
              background-color="#3F4142"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
            ></v-text-field>
          </div>
          <div id="PasswordInput">
            <v-text-field
              :class="{ 'input-group--dirty': dirtyPwd }"
              dark
              v-model="password"
              label="رمز عبور"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="PasswordRules"
              type="password"
              required
              background-color="#3F4142"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
            ></v-text-field>
          </div>
          <div id="PasswordRepeatInput">
            <v-text-field
              :class="{ 'input-group--dirty': dirtyRePwd }"
              dark
              v-model="passwordRepeat"
              label=" تکرار رمز عبور"
              outlined="true"
              rounded="true"
              clearable
              persistent-hint="true"
              :rules="[rules.confirmMatch, rules.checkEmpty]"
              type="password"
              required
              background-color="#3F4142"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
            ></v-text-field>
          </div>

          <div id="FormActions">
            <!-- <router-link :to="{name: 'SignUpValidation'}" id="SignUpButtonLink"> -->
            <v-btn id="SignUpButton" v-on:click="register" rounded color="#FFC61B" :elevation="0">
              ثبت نام
              <img id="SignUpIcon" src="../../assets/Icons/login-button.png" />
            </v-btn>

            <!-- </router-link> -->
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import ToggleSwitch from "../ToggleSwitch.vue";

export default {
  data() {
    return {
      selectedMapOption: "",
      error: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      valid: true,
      role: "",
      dirtyPwd: null,
      dirtyRePwd: null,
      salam: false,
      rules: {
        confirmMatch: () => (this.confirmMatch ? "کلمه عبور با تکرار آن همخوانی ندارد" : true),
        checkEmpty: () => (this.checkEmpty ? "تکمیل الزامی است" : true)
      },
      FirstNameRules: [value => !!value || "تکمیل الزامی است"],
      LastNameRules: [value => !!value || "تکمیل الزامی است"],
      EmailRules: [
        value => !!value || "تکمیل الزامی است",
        value => /.+@.+\..+/.test(value) || "ایمیل باید درست باشد"
      ],
      PasswordRules: [value => !!value || "تکمیل الزامی است"]
    };
  },
  methods: {
    register() {
      if (this.selectedMapOption === "مشاور") {
        this.selectedMapOption = "advisor";
      } else {
        this.selectedMapOption = "applicant";
      }

      axios
      .post("http://localhost:8084/checkEmail", {
        email: this.email
      })
      .then(response => {
        if (response.data.result) {
        axios
          .post("http://localhost:8084/sendEmail", {
            email: this.email
          })
          .then(response => {
            this.$router
              .push({
                name: "SignUpValidation",
                params: {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  password: this.password,
                  role: this.selectedMapOption
                }
              })
              .catch(e => {
                this.errors.push(e);
              });
          });
        } 
        else {
          this.$toast("این ایمیل قبلا استفاده شده", {
            color: "red"
          });
        }
      });
    }
  },
  components: {
    ToggleSwitch
  },
  created() {
    this.option = {
      layout: {
        color: "#bfbfbf",
        backgroundColor: "#3b3d3e",
        selectedColor: "lightgray",
        selectedBackgroundColor: "lightgray",
        borderColor: "#545556",
        fontFamily: "B Koodak",
        fontWeight: "normal",
        squareCorners: false,
        noBorder: false
      },
      size: {
        fontSize: 1.05,
        height: 3.7,
        padding: 1,
        width: 300
      },
      items: {
        delay: 0.4,
        preSelected: "unknown",
        disabled: false,
        labels: [
          { name: "مشاور", color: "white", backgroundColor: "#57595b" },
          {
            name: "دانشجو | دانش‌آموز",
            color: "white",
            backgroundColor: "#57595b"
          }
        ]
      }
    };
  },
  mounted() {
    console.log("pass " + this.password);
    let times = 0;
    const interval = setInterval(() => {
      times += 1;
      if ((this.dirtyPwd && this.dirtyRePwd) || times === 20) {
        clearInterval(interval);
      }
      this.dirtyPwd = document.querySelector(
        'input[type="password"]:-webkit-autofill'
      );
      this.dirtyRePwd = document.querySelector(
        'input[type="password"]:-webkit-autofill'
      );
    }, 100);
  },
  computed: {
    confirmMatch: function() {
      return this.password !== this.passwordRepeat;
    },
    checkEmpty: function() {
      return this.passwordRepeat === "";
    }
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
>>> .vts .v-snack__content {
  justify-content: center;
  text-align: center !important;
  display: block !important;
}

>>> input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s !important;
  -webkit-text-fill-color: #fff !important;
}
html {
  overflow: hidden !important;
}
#RoleInput {
  direction: ltr;
}
div.container {
  width: 100%;
}
.horizontal {
  float: right;
  width: 50%;
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
body #SignUpPage {
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
  height: 100%;
  opacity: 0.95;
  direction: ltr;
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
#Role {
  bottom: 10px;
}
#St {
  width: 172.95px;
  letter-spacing: 0px;
}
#Advisor {
  width: 172.95px;
  letter-spacing: 0px;
}
#EmailInput,
#PasswordInput,
#PasswordRepeatInput {
  display: inline-flex;
  width: 100%;
  padding-left: 12%;
  padding-right: 12%;
}
#SignUpText {
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
#SignUpButton {
  letter-spacing: 0px;
  width: 145px;
  height: 45px;
  font-weight: bold;
  position: relative;
  font-size: 22px;
  background-color: #ffc61b;
}
#SignUpButtonRouter {
  text-decoration: none;
}
#FormActions {
  position: relative;
  opacity: 1;
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
#FirstNameInput {
  width: 40%;
  margin-left: 1%;
  padding-right: 10%;
}
#LastNameInput {
  width: 59%;
  padding-left: 10%;
}
#SignInButton {
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
#SignInLink {
  text-decoration: none;
}
#SignInIcon {
  width: 15px;
  position: relative;
  right: 8px;
}
#SignUpIcon {
  width: 15px;
  position: relative;
  right: 8px;
}
#SignInButtonLink {
  text-decoration: none;
}
</style>
