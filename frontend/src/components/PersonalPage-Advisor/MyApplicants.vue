<template>
  <div id="GeneralInfoPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <div id="ScrollableTable">
          <div id="View">
            <v-btn height="30" depressed id="List" color="#C3C3C3"> <router-link :to="{name: 'AdvisorMyApplicants'}" id="ListView"> دانشجوهای من </router-link> </v-btn>
            <v-btn height="30" outlined depressed id="Details" color="#C3C3C3"> <router-link :to="{name: 'AdvisorApplicantsList'}" id="DetailsView"> درخواست‌ها </router-link> </v-btn>
          </div>
          <v-container
            id="scroll-target"
            style="max-height: 600px"
            class="overflow-y-auto"
          >
            <v-row
              v-scroll:#scroll-target="onScroll"
              align="center"
              justify="center"
              style="height: 500px"
            >
              <table id="Table">
                <tr>
                  <th class="th1">
                    <span class="chipHeader1"> <div id="number"> # </div> </span>
                  </th>
                  <th class="th1">
                    <span class="chipHeader"> <div id="chipHeader">  نام دانشجو/دانش‌آموز </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader"> دانشگاه/مدرسه </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader">مقطع تحصیلی</div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader2"> <div id="chipHeader"> ایمیل </div> </span>
                  </th>
                  <th class="th5">
                    <v-chip class="chipHeader6" text-color="white" color="#0793FF" light width="100">
                      <img id="EmailIcon" src="../../assets/VerifyEmail.png"/>
                    </v-chip>
                  </th>
                </tr>
                <tr v-for="(information, index) in user" :key="information.title">
                  <td> <span class="numberText"> <div id="numberText"> {{ information.index }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.username }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.university }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="secondRowText"> {{ information.degree }} </div> </span> </td>
                  <td> <span class="secondRow"> <div id="thirdRowText"> {{ information.email }} </div> </span>  </td>
                  <td>
                    <div id="Contact">
                      <img class="contactIcon" src="../../assets/ContactIcon.png"/>
                      <img class="contactIcon" @click="removeItem(index)" src="../../assets/closeCircleIcon.png"/>
                    </div>
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
          <router-link class="routerLink" :to="{name: 'AdvisorPersonalInfo'}">
            <div id="GeneralInfoButton">
              اطلاعات حساب کاربری
              <span id="Circle1"> 100 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'AdvisorCV'}">
            <div id="CVButton">
              سوابق تحصیلی و علمی
              <span id="Circle2"> 100 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'AdvisorMyApplicants'}">
            <div id="MyAdvisorButton"> مشاوره </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'AdvisorChangePassword'}">
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
        user: [
          {
            index: 1,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 2,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 3,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 4,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 5,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 6,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 7,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 8,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 9,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 10,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
            email: 'koosha.kabiri@aut.ac.ir'
          },
          {
            index: 11,
            username: 'کوشا کبیری',
            university: 'دانشگاه صنعتی امیرکبیر',
            degree: 'کارشناسی',
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
    margin-top: 270px;
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
  .textField1 >>> label {
    font-size: 1em;
    color: black;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  th, td {
    text-align: center;
    padding: 5px;
  }
  .th2 {
    width: 40px;
  }
  .chipHeader {
    width: 175px;
    height: 45px;
    color: white;
    background-color: #0793FF;
    border-radius: 20px;
    display: inline-block;
  }
  .chipHeader2 {
    width: 280px;
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
    width: 91%;
    height: 100%;
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
  #MyAdvisorButton {
    background-color: #C3C3C3;
  }
  #ExitIcon {
    position: relative;
    top: 6px;
    left: 2px;
    width: 20px;
    height: 20px;
  }
  .contactIcon {
    position: relative;
    top: 5px;
    left: 1px;
    width: 20px;
    height: 20px;
    cursor: pointer;
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
    color: green;
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
  #Table {
    position: relative;
    border: none;
    /* bottom: 13%; */
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
  #ViewText {
    margin-right: 15px;
  }
  #ListView {
    text-decoration: none;
    color: black;
  }
  #DetailsView {
    text-decoration: none;
    color: #C3C3C3;
  }
  #View {
    color: white;
    float: left;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -2%;
    margin-left: 10px;
    position: relative;
    bottom: 30px;
  }
  #List {
    border-radius: 10px;
    margin-right: -5px;
    letter-spacing: 0px;
  }
  #Details {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    margin-right: -12px;
    letter-spacing: 0px;
  }
  #Contact {
    background-color: #C3C3C3;
    border-radius: 20px;
    padding: 1px;
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
  @media only screen and (max-width: 940px) {
    .InterestsLabel, .WebsiteLabel{
      position: relative;
      left: 30px;
    }
  }
</style>
