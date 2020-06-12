<template>
  <div id="ChangePasswordPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <div id="SearchUser">
          <div id="SearchUser1"> <label for="searchUserText" class="searchUserText"> <img id="SearchIcon" src="../../assets/SearchIcon.png"/>  جستجوی کاربر </label> </div>
          <div id="SearchUser2"> <v-text-field
            color="#0793FF"
            dark
            outlined="true"
            rounded="true"
            persistent-hint="true"
            background-color="black"
            autocomplete="off"
            justify-center>
          </v-text-field> </div>
        </div>
        <div id="Users">
          <div v-for="applicant in applicants" :key="applicant.name">
            <router-link :to="{name: 'EditApplicantPersonal'}">
              <div id="View">
                <v-btn height="30" depressed id="List" color="#202020"> <div id="ListView"> {{applicant.name}} </div> </v-btn>
                <v-btn height="30" depressed id="Details" color="#C3C3C3"> <div id="DetailsView">  {{applicant.type}} </div> </v-btn>
              </div>
            </router-link>
          </div>
          <div v-for="advisor in advisors" :key="advisor.name">
            <router-link :to="{name: 'EditAdvisorPersonal'}">
              <div id="View">
                <v-btn height="30" depressed id="List" color="#202020"> <div id="ListView"> {{advisor.name}} </div> </v-btn>
                <v-btn height="30" depressed id="Details" color="#C3C3C3"> <div id="DetailsView">  {{advisor.type}} </div> </v-btn>
              </div>
            </router-link>
          </div>
        </div>
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
        dialog: false,
        applicants: [
          {
            name: 'کوشا  کبیری',
            type: 'دانشجو/ دانش‌آموز '
          },
          {
            name: 'سارا روحانی',
            type: 'دانشجو/ دانش‌آموز '
          },
          {
            name: 'رضوان کرجی',
            type: 'دانشجو/ دانش‌آموز '
          },
          {
            name: 'پدرام زین',
            type: 'دانشجو/ دانش‌آموز '
          }
        ],
        advisors: [
          {
            name: 'امین غیبی',
            type: 'مشاور'
          }
        ]
      }
    }
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
  #EmailVerificationButton:hover, #ChangePasswordButton:hover {
    background-color: #C3C3C3;
  }
  #EditUsersButton{
    background-color: #C3C3C3;
  }
  #ExitIcon {
    position: relative;
    top: 6px;
    left: 2px;
  }
  #Buttons {
    display: block;
    position: relative;
    height: 100%;
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
  #ExitIcon {
    width: 20px;
    height: 20px;
  }
  #SearchIcon {
    width: 40px;
    height: 40px;
    position: relative;
    left: 5px;
    top: 17px;
  }
  .searchUserText {
    color: white;
    position: relative;
    left: 10px;
    bottom: 10px;
  }
  #SearchUser {
    width: 220%;
    position: relative;
    left: 70%;
  }
  #SearchUser {
    float: right;
  }
  #SearchUser1 {
    float: right;
  }
  #View {
    color: white;
    float: right;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -2%;
    margin-left: 10px;
    /* width: 100%; */
    margin-top: 20px;
    position: relative;
    right: 0;
  }
  #List {
    border-radius: 20px;
    margin-right: -5px;
    letter-spacing: 0px;
    /* padding-left: 20%;
    padding-right: 20%; */
    padding-left: 30px;
  }
  #ListView {
    text-decoration: none;
    color: white;
  }
  #DetailsView {
    text-decoration: none;
    color: #202020;
  }
  #Details {
    border-radius: 20px;
    margin-right: -5px;
    letter-spacing: 0px;
    /* padding-left: 20%;
    padding-right: 20%; */
    position: relative;
    left: 15px;
  }
  #Users {
    position: relative;
    top: 5%;
  }
  @media screen and (max-width: 800px) {
    #SearchUser1 {
      /* width: 100%; */
      margin-top: 0;
      position: relative;
      right: 40%;
    }
    #SearchUser2 {
      width: 80%;
      position: relative;
      top: 50px;
      left: 0px;
    }
  }
</style>
