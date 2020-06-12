<template>
  <div id="ChangePasswordPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <v-form ref="form" id="GeneralInfoForm" v-model="valid">
          <div id="SideBySide">
            <div class="row fNameRes">
              <div class="col-25">
                <label for="firstName"> نام </label>
              </div>
              <div class="col-50 fName">
                <v-text-field
                  v-model="users.firstName"
                  id="firstName"
                  color="#0793FF"
                  dark
                  outlined="true"
                  rounded="true"
                  persistent-hint="true"
                  background-color="black"
                  autocomplete="off"
                  justify-center
                >
                  <template v-slot:append>
                    <img width="24" height="24" id="PencilIcon" src="../../assets/pencil.png" alt="">
                  </template>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-75">
                <label for="lastName">نام خانوادگی</label>
              </div>
              <div class="col-100 lName">
                <v-text-field
                  v-model="users.lastName"
                  id="lastName"
                  color="#0793FF"
                  dark
                  outlined="true"
                  rounded="true"
                  persistent-hint="true"
                  background-color="black"
                  autocomplete="off"
                > <template v-slot:append>
                  <img width="24" height="24" id="PencilIcon" src="../../assets/pencil.png" alt="">
                </template>
                </v-text-field>
              </div>
            </div>
          </div>
          <div class="row emailDiv">
            <div class="col-25e eWidth">
              <label class="emailLabel" for="email"> ایمیل <div id="UniveristyEmail"> دانشگاهی </div> </label>
            </div>
            <div class="col-75e email">
              <v-text-field
                v-model="users.email"
                id="email"
                color="#0793FF"
                dark
                :rules="EmailRules"
                outlined="true"
                rounded="true"
                persistent-hint="true"
                background-color="black"
                autocomplete="off"
                disabled
              >
              </v-text-field>
            </div>
          </div>
          <div id="SideBySide">
            <div class="row">
              <div class="col-25">
                <label for="gender">جنسیت</label>
              </div>
              <div class="col-50 gender">
                <v-select
                  v-model="users.gender"
                  id="gender"
                  color="#0793FF"
                  :items="items"
                  outlined
                  dark
                  rounded
                  background-color= "black"
                >
                  <template v-slot:append>
                    <img width="24" height="24" id="TriangleIcon" src="../../assets/triangle.png" alt="">
                  </template> </v-select>
              </div>
            </div>
            <div class="row">
              <div class="col-75">
                <label id="DOfBirthLabel" for="DOfBirth">تاریخ تولد</label>
              </div>
              <div class="col-100 DOfBirth">
                <v-text-field
                  type="text"
                  class="form-control form-control-lg"
                  v-model="users.birthDate"
                  id="my-custom-input"
                  placeholder="select date"
                  color="#0793FF"
                  v-on="on"
                  dark
                  rounded
                  outlined
                  background-color="black"
                > <template v-slot:append>
                  <img width="24" height="24" id="TriangleIcon" src="../../assets/triangle.png" alt="">
                </template> </v-text-field>

                <date-picker
                  format="jYYYY/jMM/jDD"
                  element="my-custom-input"
                  v-model="users.birthDate"
                  id="DOfBirth"
                  color="#5c6bc0"
                  v-on="on"
                  dark
                  rounded
                  outlined
                  background-color="black"
                />
              </div>
            </div>
          </div>
          <v-btn @click.stop="dialog = true" rounded outlined id="Update">
            تکمیل ویرایش
          </v-btn>
          <v-dialog v-model="dialog" max-width="400">
            <v-card id="Card">
              <br>
              <v-card-text class="headline"> <div id="Success"> عملیات ویرایش با موفقیت انجام شد! </div> </v-card-text>
              <v-card-text>
                <router-link class="routerLink" :to="{name: 'AdminSearchUsers'}">
                  <v-btn
                    color="blue-grey lighten-4"
                    text
                    @click="dialog = false"
                    class = "backButton"
                  >
                    بازگشت به   تغییر اطلاعات کاربر
                  </v-btn>
                </router-link>
              </v-card-text>
            </v-card>
          </v-dialog>
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
  import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

  export default {
    components: {
      datePicker: VuePersianDatetimePicker,
      'app-header': AppbarHeader
    },
    data () {
      return {
        dialog: false,
        users: {
          firstName: 'کوشا',
          lastName: 'کبیری',
          email: 'koosha.kabiri@aut.ac.ir',
          gender: 'آقا',
          birthDate: '1376-08-09'
        },
        date: null,
        menu: false,
        items: [
          'خانم',
          'آقا',
          'غیره'
        ],
        EmailRules: [
          value => /.+@.+\..+/.test(value) || 'ایمیل باید درست باشد'
        ]
      }
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
    }
  }
</script>
<style scoped>
  .theme--light.v-application{
    background-color: #E4F3FF;
  }
  .theme--light.v-list{
    background: #E4F3FF;
  }
  .theme--light.v-list-item:hover:before {
    opacity: 0.14;
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
  .routerLink {
    text-decoration: none;
    color: black;
  }
  #ExitIcon {
    width: 20px;
    height: 20px;
  }
  #GeneralInfoForm {
    position: relative;
    width: 170%;
    left: 40%;
    top: 0%;
    padding-top: 5%;
  }
  #Update {
    color: #00A215;
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
  #UniveristyEmail {
    color: #00A215;
    font-size: 12px;
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
    width: 37.5%;
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
  #DOfBirthLabel {
    position: relative;
    left: 6.5%;
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
  #Success {
    color: white;
    font-family: "B Koodak";
  }
  #Card {
    background-color: #00A215;
    border-radius: 30px;
  }
  .backButton {
    letter-spacing: 0px;
  }
  @media only screen and (max-width: 1100px) {
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
</style>
