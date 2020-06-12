<!-- University Websites -->
<template>
  <div id="UniversitiesPage">
    <app-header/>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

    <div id="UniversitiesContent">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <!-- Title & Searching -->
      <br>
      <h1 id="UniversitiesTitle">  دانشگاه‌ها </h1> <br> <br> <br> <br>
      <div id="View">
        <!-- <h3 id="ViewText"> طریقه نمایش:  </h3> -->
        <v-btn height="30" depressed id="List" color="#202020"> <router-link :to="{name: 'UniversitiesListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#E7E7E7"> <router-link :to="{name: 'UniversitiesDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
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
                    <v-text-field class="ma-0 pa-0 filterTextField" color="#FFC61B" outlined background-color="#C3C3C3" solo dense flat placeholder="جستجوی دانشگاه" > <v-icon slot="append">search</v-icon> </v-text-field>
                    <div class="vl"></div>

                    <div class="row2">
                      <div class="column21">
                        <div id="MaxCostTextField"> <v-text-field class="ma-0 pa-0 maxCostTextField" outlined color="#FFC61B" rounded background-color="#C3C3C3" solo dense flat>
                          <template v-slot:append-outer>
                            <div id="Euro">  (یورو) </div>
                          </template>
                        </v-text-field> </div>
                      </div>
                      <div class="column22">
                        <div id="MaxCost">حداکثر شهریه‌ی سالانه</div>
                      </div>
                    </div>
                    <div class="row2">
                      <div class="column21">
                        <div id="MaxCostTextField"> <v-text-field class="ma-0 pa-0 maxCostTextField" outlined color="#FFC61B" rounded background-color="#C3C3C3" solo dense flat>
                          <template v-slot:append-outer>
                            <v-tooltip
                              bottom
                            >
                              <template v-slot:activator="{ on }">
                                <v-icon v-on="on">mdi-help-circle-outline</v-icon>
                              </template>
                              توضیحات
                            </v-tooltip>
                          </template>
                        </v-text-field> </div>
                      </div>
                      <div class="column22">
                        <div id="MaxCost">حداکثر رتبه‌ی دانشگاه</div>
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
                      نام دانشگاه
                    </div>
                    <div class="chip" :style="isClicked2 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked2">
                      میانگین شهریه
                    </div>
                    <div class="chip" :style="isClicked3 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked3">
                      رتبه‌ی دانشگاه
                    </div>
                    <div class="chip" :style="isClicked4 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked4">
                      تعداد دانشجو
                    </div>
                    <div class="chip" :style="isClicked5 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked5">
                      نسبت دانشجو به استاد
                    </div>
                  </div>
                  <div id="SelectCountry">
                    <v-select
                      dense
                      placeholder="انتخاب کشور"
                      color="#FFC61B"
                      outlined
                      :items="countries"
                      rounded
                      background-color= "#C3C3C3"
                    > </v-select>
                  </div>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
      <!-- <v-text-field id="SearchTextFeild" dark label="جستجوی دانشگاه" hide-details="auto"></v-text-field> -->
      <!-- Detailed View Universities List Cards -->
      <div class="align">
        <div v-for="university in universities" :key="university.name">
          <div class="card-container" id="EachCard">
            <div class="card-horizontal">
              <div class="card-front">
                <v-card class="card-front-content" max-width="450" mx-auto grid-list-md id="Card" :elevation="3">
                  <v-img class="white--text align-end" height="230px" :src="university.image">
                    <div id="StarRating">
                      <v-rating
                        dense
                        color="#F4BC1C"
                        background-color="#F4BC1C"
                        v-model="university.rate"
                        small
                      ></v-rating>
                    </div>
                    <v-card-title id="UniversityRank">
                      <h6>    رتبه: </h6>
                      <h4> {{university.rate}} </h4>
                    </v-card-title>
                  </v-img>

                  <div id="CardBottom">
                    <v-img id="CardLogo" src="https://academicpositions.fr/uploads/af7/e37/af7e3725683c92658c03a0f253dbf338.png"></v-img>
                    <v-card-subtitle id="CardSubtitle1" class="pb-0"> {{university.pName}} </v-card-subtitle>
                    <v-card-subtitle id="CardSubtitle2" class="pb-0">{{university.name}} </v-card-subtitle>
                    <v-card-text id="CardSubtitle3" class="pb-0">{{university.pCountry}} </v-card-text>
                    <span class="inner-circle" :style="[
                          university.continent == 'Asia' ? {'border-color': '#C40233'} :
                          university.continent == 'North America' ? {'border-color': '#00255C'} :
                          university.continent == 'Europe' ? {'border-color': '#025835'} :
                          university.continent == 'Australia' || university.continent == 'Oceania' ? {'border-color': '#DC9A0C'} :
                          university.continent == 'South America' ? {'border-color': '#412B5A'} :
                          university.continent == 'Africa' ? {'border-color': '#704D37'} :
                          {'color': '#C3C3C3'}]"
>
                  <img id="Flag" :src="university.flag">
                </span>
                  </div>
                </v-card>
              </div>

              <div class="card-back">
                <v-card class="card-back-content" height="328px" mx-auto grid-list-md id="Card" :elevation="3">
                  <div id="CardBottom">
                    <v-card-text id="BackText">
                      <div id="RightBackCard">
                        <div id="BackLogoContent">
                          <img id="BackLogo" src="https://academicpositions.fr/uploads/af7/e37/af7e3725683c92658c03a0f253dbf338.png">
                        </div>
                        <div id="BackUniversityName">
                          <div id="BackUniversityFarsiName">
                            {{university.pName}} <br>
                          </div>
                          <div id="BackUniversityEnglishName">
                            {{university.name}}
                          </div>
                        </div>
                        <div class="BackUniversityInfo">
                          <br>
                          تعداد دانشجو: {{university.totalStudents}}
                        </div>
                        <div class="BackUniversityInfo">
                          <br>
                          نسبت تعداد دانشجو به استاد: {{university.studentStaffRatio}}
                        </div>
                        <div class="BackUniversityInfo">
                          <br>
                          شهر: {{university.pCity}}
                        </div>
                        <div class="BackUniversityInfo">
                          <br>
                          <a :href="university.webAddress" target="_blank"> <img id="WebsiteIcon" src="../../assets/Icons/Website.png"> </a>
                          <a :href="university.webAddress" target="_blank"> <h1 id="Website"> {{university.webAddress}} </h1> </a>
                        </div>
                      </div>
                      <div id="LeftBackCard">
                        <div id="BackStarRating">
                          <v-rating
                            dense
                            color="#F4BC1C"
                            background-color="#F4BC1C"
                            v-model="university.rate"
                            small
                          ></v-rating>
                        </div>
                        <div id="BackUniversityRank">
                           رتبه {{university.rate}}
                        </div>
                        <div id="BackUniversityCountry">
                          {{university.pCountry}}
                        </div>
                      </div>
                      <router-link id="ExploreTextLink" :to="{name: 'UniversityDetails',  params: {universityName: university.name, countryName: university.country}}">
                        <v-btn color="#06090E" rounded id="ExploreText">
                          <h3 id="MoreText">بیشتر </h3>
                        </v-btn>
                      </router-link>
                    </v-card-text>
                  </div>
                </v-card>
              </div>
            </div>
          </div>
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
        isClicked4: false,
        isClicked5: false,
        incClicked: false,
        decClicked: false,
        countries: [
          'ایالات متحده‌ی آمریکا',
          'سنگاپور',
          'هلند',
          'استرالیا',
          'مصر',
          'شیلی',
          'آلمان',
          'کانادا',
          'آفریقای جنوبی',
          'ژاپن',
          'انگلستان',
          'چین',
          'نیوزیلند',
          'برزیل'
        ],
        universities: null,
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
        this.isClicked4 = false
        this.isClicked5 = false
      },
      toggleIsClicked2: function () {
        this.isClicked1 = false
        this.isClicked2 = true
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = false
      },
      toggleIsClicked3: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = true
        this.isClicked4 = false
        this.isClicked5 = false
      },
      toggleIsClicked4: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = true
        this.isClicked5 = false
      },
      toggleIsClicked5: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = true
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
      axios.get('http://localhost:8084/universities')
        .then(response => {
          debugger;
          this.universities = [...response.data]
        })
    }
  }
</script>

<style scoped>
  .align{
    /* padding-top:40px; */
    /* width:100%; */
    /* display:flex; */
    flex-flow:row wrap;
    /* justify-content:space-around;
    align-items:space-around; */
    position: relative;
    right: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-container{
    -webkit-perspective:1200;
    -moz-perspective:1200;
    perspective:1200;
  }
  .card-horizontal{
    height:230px;
    width:450px;
    -moz-transform-style:preserve-3d;
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d;
    transition:all .8s ease;
    /* transition-delay: 2s; */
  }
  .card-front, .card-back{
    height:100%;
    width:100%;
    position:absolute;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style:preserve-3d;
    -moz-transform-style:preserve-3d;
    transform-style:preserve-3d;
    transition:all .8s ease;
    /* transition-delay: 2s; */
    max-width: 450px;
  }
  .card-back {
    -moz-transform:rotateY(179.9deg);
    -webkit-transform:rotateY(179.9deg);
    transform:rotateY(179.9deg);
    -webkit-transform:rotateX(179.9deg);
    -moz-transform:rotateX(179.9deg);
    transform:rotateX(179.9deg);
  }
  /* .card-back-hr {
    -webkit-transform:rotateX(179.9deg);
    -moz-transform:rotateX(179.9deg);
    transform:rotateX(179.9deg);
  } */
  .card-horizontal:hover {
    -webkit-transform:rotateX(179.9deg);
    -moz-transform:rotateX(179.9deg);
    transform:rotateX(179.9deg);
  }
  #Flag {
    border-radius: 20px;
    width: 33px;
    height: 33px;
    position: relative;
    top: 10%;
  }
  #CardSubtitle3 {
    text-align: left;
    position: relative;
    bottom: 8px;
    color: #042D4B;
    font-size: 15px;
    right: 1%;
    font-family: 'Comic Sans MS';
  }
  .inner-circle{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-style: solid;
    border-width: 5px;
    /* border-color: #025835; */
    position: absolute;
    pointer-events:none;
    right: 86%;
    top: 75%;
  }
  body #UniversitiesPage {
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
  .vl {
    position: absolute; /*or fixed*/
    left: -3%;
    border-left: 2px solid #FFC61B;
    height: 55%;
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
    width: 30%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  .column22 {
    float: left;
    width: 70%;
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
  .maxCostTextField .v-icon {
    color: #FFC61B;
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
  #SelectCountry {
    width: 40%;
  }
  .theme--light.v-application{
    background-color: #C3C3C3;
  }
  .theme--light.v-list{
    background: #C3C3C3;
  }
  #UniversitiesTitle {
    color: white;
    font-family: "Segoe UI", sans-serif;
    text-align: right;
    font-weight: normal;
    margin-right: 20px;
  }

  /* #DetailsText {
    text-decoration: none;
    font-weight: bold;
    margin-left: 48px;
    margin-right: 4px;
    letter-spacing: 0px;
  }

  #BookMarkText {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0px;
  } */

  #Card {
    border-radius: 10px;
    background-color: #C3C3C3;
  }
  #EachCard {
    margin-top: 5%;
    margin-left: 20px;
    position: relative;
    left: 10%;
    margin-bottom: 20%;
    display: block;
    /* top: 50px; */
  }

  #SearchTextFeild {
    text-align: left;
  }

  #CardSubtitle1,
  #CardSubtitle2 {
    text-align: right;
    margin-right: 70px;
    font-size: 20px;
    color: #042D4B;
    position: relative;
  }
  #CardSubtitle1 {
    top: 7px;
  }
  #CardSubtitle2 {
    font-size: 15px;
    font-family: 'Comic Sans MS';
    /* margin-top: -2%; */
    bottom: 7px;
  }
  #UniversitiesContent {
    margin-left: 4%;
    margin-right: 3%;
  }

  #CardBottom {
    background-color: #C3C3C3;
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
  #UniversityRank {
    float: left;
    display: inline;
    background-color: black;
    border-radius: 20px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    bottom: 10px;
    left: 2%;
  }
  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793FF;
  }
  /* #BackUniversityFarsiName{
    font-size: 25px;
    color: #042D4B;
    display: inline-block;
    position: relative;
    bottom: 5px;
    right: 1%;
  } */
  #BackUniversityName {
    font-size: 20px;
    color: #042D4B;
    display: inline-block;
    position: relative;
    bottom: 15px;
    right: 1%;
  }
  #BackUniversityEnglishName {
    font-size: 15px;
    font-family: 'Comic Sans MS';
  }
  .BackUniversityInfo {
    font-size: 20px;
    color: #042D4B;
  }
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  #BackLogo {
    height: 60px;
    width: 60px;
    border-radius: 20px;
  }
  #BackLogoContent {
    display: inline-block;
  }
  #WebsiteIcon {
    width: 30px;
    position: relative;
  }
  #Website {
    position: relative;
    display: inline-block;
    font-size: 20px;
    color: rgb(33, 91, 159);
    text-decoration: underline;
    bottom: 10px;
    right: 1%;
  }
  #StarRating {
    position: relative;
    right: 76%;
    bottom: 110px;
    background-color: black;
    border-radius: 20px;
    width: 22%;
    /* padding-top: 1%; */
  }
  #BackStarRating {
    position: relative;
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    /* padding-top: 4%; */
    padding-right: 5px;
    padding-left: 5px;
  }
  #BackUniversityRank {
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    position: relative;
    text-align: center;
  }
  #BackUniversityCountry {
    background-color: black;
    border-radius: 20px;
    position: relative;
    text-align: center;
  }
  #MoreText {
    position: relative;
    right: 25%;
    color: white;
    text-decoration: none;
    letter-spacing: 0px;
  }
  #CardLogo {
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 20px;
    bottom: 6%;
    right: 3%;
  }
  #LeftBackCard {
    float: left;
    display: inline-block;
    color: white;
    position: relative;
    bottom: 250px;
  }
  #ExploreText {
    position: relative;
    right: 25%;
    float: left;
    top: 5px;
  }
  #ExploreTextLink {
    text-decoration: none;
  }
  #RightBackCard {
    text-align: right;
  }
  @media only screen and (max-width: 1535px) {
  }
  @media only screen and (max-width: 1030px) {
    .align{
      /* padding-top:40px; */
      /* width:100%; */
      /* display:flex; */
      flex-flow:none;
      /* justify-content:space-around;
      align-items:space-around; */
      position: relative;
      right: 11%;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
    #EachCard {
      margin-bottom: 25%;
    }
  }
  @media only screen and (max-width: 920px) {
  }
</style>
