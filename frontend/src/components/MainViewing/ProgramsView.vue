<template>
  <div id="ProgramsPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <img src="../../assets/CS.jpg" id="ProgramsBackground">

    <div id="MainCardContent">
      <v-container>
        <v-card id="Card1" dark width="1400" color="#C3C3C3">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text>
              <br>
              <div id="ProgramName">
                <!-- {{subjectName}} --> علوم کامپیوتر
              </div>
              <br>
              <hr class="hr">
              <br>
              <div id="ProgramInfo">
                Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation and the design of software systems.
                Its fields can be divided into theoretical and practical disciplines. Computational complexity theory is highly abstract, while computer graphics emphasizes real-world applications. Programming language theory considers approaches to the description of computational processes, while software engineering involves the use of programming languages and complex systems.
                Human–computer interaction considers the challenges in making computers useful, usable, and accessible.
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>
    <v-expansion-panels flat id="X">

      <v-expansion-panel id="EP">
        <v-expansion-panel-header id="EPHeader">
          جستجو و فیلتر
        </v-expansion-panel-header>
        <v-expansion-panel-content id="EPContent">
          <div id="FilterContent">

            <div class="row">
              <div class="column1">
                <div id="RightContent">
                  <v-text-field class="ma-0 pa-0 filterTextField" color="#FFC61B" outlined background-color="#C3C3C3" solo dense flat placeholder="جستجوی برنامه‌ی تحصیلی" > <v-icon slot="append">search</v-icon> </v-text-field>
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
                      <div id="MaxCost">حداکثر مدت دوره‌ی تحصیلی</div>
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
                      <div id="MaxCost">حداکثر شاخص آلودگی هوا</div>
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
                    نام برنامه
                  </div>
                  <div class="chip" :style="isClicked2 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked2">
                    شهریه‌ی سالانه
                  </div>
                  <div class="chip" :style="isClicked3 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked3">
                    مدت دوره‌ی تحصیلی
                  </div>
                  <div class="chip" :style="isClicked4 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked4">
                    رتبه‌ی دانشگاه
                  </div>
                  <div class="chip" :style="isClicked5 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked5">
                    توسعه‌ی انسانی
                  </div>
                </div>
                <div class="row3">
                  <div class="column31">
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
                  <div class="column32">
                    <div id="MaxCost">حداکثر رتبه‌ی دانشگاه</div>
                  </div>
                </div>
                <div class="row3">
                  <div class="column31">
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
                  <div class="column32">
                    <div id="MaxCost">حداقل شاخص توسعه‌ی انسانی</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br> <br> <br> <br> <br>

    <div class="align">
      <div v-for="program in programs" :key="program.name">
        <div class="card-container" id="EachCard">
          <div class="card-horizontal">
            <div class="card-front">
              <v-card class="card-front-content" max-width="450" mx-auto grid-list-md id="Card2" :elevation="3">
                <v-img class="white--text align-end" height="230px" :src="program.image">
                  <div id="StarRating">
                    <v-rating
                      dense
                      color="#F4BC1C"
                      background-color="#F4BC1C"
                      v-model="program.rating"
                      small
                    ></v-rating>
                  </div>
                  <div id="Degree">
                    <h4> {{program.degree}} </h4>
                  </div>
                  <v-card-title id="ProgramRank">
                    <h6>    رتبه: </h6>
                    <h4>   {{program.rank}} </h4>
                  </v-card-title>
                </v-img>

                <div id="CardBottom">
                  <v-img id="CardLogo" :src="program.logo"></v-img>
                  <v-card-subtitle id="CardSubtitle1" class="pb-0"> {{program.name}} </v-card-subtitle>
                  <v-card-subtitle id="CardSubtitle2" class="pb-0">{{program.university}} </v-card-subtitle>
                  <v-card-text id="CardSubtitle3" class="pb-0">{{program.country}} </v-card-text>
                  <span class="inner-circle" :style="program.style">
                  <img id="Flag" :src="program.flag">
                </span>
                </div>
              </v-card>
            </div>

            <div class="card-back">
              <v-card class="card-back-content" height="328px" mx-auto grid-list-md id="Card" color="#C3C3C3" :elevation="3">
                <div id="CardBottom">
                  <v-card-text id="BackText">
                    <div id="RightBackCard">
                      <div id="BackLogoContent">
                        <img id="BackLogo" :src="program.logo">
                      </div>
                      <div id="BackUniversityName">
                        <div id="BackUniversityFarsiName">
                          {{program.name}}<br>
                        </div>
                        <div id="BackUniversityEnglishName">
                          {{program.university}}
                        </div>
                      </div>
                      <div class="BackUniversityInfo">
                        <br>
                        مدت زمان تحصیل: {{program.duration}}
                      </div>
                      <div class="BackUniversityInfo">
                        <br>
                        زبان آموزش: {{program.language}}
                      </div>
                      <div class="BackUniversityInfo">
                        <br>
                        شهر: {{program.city}}
                      </div>
                      <div class="BackUniversityInfo">
                        <br>
                        <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIcon" src="../../assets/Icons/Website.png"> </a>
                        <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="Website"> tue.nl </h1> </a>
                      </div>
                    </div>
                    <div id="LeftBackCard">
                      <div id="BackStarRating">
                        <v-rating
                          dense
                          color="#F4BC1C"
                          background-color="#F4BC1C"
                          v-model="program.rating"
                          small
                        ></v-rating>
                      </div>
                      <div id="BackProgramDegree">{{program.degree}}</div>
                      <div id="BackProgramRank">
                        <h6 id="BackRankText">رتبه:</h6>
                        <h4 id="BackRank">{{program.rank}}</h4>
                      </div>
                      <div id="BackUniversityCountry">{{program.country}}</div>
                    </div>
                    <v-btn color="#06090E" rounded id="ExploreText">
                      <h3 id="MoreText">بیشتر</h3>
                    </v-btn>
                  </v-card-text>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  // import SubjectsDetailView from './SubjectsDetailView.vue'
  // import SubjectsListView from './SubjectsListView.vue'
  import axios from 'axios'
  import AppbarHeader from '../FirstAppbarHeader'
  export default {
    components: {
      'app-header': AppbarHeader
    },
    // props: ['title'],
    data () {
      return {
        isClicked1: false,
        isClicked2: false,
        isClicked3: false,
        isClicked4: false,
        isClicked5: false,
        incClicked: false,
        decClicked: false,
        programs: [
          {
            name: 'پردازش اطلاعات هوشمند',
            university: 'دانشگاه توکیو',
            degree: 'کارشناسی ارشد',
            rank: 36,
            country: 'ژاپن',
            duration: '2 سال',
            language: 'انگلیسی',
            city: 'توکیو',
            rating: 5,
            image:
              'https://jpninfo.com/wp-content/uploads/2017/11/Tokyo-University.jpg',
            style: {
              borderColor: '#C40233'
            },
            flag: 'https://cdn.countryflags.com/thumbs/japan/flag-800.png',
            logo: 'https://youthopportunity.net/wp-content/uploads/2019/11/1200px-UnivOfTokyo_logo.svg_.png'
          },
          {
            name: 'پردازش اطلاعات هوشمند',
            university: ' دانشگاه سائو پائولو',
            degree: 'کارشناسی ارشد',
            rank: 275,
            country: 'برزیل',
            duration: '2 سال',
            language: 'پرتغالی',
            city: ' سائو پائولو',
            rating: 3,
            image: 'https://cdn.britannica.com/96/141196-050-C8E26CEB/Paulista-Museum-part-gardens-University-of-Sao.jpg',
            flag: 'https://cdn.countryflags.com/thumbs/brazil/flag-800.png',
            style: {
              borderColor: '#C40233'
            },
            logo: 'https://lh3.googleusercontent.com/proxy/JDa7oNMtVACNPhvsmEzvwNf0NsVZr0_ZQIoQnyoi4YQ0EJUxWaV4vGKSyjPY9WXY6Lao00xtYJjDm75MxFktgfZPdaYTlFvDRWE6OtvkMZqoLGUaYLasQiKoiY2rAdgkXMM'
          },
          {
            name: 'رسانه دیجیتال تعاملی',
            university: ' کالج ترینیتی دوبلین',
            degree: 'کارشناسی ارشد',
            rank: 164,
            country: 'ایرلند',
            duration: '2 سال',
            language: 'انگلیسی',
            city: 'دوبلین',
            rating: 3,
            image: 'https://www.tcd.ie/business/assets/img/BBS/campanile.jpg',
            flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
            style: {
              borderColor: '#C40233'
            },
            logo: 'https://www.bourses-etudiants.ma/wp-content/uploads/2019/07/trinity-300x146.png'
          }
        ]
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
    }
  }
</script>

<style scoped>
  #X {
    width: 90%;
    /* margin-bottom: 5%; */
  }
  #EP {
    background-color: #C3C3C3;
    border-radius: 20px;
    right: 6%;
    /* width: 60%; */
  }
  #EPHeader {
    color: #053A62;
    font-size: 2em;
    position: relative;
    right: 42%;
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
    position: relative;
    float: left;
    bottom: 5px;
    width: 30%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  .column22 {
    position: relative;
    top: 5px;
    float: left;
    width: 70%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  .column31 {
    position: relative;
    top: 5px;
    float: left;
    width: 25%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  .column32 {
    position: relative;
    top: 10px;
    float: left;
    width: 75%;
    height: auto; /* Should be removed. Only for demonstration */
  }
  /* Clear floats after the columns */
  .row:after, .row2:after, .row3:after {
    content: "";
    display: table;
    clear: both;
  }
  .row3 {
    width: 40%;
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
    position: relative;
    top: 20px;
    right: 8px;
    width: 40%;
  }
  .theme--light.v-application{
    background-color: #C3C3C3;
  }
  .theme--light.v-list{
    background: #C3C3C3;
  }
  #ProgramsPage {
    background-image: url("../../assets/STAR.jpg");
    background-repeat: round;
    /* background-color:#242424; */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    margin-top: 60px;
  }
  #ProgramsBackground {
    object-fit: cover;
    object-position: 80% 40%;
    width: 100%;
    height: 337px;
  }
  #MainCardContent {
    position: relative;
    bottom: 110px;
  }
  #Card1, #Card2 {
    height: 300px;
  }
  .hr {
    border: 1px solid #adadad;
  }
  #ProgramName {
    text-align: right;
    font-family: "B Koodak";
    color: #053a62;
    font-size: 40px;
  }
  #ProgramInfo {
    text-align: left;
    font-family: "Comic Sans MS";
    color: #053a62;
    font-size: 15px;
    font-weight: bold;
  }
  /* */
  .align {
    /* padding-top:40px; */
    /* width:100%; */
    display: flex;
    flex-flow: row wrap;
    /* justify-content:space-around;
    align-items:space-around; */
    position: relative;
    right: 8%;
    bottom: 100px;
  }
  .card-container {
    -webkit-perspective: 1200;
    -moz-perspective: 1200;
    perspective: 1200;
  }
  .card-horizontal {
    height: 230px;
    width: 450px;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    /* transition-delay: 2s; */
  }
  .card-front,
  .card-back {
    height: 100%;
    width: 100%;
    position: absolute;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    /* transition-delay: 2s; */
    max-width: 450px;
  }
  .card-back {
    -moz-transform: rotateY(179.9deg);
    -webkit-transform: rotateY(179.9deg);
    transform: rotateY(179.9deg);
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }
  /* .card-back-hr {
    -webkit-transform:rotateX(179.9deg);
    -moz-transform:rotateX(179.9deg);
    transform:rotateX(179.9deg);
  } */
  .card-horizontal:hover {
    -webkit-transform: rotateX(179.9deg);
    -moz-transform: rotateX(179.9deg);
    transform: rotateX(179.9deg);
  }
  #Flag {
    border-radius: 20px;
    width: 33px;
    height: 33px;
    position: relative;
    top: 8%;
  }
  #CardSubtitle3 {
    text-align: left;
    position: relative;
    bottom: 10px;
    color: #042d4b;
    font-size: 15px;
    left: 1%;
    font-family: "B Koodak";
  }
  .inner-circle {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-style: solid;
    border-width: 5px;
    /* border-color: #025835; */
    position: absolute;
    pointer-events: none;
    right: 86%;
    top: 80%;
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

  #Card1, #Card2 {
    border-radius: 10px;
    background-color: #c3c3c3;
  }
  #EachCard {
    margin-top: 5%;
    margin-left: 20px;
    position: relative;
    left: 10%;
    margin-bottom: 20%;
  }
  /*  */
  #CardSubtitle1,
  #CardSubtitle2 {
    font-family: "B Koodak";
    text-align: right;
    margin-right: 70px;
    font-size: 20px;
    color: #042d4b;
    position: relative;
  }
  #CardSubtitle1 {
    top: 7px;
  }
  #CardSubtitle2 {
    font-size: 15px;
    bottom: 7px;
  }

  #UniversitiesContent {
    margin-left: 4%;
    margin-right: 3%;
  }

  #CardBottom {
    background-color: #c3c3c3;
  }

  #ViewText {
    margin-right: 15px;
  }
  #ListView {
    text-decoration: none;
    color: #86c7f8;
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
  #ProgramRank {
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
    color: #0793ff;
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
    color: #042d4b;
    display: inline-block;
    position: relative;
    bottom: 15px;
    right: 1%;
  }
  #BackUniversityEnglishName {
    font-size: 15px;
    font-family: "B Koodak";
  }
  .BackUniversityInfo {
    font-size: 20px;
    color: #042d4b;
  }
  #BackLogo {
    height: 50px;
    width: 50px;
    /* border-radius: 20px; */
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
    color: #8691db;
    text-decoration: underline;
    bottom: 10px;
    right: 1%;
  }
  #StarRating {
    position: relative;
    right: 74%;
    bottom: 90px;
    background-color: black;
    border-radius: 20px;
    width: 24%;
    padding-top: 0.5%;
  }
  #Degree {
    position: relative;
    right: 74%;
    bottom: 85px;
    background-color: black;
    border-radius: 20px;
    width: 24%;
    padding-top: 0.5%;
  }
  #BackStarRating {
    position: relative;
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    padding-top: 2%;
    padding-right: 10px;
    padding-left: 0px;
  }
  #BackRankText,
  #BackRank {
    display: inline-block;
  }
  #BackProgramRank,
  #BackProgramDegree {
    margin-bottom: 10%;
    background-color: black;
    border-radius: 20px;
    position: relative;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
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
  }
  #CardLogo {
    position: absolute;
    height: 50px;
    width: 50px;
    /* border-radius: 20px; */
    top: 84%;
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
    right: 27%;
    float: left;
    top: 5px;
    width: 28%;
  }
  #ExploreTextLink {
    text-decoration: none;
  }
  #RightBackCard {
    text-align: right;
  }
  @media only screen and (max-width: 1263px) {
    #Card1 {
      height: 400px;
    }
  }
  @media only screen and (max-width: 883px) {
    #Card1 {
      height: 400px;
    }
  }
  @media only screen and (max-width: 610px) {
    #Card1 {
      height: 600px;
    }
  }
  @media only screen and (max-width: 580px) {
    #Card2 {
      position: relative;
      right: 5%;
    }
  }
  @media only screen and (max-width: 480px) {
    #Card1 {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 240px) {
    #Card1 {
      font-size: 10px;
    }
  }
</style>
