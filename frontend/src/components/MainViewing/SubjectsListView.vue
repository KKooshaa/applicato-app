<template>
  <div id="SubjectsPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <div id="SubjectsContent">
      <!-- Title & Searching -->
      <br>
      <h1 id="SubjectsTitle"> رشته‌ها </h1> <br> <br> <br> <br>
      <div id="View">
        <!-- <h3 id="ViewText"> طریقه نمایش:  </h3> -->
        <v-btn height="30" depressed id="List" color="#E7E7E7"> <router-link :to="{name: 'SubjectsListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#202020"> <router-link :to="{name: 'SubjectsDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
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

      <div id="SubjectsCard">
        <v-list id="List" color="black">
          <v-list-item id="ListItem" v-for="subject in subjects" :key="subject.title">
            <v-list-item-content id="Subjects">
              <router-link :to="{name: 'ProgramsView', params: {programName: subject.title}}">
                <v-list-item-title class="ListText">
                  <span id="Circle" :style="[
                  subject.title == 'Arts and Humanities' ? {'background-color': '#E61D2F'} :
                  subject.title == 'Engineering and Technology' ? {'background-color': '#7550A6'} :
                  subject.title == 'Life Sciences and Medicine' ? {'background-color': '#0C4B7E'} :
                  subject.title == 'Natural Sciences' ? {'background-color': '#EA6932'} :
                  subject.title == 'Social Sciences and Management' ? {'background-color': '#E8AC00'} :
                  {'background-color': '#C3C3C3'}]"> </span>
                  <div id="SubjectName"> {{subject.pTitle}} </div>
                  <div id="NumOfPrograms" :style="[
                  subject.title == 'Arts and Humanities' ? {'background-color': '#E61D2F'} :
                  subject.title == 'Engineering and Technology' ? {'background-color': '#7550A6'} :
                  subject.title == 'Life Sciences and Medicine' ? {'background-color': '#0C4B7E'} :
                  subject.title == 'Natural Sciences' ? {'background-color': '#EA6932'} :
                  subject.title == 'Social Sciences and Management' ? {'background-color': '#E8AC00'} :
                  {'background-color': '#C3C3C3'}]">
                     تعداد برنامه‌ها:  {{subject.subjects.length}}
                  </div>
                </v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
        subjects: [{
          name: 'حقوق',
          style: {
            backgroundColor: '#E8AC00'
          },
          num: 54
        },
          {
            name: 'دندان‌پزشکی',
            style: {
              backgroundColor: '#0C4B7E'
            },
            num: 78
          },
          {
            name: 'ریاضیات',
            style: {
              backgroundColor: '#EA6932'
            },
            num: 40
          },
          {
            name: 'علوم کامپیوتر',
            style: {
              backgroundColor: '#7550A6'
            },
            num: 120
          },
          {
            name: 'فلسفه',
            style: {
              backgroundColor: '#E61D2F'
            },
            num: 139
          }
        ]
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
    height: 200%;
    padding-bottom: 3%;
    bottom: 0px;
    margin-top: 60px;
  }

  #SubjectsContent {
    height: auto;
  }

  #SubjectsTitle {
    color: white;
    font-family: "Segoe UI", sans-serif;
    text-align: right;
    font-weight: normal;
    margin-right: 20px;
  }

  #ExploreText {
    text-decoration: none;
    font-weight: bold;
    right: 12px;
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

  #MoreCountryInfoText {
    opacity: 0.8;
    font-weight: lighter;
    margin-top: 3px;
    margin-right: 10px;
  }

  #ViewText {
    margin-right: 15px;
  }
  #ListView {
    text-decoration: none;
    color: #202020;
  }
  #DetailsView {
    text-decoration: none;
    color: #86C7F8;
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
    left: 3px;
    letter-spacing: 0px;
  }
  #Details {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    margin-left: -5px;
    letter-spacing: 0px;
  }
  .v-text-field {
    margin: 20px 2% 30px 0%;
  }

  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793FF;
  }

  .ListText {
    text-align: right;
    text-decoration: none;
    color: white;
  }

  #SubjectsCard {
    /* margin-top: 50px; */
    margin-right: 3%;
  }

  /* #SubjectsList {
    background-color: #94B5E7;
  } */
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
  .CountryInfo {
    display: inline-block;
    float: left;
    margin-left: 1%;
    color: #042D4B;
    font-size: 20px;
    position: relative;
    top: 5px;
  }
  /* #CountryName {
    display: inline-block;
    font-size: 24px;
    position: relative;
    top: 20px;
    margin-right: 1%;
    color: #042D4B;
  } */
  #Subjects {
    position: relative;
    border-radius: 10px;
    height: 60px;
    background-color: #C3C3C3;
  }
  .Subject {
    color: white;
  }
  #ListItem {
    position: relative;
    margin-top: 0.5%;
  }
  #Flag {
    border-radius: 20px;
    width: 33px;
    height: 33px;
    position: relative;
    top: 10%;
    right: 3px;
  }
  #Circle{
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border-width: 5px;
    /* border-color: #025835; */
    position: absolute;
    pointer-events:none;
    right: 0.6%;
    top: 15%;
  }
  #SubjectName {
    color: #042D4B;
    font-size: 40px;
    float: right;
    position: relative;
    right: 5%;
    display: inline-block;
    bottom: 5px;
  }
  #NumOfPrograms {
    color: white;
    float: left;
    display: inline-block;
    border-radius: 20px;
    margin-left: 1%;
    padding: 0.5% 0.5% 0.5% 0.5%;
    width: 160px;
    text-align: center;
    width: 120px;
  }
  @media only screen and (max-width: 1490px) {
    .bt {
      width: 200px;
    }
  }
  @media only screen and (max-width: 1230px) {
    .bt {
      width: 151px;
    }
    #SubjectName {
      right: 7%;
    }
  }
  @media only screen and (max-width: 920px) {
    .bt {
      border-radius: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    body #SubjectsPage {
      min-height: 240%;
    }
    #SubjectName {
      right: 8%;
    }
  }
  @media only screen and (max-width: 620px) {
    #SubjectName {
      right: 12%;
    }
  }
</style>
