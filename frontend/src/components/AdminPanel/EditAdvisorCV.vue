<template>
  <div id="ChangePasswordPage">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

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
                <tr v-for="(information, index) in user" :key="information.title" >
                  <td> <v-text-field
                    v-model = "information.degree"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ><template v-slot:append>
                    <img @click="removeItem(index)" width="20" height="20" id="CloseIcon" src="../../assets/closeIcon.png" alt="">
                  </template></v-text-field> </td>
                  <td>
                    <v-select
                      :items="items1"
                      v-model = "information.major"
                      class="textField"
                      dense
                      outlined="true"
                      rounded="true"
                      background-color="#C3C3C3"
                      justify-center
                      hide-details
                    >
                      <template v-slot:append>
                        <img width="20" height="20" id="TriangleIcon" src="../../assets/triangle.png" alt="">
                      </template> </v-select>

                  </td>
                  <td> <v-text-field
                    v-model = "information.title"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  ><template v-slot:append>
                    <img width="20" height="20" id="PencilIcon1" src="../../assets/pencil.png" alt="">
                  </template></v-text-field> </td>
                  <td> <v-select
                    :items="items2"
                    v-model = "information.university"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  >
                    <template v-slot:append>
                      <img width="20" height="20" id="TriangleIcon" src="../../assets/triangle.png" alt="">
                    </template> </v-select> </td>
                  <td> <v-select
                    :items="items3"
                    v-model = "information.country"
                    class="textField"
                    dense
                    outlined="true"
                    rounded="true"
                    background-color="#C3C3C3"
                    justify-center
                    hide-details
                  >
                    <template v-slot:append>
                      <img width="20" height="20" id="TriangleIcon" src="../../assets/triangle.png" alt="">
                    </template> </v-select> </td>
                </tr>
                <tr>
                  <td>
                    <v-btn
                      dark
                      fab
                      color="#0793FF"
                      small
                      @click="addItem"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </td>
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
                  color="#0793FF"
                  v-model= "Interests"
                  id="Interests"
                  dark
                  outlined="true"
                  rounded="true"
                  persistent-hint="true"
                  background-color="black"
                  autocomplete="off"
                  justify-center
                >
                  <template v-slot:append>
                    <img width="20" height="20" id="PencilIcon" src="../../assets/pencil.png" alt="">
                  </template>
                </v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Website" class="WebsiteLabel"> وبسایت </label>
              </div>
              <div class="col-50 Website">
                <v-text-field
                  color="#0793FF"
                  v-model= "Website"
                  id="Website"
                  dark
                  outlined="true"
                  rounded="true"
                  persistent-hint="true"
                  background-color="black"
                  autocomplete="off"
                  justify-center
                >
                  <template v-slot:append>
                    <img width="20" height="20" id="PencilIcon" src="../../assets/pencil.png" alt="">
                  </template>
                </v-text-field>
              </div>
            </div>
          </div>
          <router-link class="routerLink" :to="{name: 'EditAdvisorPersonal'}">
            <img src="../../assets/LeftArrow.png" id="ArrowIcon"/>
          </router-link>
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
  export default {
    components: {
      'app-header': AppbarHeader
    },
    data () {
      return {
        dialog: false,
        offsetTop: 0,
        Interests: 'الگوریتم‌های بهینه‌سازی، یادگیری ماشین، هوش مصنوعی',
        Website: 'people.scs.carleton.ca/~agheibi',
        items1: [
          'حقوق',
          'دندان‌پزشکی',
          'ریاضیات',
          'علوم کامپیوتر',
          'فلسفه'
        ],
        items2: [
          'کالج ترینیتی دوبلین ',
          'دانشگاه صنعتی امیرکبیر',
          'دانشگاه واترلو',
          'دانشگاه شیکاگو'
        ],
        items3: [
          'ایران ',
          'کانادا',
          'آمریکا'
        ],
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
    },
    methods: {
      addItem: function () {
        var myObject = {
          degree: this.degree,
          major: this.major,
          title: this.title,
          university: this.university,
          country: this.country
        }
        this.user.push(myObject)

        this.degree = ''
        this.major = ''
        this.title = ''
        this.university = ''
        this.country = ''
      },
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
  .theme--light.v-application{
    background-color: #C3C3C3;
  }
  .theme--light.v-list{
    background: #C3C3C3;
  }
  .v-list-item__content{
    color: white;
  }
  .theme--light.v-list-item:hover:before {
    opacity: 0.14;
  }
  .v-input {
    color: black;
    font-size: 0.75em;
    cursor: pointer;
    text-align: center;
  }
  .textField >>> label  {
    color: black;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    position: relative;
    bottom: 35%;
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
  #Table {
    position: relative;
    border: none;
    bottom: 5%;
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
    color: #00A215;
    position: absolute;
    top: 117%;
    left: 58px;
    letter-spacing: 0px;
    width: 14.3%;
  }
  #Update:hover {
    background-color: #222221;
  }
  #ArrowIcon {
    height: 40px;
    width: 40px;
    position: absolute;
    right: 0px;
    top: 117%;
  }
  #PencilIcon {
    width: 20px;
    height: 20px;
    position: relative;
    left: 3px;
  }
  #TriangleIcon, #CloseIcon, #PencilIcon1 {
    width: 20px;
    height: 20px;
    position: relative;
    right: 10px;
    top: 2px;
    cursor: pointer;
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
  @media only screen and (max-width: 940px) {
    .InterestsLabel, .WebsiteLabel{
      position: relative;
      left: 30px;
    }
  }
</style>
