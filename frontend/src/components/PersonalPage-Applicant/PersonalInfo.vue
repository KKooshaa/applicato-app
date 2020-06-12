<template>
  <div id="GeneralInfoPage">
    <app-header />
    <div class="split left">
      <div class="centered l">
        <v-form ref="form" id="GeneralInfoForm" v-model="valid">
          <div id="Form">
            <div id="SideBySide">
              <div class="row fNameRes">
                <div class="col-25">
                  <label for="firstName">نام</label>
                </div>
                <div class="col-50 fName">
                  <v-text-field
                    disabled
                    :label="users.firstName"
                    id="firstName"
                    dark
                    outlined="true"
                    rounded="true"
                    background-color="black"
                    justify-center
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-75">
                  <label for="lastName">نام خانوادگی</label>
                </div>
                <div class="col-100 lName">
                  <v-text-field
                    disabled
                    id="lastName"
                    :label="users.lastName"
                    dark
                    outlined="true"
                    rounded="true"
                    background-color="black"
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="row emailDiv">
              <div class="col-25e eWidth">
                <label class="emailLabel" for="email">
                  ایمیل
                  <div id="UniveristyEmail">دانشگاهی</div>
                </label>
              </div>
              <div class="col-75e email">
                <v-text-field
                  disabled
                  id="email"
                  :label="users.email"
                  dark
                  outlined="true"
                  rounded="true"
                  background-color="black"
                ></v-text-field>
              </div>
            </div>
            <div id="SideBySide">
              <div class="row">
                <div class="col-25">
                  <label for="gender">جنسیت</label>
                </div>
                <div class="col-50 gender">
                  <v-text-field
                    disabled
                    id="gender"
                    :label="users.gender"
                    dark
                    outlined="true"
                    rounded="true"
                    background-color="black"
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-75">
                  <label for="DOfBirth">تاریخ تولد</label>
                </div>
                <div class="col-100 DOfBirth">
                  <v-text-field
                    disabled
                    id="DOfBirth"
                    :label="users.birthDate"
                    dark
                    rounded
                    outlined
                    background-color="black"
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
          <router-link :to="{name: 'ApplicantEditProfile'}" id="EditProfileLink">
            <v-btn rounded outlined id="Update">
              <img id="PencilIcon" src="../../assets/pencil.png" /> ویرایش
            </v-btn>
          </router-link>
        </v-form>
      </div>
    </div>
    <div class="split right">
      <div class="centered r">
        <div id="Buttons">
          <router-link class="routerLink" :to="{name: 'ApplicantPersonalInfo'}">
            <div id="GeneralInfoButton">
              اطلاعات حساب کاربری
              <span id="Circle1">100</span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyUniversities'}">
            <div id="MyUniversitiesButton">دانشگاه‌های من</div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyAdvisors'}">
            <div id="MyAdvisorButton">مشاور من</div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantCV'}">
            <div id="CVButton">
              سوابق و مدارک تحصیلی و علمی
              <span id="Circle2">43</span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantChangePassword'}">
            <div id="ChangePasswordButton">تغییر رمز عبور</div>
          </router-link>
        </div>
        <router-link class="routerLink" :to="{name: 'Home'}">
          <div id="ExitButton" v-on:click="signOut">
            <img id="ExitIcon" src="../../assets/Exit.png" /> خروج
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppbarHeader from "../FirstAppbarHeader";
import axios from "axios";

export default {
  components: {
    "app-header": AppbarHeader
  },
  data() {
    return {
      disabled: true,
      users: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        birthDate: ""
      }
    };
  },
  methods: {
    signOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  },
  beforeCreate: function() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
      axios
        .post("http://localhost:8084/showProfile", {
          email: localStorage.getItem("email"),
        })
        .then(response => {
          if (response.status === 200) {
            this.users.firstName = response.data.firstName;
            this.users.lastName = response.data.lastName;
            this.users.email = response.data.email;
            this.users.gender = response.data.gender;
            this.users.birthDate = response.data.birthDate;
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.$router.push({
        name: "SignIn"
      });
    }
  }
}
</script>
<style scoped>
.v-text-field >>> label {
  color: white;
}
:disabled {
  color: red !important;
}
/* .v-text-field__slot[data-v-40cefe54] input {
   text-align: center;
} */
/* .v-input--is-disabled.v-text-field--outline .v-input__slot {
  border-color: red;
} */

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
  z-index: 100;
  width: 100%;
  height: 100%;
}
.l {
  top: 50%;
  z-index: 100;
  height: 70%;
}
#GeneralInfoButton,
#MyUniversitiesButton,
#MyAdvisorButton,
#ChangePasswordButton,
#CVButton {
  background-color: #858585;
  height: 100%;
  padding: 4%;
  margin: 5px;
  margin-bottom: 2%;
  color: black;
  border-radius: 20px;
  font-size: 20px;
}
#GeneralInfoButton:hover,
#MyUniversitiesButton:hover,
#MyAdvisorButton:hover,
#ChangePasswordButton:hover,
#CVButton:hover {
  background-color: #c3c3c3;
}
#GeneralInfoButton {
  background-color: #c3c3c3;
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
#PencilIcon {
  width: 20px;
  height: 20px;
  position: relative;
  left: 3px;
}
#GeneralInfoForm {
  position: relative;
  width: 170%;
  left: 40%;
  top: 0%;
  padding-top: 5%;
}
#Update {
  color: #ffc61b;
  position: absolute;
  top: 180%;
  left: 0px;
  letter-spacing: 0px;
  width: 15%;
  margin-bottom: 10px;
}
#Update:hover {
  background-color: #222221;
}
#SideBySide {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
#SideBySide label {
  margin: 5px 10px 5px 0;
}
#SideBySide input {
  vertical-align: middle;
}
#UniveristyEmail {
  color: #00a215;
  font-size: 12px;
}
label {
  padding: 12px 12px 12px 12px;
  display: inline-block;
  color: white;
  font-size: 90%;
}
.col-25 {
  float: left;
  width: 25%;
  margin-top: 1%;
}
.col-50 {
  float: left;
  width: 75%;
  margin-top: 1%;
}
.col-75 {
  float: left;
  width: 25%;
  margin-top: 1%;
}
.col-100 {
  float: left;
  width: 75%;
  margin-top: 1%;
}
.col-25e {
  float: left;
  width: 12%;
  margin-top: 1%;
}
.col-75e {
  float: left;
  width: 87.5%;
  margin-top: 1%;
}
.fName {
  width: 40%;
}
.gender {
  width: 38%;
  position: relative;
  left: 1.5%;
}
.lName {
  width: 73%;
}
.DOfBirth {
  position: relative;
  left: 2%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.routerLink {
  text-decoration: none;
  color: black;
}
@media only screen and (max-width: 962.5px) {
  .col-25,
  .col-75,
  .col-75e {
    width: 20%;
  }
  .col-50,
  .col-100,
  .col-75e {
    width: 80%;
  }
  .eWidth {
    position: relative;
    right: 5%;
  }
  .email {
    position: relative;
    right: 8%;
  }
  #Update {
    /* top: 120%; */
    margin-bottom: 6%;
  }
}
@media screen and (max-width: 500px) {
  .col-25,
  .col-50,
  .col-75,
  .col-100,
  .col-25e,
  .col-75e {
    width: 100%;
    margin-top: 0;
    right: 5px;
  }
  .r {
    top: 48%;
  }
  #Update {
    color: #FFC61B;
    position: absolute;
    top: 180%;
    left: 0px;
    letter-spacing: 0px;
    width: 15%;
    margin-bottom: 10px;
  }
  #Update:hover {
    background-color: #222221;
  }
  #SideBySide {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  #SideBySide label {
    margin: 5px 10px 5px 0;
  }
  #SideBySide input {
    vertical-align: middle;
  }
  #UniveristyEmail {
    color: #00A215;
    font-size: 12px;
  }
  label {
    padding: 12px 12px 12px 12px;
    display: inline-block;
    color: white;
    font-size: 90%;
  }
  .col-25 {
    float: left;
    width: 25%;
    margin-top: 1%;
  }
  .col-50 {
    float: left;
    width: 75%;
    margin-top: 1%;
  }
  .col-75 {
    float: left;
    width: 25%;
    margin-top: 1%;
  }
  .col-100 {
    float: left;
    width: 75%;
    margin-top: 1%;
  }
  .col-25e {
    float: left;
    width: 12%;
    margin-top: 1%;
  }
  .col-75e {
    float: left;
    width: 87.5%;
    margin-top: 1%;
  }
  .fName {
    width: 40%;
  }
  .gender {
    width: 38%;
    position: relative;
    left: 1.5%;
  }
  .lName {
    width: 73%;
  }
  .DOfBirth {
    position: relative;
    left: 2%;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .routerLink {
    text-decoration: none;
    color: black;
  }
  @media only screen and (max-width: 962.5px) {
    .col-25, .col-75, .col-75e {
      width: 20%;
    }
    .col-50, .col-100, .col-75e {
      width: 80%;
    }
    .eWidth {
      position: relative;
      right: 5%;
    }
    .email {
      position: relative;
      right: 8%;
    }
    #Update {
      /* top: 120%; */
      margin-bottom: 6%;
    }
  }
  @media screen and (max-width: 500px) {
    .col-25, .col-50, .col-75, .col-100, .col-25e, .col-75e {
      width: 100%;
      margin-top: 0;
      right: 5px;
    }
    #Update {
      /* top: 120%; */
      margin-bottom: 10%;
    }
  }
}
</style>