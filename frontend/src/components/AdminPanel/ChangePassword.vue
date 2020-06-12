<template>
  <div id="ChangePasswordPage">
    <app-header v-bind:loggedIn="signIn"/>
    <div class="split left">
      <div class="centered l">
        <v-form ref="form" id="PasswordForm" v-model="valid">
          <div id="OldPasswordInput">
            <v-text-field
              dark
              color="#0793FF"
              v-model="password"
              label="رمز عبور فعلی"
              outlined="true"
              rounded="true"
              persistent-hint="true"
              :rules="InputRules"
              type="password"
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
        </v-form>
      </div>
    </div>
    <div class="split right">
      <div class="centered r">
        <div id="Buttons">
          <router-link class="routerLink" :to="{name: 'AdminSearchUsers'}">
            <div id="EditUsersButton">
              تغییر اطلاعات کاربر
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'AdminEmailVerification'}">
            <div id="EmailVerificationButton"> تایید ایمیل‌ها </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'AdminChangePassword'}">
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
  export default {
    components: {
      'app-header': AppbarHeader
    },
    data () {
      return {
        signIn: true,
        dialog: false
      }
    },
    beforeCreate : function() {
      if (localStorage.getItem("token")) {
        this.signIn = false
      }
      else {
        this.signIn = true;
      }
    },
  }
</script>
<style scoped>
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
  #EmailVerificationButton, #EditUsersButton, #ChangePasswordButton {
    background-color: #858585;
    height: 100%;
    padding: 4%;
    margin: 5px;
    margin-bottom: 2%;
    color: black;
    border-radius: 20px;
    font-size: 20px;
  }
  #EmailVerificationButton:hover, #EditUsersButton:hover {
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
