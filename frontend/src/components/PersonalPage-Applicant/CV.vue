<template>
  <div id="GeneralInfoPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
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
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      axios
        .get("http://localhost:8084/education/show", {
          email: localStorage.getItem("email"),
        })
        .then(response => {
          if (response.status === 200) {
            
          }
        })
        .catch(error => {
          console.log(error);
        });
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
  .split {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
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
    /* top: 50%; */
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
    top: 35%;
    z-index:100;
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
  #CVButton {
    background-color: #C3C3C3;
  }
  #ExitIcon {
    position: relative;
    top: 6px;
    left: 2px;
    width: 20px;
    height: 20px;
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
  .routerLink {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 500px) {

  }
  @media only screen and (max-width: 1500px) {

  }
  @media only screen and (max-width: 962.5px) {

  }
  @media only screen and (max-width: 940px) {

  }
  @media only screen and (max-width: 500px) {

  }
  @media only screen and (max-width: 480px) {

  }
  @media only screen and (max-width: 240px) {

  }
</style>
