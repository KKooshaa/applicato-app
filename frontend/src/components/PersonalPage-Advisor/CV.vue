<template>
  <div id="GeneralInfoPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <div id="ScrollableTable">
          <v-container
            id="scroll-target"
            style="max-height: 280px"
            class="overflow-y-auto"
          >
            <v-row
              v-scroll:#scroll-target="onScroll"
              align="center"
              justify="center"
              style="height: 300px"
            >
              <table id="Table">
                <tr>
                  <th class="th1">
                    <span class="chipHeader"> <div id="chipHeader"> مقطع تحصیلی </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader">  رشته‌ی تحصیلی </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader"> عنوان برنامه‌ی تحصیلی </div> </span>
                  </th>
                  <th class="th2">
                    <span class="chipHeader"> <div id="chipHeader"> دانشگاه </div> </span>
                  </th>
                  <th class="th3">
                    <span class="chipHeader"> <div id="chipHeader"> کشور </div> </span>
                  </th>
                </tr>
                <tr v-for="information in user" :key="information.title">
                  <td> <v-text-field
                    disabled
                    :label = "information.degree"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ></v-text-field> </td>
                  <td> <v-text-field
                    disabled
                    :label = "information.major"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ></v-text-field> </td>
                  <td> <v-text-field
                    disabled
                    :label = "information.title"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ></v-text-field> </td>
                  <td> <v-text-field
                    disabled
                    :label = "information.university"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ></v-text-field> </td>
                  <td> <v-text-field
                    disabled
                    :label = "information.country"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ></v-text-field> </td>
                </tr>
              </table>
            </v-row>
          </v-container>
        </div>
        <v-form ref="form" id="GeneralInfoForm" v-model="valid">
          <div id="Form">
            <div class="row">
              <div class="col-25">
                <label for="Interests" class="InterestsLabel"> مباحث مورد علاقه </label>
              </div>
              <div class="col-50 Interests">
                <v-text-field
                  disabled
                  :label= "Interests"
                  class="textField2"
                  dark
                  outlined="true"
                  rounded="true"
                  background-color="black"
                  justify-center
                ></v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Website" class="WebsiteLabel"> وبسایت </label>
              </div>
              <div class="col-50 Website">
                <v-text-field
                  disabled
                  :label= "Website"
                  class="textField2"
                  dark
                  outlined="true"
                  rounded="true"
                  background-color="black"
                  justify-center
                ></v-text-field>
              </div>
            </div>
          </div>
          <router-link :to="{name: 'AdvisorEditCV'}">
            <v-btn rounded outlined id="Update">
              <img id="PencilIcon" src="../../assets/pencil.png"/>  ویرایش
            </v-btn>
          </router-link>
        </v-form>
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
        Interests: 'الگوریتم‌های بهینه‌سازی، یادگیری ماشین، هوش مصنوعی',
        Website: 'people.scs.carleton.ca/~agheibi',
        user: [
          {
            degree: 'کارشناسی',
            major: 'علوم کامپیوتر',
            title: 'علوم کامپیوتر',
            university: 'دانشگاه صنعتی امیرکبیر',
            country: 'ایران '
          },
          {
            degree: 'کارشناسی ارشد',
            major: 'علوم کامپیوتر',
            title: 'علوم کامپیوتر - هندسه محاسباتی',
            university: 'دانشگاه واترلو',
            country: 'کانادا'
          },
          {
            degree: 'دکترا',
            major: 'علوم کامپیوتر',
            title: 'هوش مصنوعی',
            university: 'دانشگاه شیکاگو',
            country: 'آمریکا'
          }
        ]
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
  .textField2 >>> label {
    color: white;
    font-size: 0.75em;
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
  .chipHeader {
    width: 175px;
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
  @media only screen and (max-width: 940px) {
    .InterestsLabel, .WebsiteLabel{
      position: relative;
      left: 30px;
    }
  }

</style>
