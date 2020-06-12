<template>
  <div id="ChangePasswordPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <v-form ref="form" id="PasswordForm" v-model="valid">
          <div id="OldPasswordInput">
            <v-text-field
              dark
              color="#0793FF"
              v-model="oldPassword"
              label="رمز عبور فعلی"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="InputRules"
              type="password"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
              background-color= "black">
            </v-text-field>
          </div>
          <div id="PasswordInput">
            <v-text-field
              dark
              color="#0793FF"
              v-model="password"
              label="رمز عبور جدید"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="InputRules"
              type="password"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
              background-color= "black">
            </v-text-field>
          </div>
          <div id="PasswordInputRepeat">
            <v-text-field
              dark
              color="#0793FF"
              v-model="passwordRepeat"
              label=" تکرار رمز عبور جدید"
              placeholder=""
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="[rules.confirmMatch, rules.checkEmpty]"
              type="password"
              autocomplete="off"
              readonly
              onfocus="this.removeAttribute('readonly');"
              background-color= "black">
            </v-text-field>
            <v-btn v-on:click="changePass" @click.stop="dialog = false" id="ValidateButton" rounded color="#0793FF" class="validate" :elevation="0">
              تایید
            </v-btn>
            <v-dialog v-model="dialog" max-width="400">
              <v-card id="Card">
                <v-card-title class="headline"> <div id="Success"> عملیات تغییر رمز عبور با موفقیت انجام شد!</div> </v-card-title>
              </v-card>
            </v-dialog>
            </div>
        </v-form>
      </div>
    </div>
    <div class="split right">
      <div class="centered r">
        <div id="Buttons">
          <router-link class="routerLink" :to="{name: 'ApplicantPersonalInfo'}">
            <div id="GeneralInfoButton">
              اطلاعات حساب کاربری
              <span id="Circle1"> 100 </span>
            </div>
            <div id="PasswordInput">
              <v-text-field
                dark
                color="#0793FF"
                v-model="password"
                label="رمز عبور جدید"
                outlined="true"
                rounded="true"
                persistent-hint="true"
                :rules="InputRules"
                type="password"
                background-color= "black">
              </v-text-field>
            </div>
            <div id="PasswordInputRepeat">
              <v-text-field
                dark
                color="#0793FF"
                v-model="passwordRepeat"
                label=" تکرار رمز عبور جدید"
                placeholder=""
                outlined="true"
                rounded="true"
                persistent-hint="true"
                :rules="InputRules"
                type="password"
                background-color= "black">
              </v-text-field>
              <v-btn v-on:click="forgotPassword" @click.stop="dialog = true" id="ValidateButton" rounded color="#0793FF" class="validate" :elevation="0">
                تایید
              </v-btn>
              <v-dialog v-model="dialog" max-width="400">
                <v-card id="Card">
                  <v-card-title class="headline"> <div id="Success"> عملیات تغییر رمز عبور با موفقیت انجام شد!</div> </v-card-title>
                </v-card>
              </v-dialog>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="split right">
      <div class="centered r">
        <div id="Buttons">
          <router-link class="routerLink" :to="{name: 'ApplicantPersonalInfo'}">
            <div id="GeneralInfoButton">
              اطلاعات حساب کاربری
              <span id="Circle1"> 100 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyUniversities'}">
            <div id="MyUniversitiesButton"> دانشگاه‌های من </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyAdvisors'}">
            <div id="MyAdvisorButton"> مشاور من </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantCV'}">
            <div id="CVButton">
              سوابق و مدارک تحصیلی و علمی
              <span id="Circle2"> 43 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantChangePassword'}">
            <div id="ChangePasswordButton"> تغییر رمز عبور </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'Home'}">
            <div id="ExitButton"> <img id="ExitIcon" src="../../assets/Exit.png"/> خروج </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppbarHeader from '../FirstAppbarHeader'
import axios from "axios";

export default {
  components: {
    'app-header': AppbarHeader
  },
  data () {
    return {
      dialog: false,
      oldPassword: '',
      password: '',
      passwordRepeat: '',
      rules: {
        confirmMatch: () => this.confirmMatch ? ('کلمه عبور با تکرار آن همخوانی ندارد') : true,
        checkEmpty: () => this.checkEmpty ? ("تکمیل الزامی است") : true,
      },
      InputRules: [value => !!value || "تکمیل الزامی است"],
    }
  },
  methods: {
    changePass() {
      if (this.password === this.passwordRepeat && (this.password != "" && this.passwordRepeat != "" && this.oldPassword != "")) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
        axios
        .post("http://localhost:8084/changePassword", {
          email: localStorage.getItem("email"),
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            this.dialog = true;
          }
        })
        .catch(error => {
          this.dialog = false;
          console.log(error);
        });
      }
      else {
        this.dialog = false;
      }
    }
  },
  computed: {
    confirmMatch: function() {
      return this.password !== this.passwordRepeat;
    },
    checkEmpty: function() {
      return this.passwordRepeat === "";
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("token")) {
     
    } 
    else {
      this.$router.push({
        name: "SignIn"
      });
    }
  }
}
</script>
<style scoped>
>>>input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s !important;
    -webkit-text-fill-color: #fff !important;
}
.v-text-field >>> label {
    color: white;
  }
  .split {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    /* padding-top: 20px; */
  }

  .left {
    left: 0;
    width: 70%;
    background-image: url("../../assets/STAR.jpg");
    background-repeat: round;
    position: absolute;
  }

  .right {
    right: 0;
    width: 30%;
    background-color: #252525;
  }

  .centered {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .r {
    top: 50%;
    z-index:100;
    width: 100%;
    height: 100%;
  }
  .l {
    top: 45%;
    z-index:100;
    height: 60%;
  }
  #GeneralInfoButton, #MyUniversitiesButton, #MyAdvisorButton, #ChangePasswordButton, #CVButton {
    background-color: #858585;
    height: 100%;
    padding: 4%;
    margin: 5px;
    margin-bottom: 2%;
    color: black;
    border-radius: 20px;
    font-size: 20px;
  }
  #GeneralInfoButton:hover, #MyUniversitiesButton:hover, #MyAdvisorButton:hover, #ChangePasswordButton:hover, #CVButton:hover {
    background-color: #C3C3C3;
  }
  #ChangePasswordButton {
    background-color: #C3C3C3;
  }
  #ExitIcon {
    position: relative;
    top: 6px;
    left: 2px;
  }
  #Buttons {
    display: block;
    top: 75px;
    position: relative;
  }
  #Circle1 {
    display: inline-block;
    width: 28px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    color: green;
    background-color: black;
  }
  #Circle2 {
    display: inline-block;
    width: 28px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    color: red;
    background-color: black;
  }
  #ExitButton {
    background-color: #ff0000;
    padding: 4%;
    margin: 5px;
    display: block;
    bottom: 0;
    position: fixed;
    width: -webkit-fill-available;
    border-radius: 15px;
    font-size: 22px;
  }
  #PasswordForm {
    position: relative;
    top: 100px;
    left: 25%;
  }
  #ValidateButton {
    letter-spacing: 0px;
    width: 50%;
    color: white;
    margin-bottom: 10%;
  }
  #OldPasswordInput {
    /* margin-top: 50%; */
  }
  #OldPasswordInput, #PasswordInput, #PasswordInputRepeat {
    width: 160%;
  }
  #Card {
    background-color: #0793FF;
    border-radius: 30px;
  }
  #Success {
    color: white;
    font-family: "B Koodak";
  }
  .routerLink {
    text-decoration: none;
    color: black;
  }
  #ExitIcon {
    width: 20px;
    height: 20px;
  }
</style>
