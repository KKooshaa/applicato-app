<template>
  <div id="SubjectsPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <div id="SubjectsContent">
      <br>
      <h1 id="SubjectsTitle"> رشته‌ها </h1> <br> <br> <br> <br>
      <div id="View">
        <!-- <h3 id="ViewText"> طریقه نمایش:  </h3> -->
        <v-btn height="30" depressed id="List" color="#202020"> <router-link :to="{name: 'SubjectsListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#E7E7E7"> <router-link :to="{name: 'SubjectsDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
      </div>

      <br> <br>
      <v-expansion-panels flat>
        <v-expansion-panel id="EP">
          <v-expansion-panel-header id="EPHeader">
            جستجو و فیلتر
          </v-expansion-panel-header>
          <v-expansion-panel-content id="EPContent">
            <div id="FilterContent">

              <div class="row">
                <div class="column1">
                  <div id="RightContent">
                    <v-text-field class="ma-0 pa-0 filterTextField" color="#FFC61B" outlined background-color="#C3C3C3" solo dense flat placeholder="جستجوی رشته " > <v-icon slot="append">search</v-icon> </v-text-field>

                    <div class="row2">
                      <div class="column21">
                        <div id="MaxCostTextField">
                          <v-radio-group v-model="ex7" column dark id="Radio">
                            <v-radio
                              class="radio"
                              label="هنر و علوم انسانی"
                              color="#FFC61B"
                              value="هنر و علوم انسانی"
                            ></v-radio>
                            <v-radio
                              class="radio"
                              label="مهندسی و فناوری"
                              color="#FFC61B"
                              value="مهندسی و فناوری"
                            ></v-radio>
                            <v-radio
                              class="radio"
                              label="علوم زیستی و پزشکی"
                              color="#FFC61B"
                              value="علوم زیستی و پزشکی"
                            ></v-radio>
                            <v-radio
                              class="radio"
                              label="علوم طبیعی"
                              color="#FFC61B"
                              value="علوم طبیعی"
                            ></v-radio>
                            <v-radio
                              class="radio"
                              label="علوم اجتماعی و مدیریت"
                              color="#FFC61B"
                              value="علوم اجتماعی و مدیریت"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </div>
                      <div class="column22">
                        <div id="MaxCost">شاخه‌ی تحصیلی</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column2">
                  <div id="ChipGroup">
                    <div id="OrderBy">

                      <div id="OrderByText"> مرتب‌سازی بر اساس </div>
                      <div id="Inc" :style="incClicked ? { 'color': '#FFC61B' } : null" @click="incIsClicked"> صعودی </div>
                      <div id="Dec" :style="decClicked ? { 'color': '#FFC61B' } : null" @click="decIsClicked"> نزولی </div>
                    </div>
                    <div class="chip" :style="isClicked1 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked1">
                      نام رشته
                    </div>
                    <div class="chip" :style="isClicked2 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked2">
                      شاخه‌ی تحصیلی
                    </div>
                    <div class="chip" :style="isClicked3 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked3">
                      تعداد برنامه‌ی تحصیلی
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
      <div id="ButtonsCardContent">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-card-text id="ButtonsCard">
            <v-btn height="60" id="bt1" class="bt" tile color="#E8AC00"> <div class="Subject"> علوم اجتماعی و مدیریت </div></v-btn>
            <v-btn height="60" id="bt2" class="bt" tile color="#0C4B7E"> <div class="Subject">  علوم زیستی و پزشکی </div></v-btn>
            <v-btn height="60" id="bt3" class="bt" tile color="#EA6932"> <div class="Subject"> علوم طبیعی </div></v-btn>
            <v-btn height="60" id="bt4" class="bt" tile color="#7550A6"> <div class="Subject"> مهندسی و فناوری </div></v-btn>
            <v-btn height="60" id="bt5" class="bt" tile color="#E61D2F"> <div class="Subject"> هنر و علوم انسانی </div></v-btn>
          </v-card-text>
        </div>
      </div>
      <div id="Cards" class="align">
        <div v-for="subject in subjects" :key="subject.title">
          <v-hover v-slot:default="{ hover }">
            <div class="card-container" id="EachCard">
              <router-link :to="{name: 'ProgramsView', params: {programName: subject.title}}">
                <v-card height= "240" width="650" mx-auto grid-list-md id="Card" :elevation="3" :class="{ 'on-hover': hover }">
                  <v-img class="white--text align-end" height="180px" :src="subject.image">
                  </v-img>
                  <div id="CardBottom">
                    <v-card-text>
                      <span id="Circle" :style="[
                      subject.title == 'Arts and Humanities' ? {'background-color': '#E61D2F'} :
                      subject.title == 'Engineering and Technology' ? {'background-color': '#7550A6'} :
                      subject.title == 'Life Sciences and Medicine' ? {'background-color': '#0C4B7E'} :
                      subject.title == 'Natural Sciences' ? {'background-color': '#EA6932'} :
                      subject.title == 'Social Sciences and Management' ? {'background-color': '#E8AC00'} :
                      {'background-color': '#C3C3C3'}]"> </span>
                      <div id="SubjectName"> {{subject.pTitle}} </div>
                      <div id="NumOfPrograms"  :style="[
                      subject.title == 'Arts and Humanities' ? {'background-color': '#E61D2F'} :
                      subject.title == 'Engineering and Technology' ? {'background-color': '#7550A6'} :
                      subject.title == 'Life Sciences and Medicine' ? {'background-color': '#0C4B7E'} :
                      subject.title == 'Natural Sciences' ? {'background-color': '#EA6932'} :
                      subject.title == 'Social Sciences and Management' ? {'background-color': '#E8AC00'} :
                      {'background-color': '#C3C3C3'}]">  تعداد برنامه‌ها:  {{subject.subjects.length}} </div> <br>
                    </v-card-text>
                  </div>
                </v-card>
              </router-link>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'
  import AppbarHeader from '../FirstAppbarHeader'
  export default {
    components: {
      'app-header': AppbarHeader
    },
    data () {
      return {
        isClicked1: false,
        isClicked2: false,
        isClicked3: false,
        incClicked: false,
        decClicked: false,
        subjects: null,
        beforeCreate: function () {
          // if (!localStorage.getItem("token")) {
          //   this.$router.push({
          //     name: "SignIn",
          //   });
          // }
          // else {
          // }
        }
      }
    },

    methods: {
      toggleIsClicked1: function () {
        this.isClicked1 = true
        this.isClicked2 = false
        this.isClicked3 = false
      },
      toggleIsClicked2: function () {
        this.isClicked1 = false
        this.isClicked2 = true
        this.isClicked3 = false
      },
      toggleIsClicked3: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = true
      },
      incIsClicked: function () {
        this.incClicked = true
        this.decClicked = false
      },
      decIsClicked: function () {
        this.incClicked = false
        this.decClicked = true
      }
    },
    mounted () {
      axios.get('http://localhost:8084/majorCategory')
        .then(response => {
          this.subjects = [...response.data]
        })
    }
  }
</script>

<style scoped>
  #EP {
    background-color: #C3C3C3;
    border-radius: 20px;
    right: 1%;
  }
  #EPHeader {
    color: #053A62;
    font-size: 2em;
    position: relative;
    right: 42%;
    width: 100%;
  }
  #EPContent {
    background-color: #858585;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: auto;
  }
  #FilterContent {
    position: relative;
    top: 20%;
  }
  #MaxCost, #MaxRank {
    color: white;
    text-align: right;
  }
  #Euro {
    color: white;
    position: relative;
    top: 5px;
  }
  #RightContent {
    position: relative;
    /* top: 10%; */
  }
  .chip {
    display: inline-block;
    padding: 0 15px;
    height: 50px;
    /* width: 16%; */
    /* font-size: 18px; */
    line-height: 50px;
    margin-left: 1%;
    border-radius: 25px;
    background-color: #C3C3C3;
    border-style: solid;
    border-color: #FFC61B;
    cursor: pointer;
  }
  #ChipGroup {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .column1 {
    float: left;
    width: 30%;
    height: auto; /* Should be removed. Only for demonstration */
    padding-right: 3%;
    padding-bottom: 3%;
  }
  .column2 {
    float: left;
    width: 70%;
    height: auto; /* Should be removed. Only for demonstration */
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 3%;
  }
  .column21 {
    float: left;
    width: 70%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  .column22 {
    float: left;
    width: 30%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  /* Clear floats after the columns */
  .row:after, .row2:after {
    content: "";
    display: table;
    clear: both;
  }
  .filterTextField .v-icon {
    background-color: #FFC61B;
    border-radius: 20px;
  }
  #MaxCostTextField {
    position: relative;
    bottom: 15px;
  }
  .filterTextField {
    border-radius: 20px;
  }
  #Inc, #Dec {
    display: inline-block;
    cursor: pointer;
  }
  #Inc {
    margin-left: 10px;
  }
  #OrderBy {
    color: white;
    margin-left: 4%;
  }
  #OrderByText {
    font-size: 1.4em;
  }
  body #SubjectsPage {
    background-image: url("../../assets/STAR.jpg");
    background-repeat: round;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    padding-bottom: 3%;
    margin-top: 60px;
  }
  .align{
    display:flex;
    flex-flow:row wrap;
    position: relative;
    right: 4.5%;
  }

  #SubjectsTitle {
    color: white;
    font-family: "Segoe UI", sans-serif;
    text-align: right;
    font-weight: normal;
    margin-right: 20px;
  }
  .bt {
    position: relative;
    margin-left: -20px;
    text-decoration: none;
    width: 240px;
    right: 10px;
    letter-spacing: 0px;
    background-color: #C3C3C3;
    /* border-radius: 10px; */
  }
  #bt1 {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  #bt5 {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .Subject {
    color: white;
  }
  #Circle {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    /* border-style: solid; */
    /* border-width: 5px; */
    /* border-color: #025835; */
    position: absolute;
    right: 1.6%;
    top: 78%;
  }

  #SearchTextFeild {
    text-align: left;
  }

  #SubjectsContent {
    margin-left: 4%;
    margin-right: 3%;
  }

  #CardBottom {
    background-color: #E7E7E7;
  }
  #ViewText {
    margin-right: 15px;
  }
  #ListView {
    text-decoration: none;
    color: #86C7F8;
  }
  #DetailsView {
    text-decoration: none;
    color: #202020;
  }
  #View {
    color: white;
    float: left;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -2%;
    margin-left: 10px;
  }
  #List {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-right: -5px;
    letter-spacing: 0px;
  }
  #Details {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    margin-right: -5px;
    letter-spacing: 0px;
  }
  .v-text-field {
    margin: 20px 2% 30px 0%;
  }
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.8;
  }

  #Card {
    float: right;
    border-radius: 10px;
    background-color: #E7E7E7;
    margin-left: 20px;
    margin-top: 34px;
  }

  #SubjectName {
    color: #042D4B;
    font-size: 40px;
    float: right;
    position: relative;
    right: 8%;
    /* top: 5px; */
    display: inline-block;
  }

  #NumOfPrograms {
    color: white;
    display: inline-block;
    text-align: left;
    font-size: 15px;
    font-weight: lighter;
    position: relative;
    float: left;
    bottom: 5px;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 3%;
    padding-right: 3%;
  }
  /* #Cards {
    position: relative;
    right: 4%;
    bottom: 35px;
  } */
  @media only screen and (max-width: 1535px) {
    .align{
      flex-flow:none;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media only screen and (max-width: 1490px) {
    /* .bt {
      width: 200px;
    } */
    #Card{
      max-width: 600px;
    }
  }
  @media only screen and (max-width: 1230px) {
    .bt {
      width: 165px;
    }
  }
  @media only screen and (max-width: 920px) {
    .bt {
      border-radius: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    #Card{
      max-width: 400px;
      left: 1.5%;
    }
    #SubjectName {
      position: relative;
      right: 12%;
    }
  }
</style>
