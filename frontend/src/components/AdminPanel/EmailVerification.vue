<template>
  <div id="ChangePasswordPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <div id="ScrollableTable">
          <v-container
            id="scroll-target"
            style="max-height: 600px"
            class="overflow-y-auto"
          >
            <v-row
              v-scroll:#scroll-target="onScroll"
              align="center"
              justify="center"
              style="height: 600px"
            >
              <table id="Table">
                <tr>
                  <th class="th1">
                    <span class="chipHeader1"> <div id="number"> # </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader"> نام کاربر </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader2"> <div id="chipHeader"> دانشگاه </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader2"> <div id="chipHeader"> دامنه </div> </span>
                  </th>
                  <th class="th3">
                    <span class="chipHeader"> <div id="chipHeader"> ایمیل </div> </span>
                  </th>
                  <th class="th4">
                    <span class="lastChipHeader"> <div id="lastChipHeader"> <img id="EmailIcon" src="../../assets/VerifyEmail.png"/> </div> </span>
                  </th>
                </tr>
                <tr v-for="(information, index) in user" :key="information.title">
                  <td> <span class="numberText"> <div id="numberText"> {{ information.index }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.username }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.university }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.url }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="thirdRowText"> {{ information.email }} </div> </span>  </td>
                  <td>
                    <img id="ExitIcon" @click="removeItem(index)" src="../../assets/CheckMark.png"/>
                    <img id="ExitIcon" @click="removeItem(index)"  src="../../assets/closeCircleIcon.png"/>
                  </td>
                </tr>
              </table>
            </v-row>
          </v-container>
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
        user: [
          {
            index: 1,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 2,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 3,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 4,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 5,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 6,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 7,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 8,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 9,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 10,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 11,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 12,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 13,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 14,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 15,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 16,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 17,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 18,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 19,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 20,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 21,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 22,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            url: 'aut.ac.ir',
            email: 'koosha.kabiri@aut.ac.ir'
          }
        ]
      }
    },
    methods: {
      removeItem: function (index) {
        this.user.splice(index, 1)
      },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      }
    }
  }
</script>
<style scoped>
  #ScrollableTable {
    margin-top: 200px;
  }
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #858585;
  }
  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: #858585;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252525;
  }
  .textField >>> label {
    font-size: 0.75em;
    color: black;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    position: relative;
    top: 0px;
  }
  th, td {
    text-align: center;
    padding: 5px;
  }
  .th1 {
    width: 1%;
  }
  .th2 {
    width: 30%;
  }
  .th3 {
    width: 50%;
  }
  .chipHeader {
    width: 230px;
    height: 45px;
    color: white;
    background-color: #0793FF;
    border-radius: 20px;
    display: inline-block;
  }
  .chipHeader2 {
    width: 165px;
    height: 45px;
    color: white;
    background-color: #0793FF;
    border-radius: 20px;
    display: inline-block;
  }
  #chipHeader {
    position: relative;
    top: 10px;
  }
  .lastChipHeader {
    width: 60px;
    height: 45px;
    color: white;
    background-color: #0793FF;
    border-radius: 20px;
    display: inline-block;
  }
  #lastChipHeader {
    position: relative;
    top: 2px;
  }
  .chipHeader1 {
    color: white;
    background-color: #0793FF;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: inline-block;
  }
  .numberText {
    color: black;
    background-color: #C3C3C3;
    height: 30px;
    width: 40px;
    border-radius: 40%;
    display: inline-block;
    padding-top: 3px;
  }
  .secondRow {
    color: black;
    background-color: #C3C3C3;
    height: 30px;
    width: 100%;
    border-radius: 15px;
    display: inline-block;
    padding-top: 3px;
    font-size: 0.75em;
  }
  #secondRowText {
    position: relative;
    top: 3.5px;
  }
  #thirdRowText {
    position: relative;
    top: 3.5px;
    text-align: left;
    left: 10px;
  }
  #number {
    position: relative;
    top: 10px;
  }
  .chipHeader6 {
    width: 60px;
    height: 45px;
  }
  .v-text-field >>> label {
    color: black;
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
    top: 35%;
    z-index:100;
    width: 91%;
    height: 100%;
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
  #EditUsersButton:hover, #ChangePasswordButton:hover {
    background-color: #C3C3C3;
  }
  #EmailVerificationButton {
    background-color: #C3C3C3;
  }
  #ExitIcon {
    position: relative;
    top: 6px;
    left: 2px;
    cursor: pointer;
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
  #Table {
    position: relative;
    border: none;
    bottom: 13%;
  }
  #Form {
    margin-top: 6%;
    position: relative;
  }
  label {
    padding: 12px 70px 12px 2px;
    display: inline-block;
    color: white;
  }
  .col-25 {
    float: left;
    width: 25%;
    margin-top: 1%;
  }
  .col-50 {
    float: left;
    width: 60%;
    margin-top: 1%;
  }
  #Update {
    color: #FFC61B;
    position: absolute;
    top: 117%;
    left: 58px;
    letter-spacing: 0px;
    width: 14.3%;
    margin-bottom: 10px;
  }
  #Update:hover {
    background-color: #222221;
  }
  #PencilIcon {
    width: 20px;
    height: 20px;
    position: relative;
    left: 3px;
  }
  #GeneralInfoForm {
    position: relative;
    /* width: 100%; */
    /* left: 40%; */
    top: 0%;
    padding-top: 0%;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  #EmailIcon {
    height: 40px;
    width: 40px;
    position: relative;
  }
  @media only screen and (max-width: 940px) {
    .InterestsLabel, .WebsiteLabel{
      position: relative;
      left: 30px;
    }
  }
</style>
