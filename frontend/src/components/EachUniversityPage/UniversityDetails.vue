<template>
  <div id="UniversityDetailsPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">

    <img src="../../assets/UofT.jpg" id="UniversityBackground">
    <div id="MainCardContent">
      <v-container>
        <v-card id="Card" dark width="1400" color="#EEF2FD">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="150" height="300" tile>
              <v-img id="CardLogo" src="https://academicpositions.fr/uploads/af7/e37/af7e3725683c92658c03a0f253dbf338.png"></v-img>
            </v-avatar>
            <v-card-text>
              <div id="CardTexts">
                <h1 id="UniversityNameFarsi"> دانشگاه صنعتی آیندهوون </h1>
                <h1 id="UniversityNameEnglish"> Eindhoven University of Technology </h1>
                <div id="Continent">
                  <h1 id="UniversityContinent"> اروپا </h1>
                  <img id="ContinentIcon" src="../../assets/Icons/Continent.png">
                </div>
                <div id="Country">
                  <h1 id="UniversityCountry"> هلند </h1>
                  <img id="CountryIcon" src="https://cdn.countryflags.com/thumbs/netherlands/flag-800.png">
                </div>
                <div id="City">
                  <h1 id="UniversityCity"> آیندهوون </h1>
                  <img id="CityIcon" src="../../assets/Icons/City.png">
                </div>
                <h1 id="RankText"> رتبه </h1>
                <h1 id="UniversityRank"> 186 </h1>
                <div id="Contant">
                  <a href="https://www.tue.nl/en/" target="_blank"> <img id="WebsiteIcon" src="../../assets/Icons/Website.png"> </a>
                  <a href="https://www.tue.nl/en/" target="_blank"> <h1 id="Website"> tue.nl </h1> </a>
                  <img id="FacebookIcon" src="../../assets/Icons/facebook.png">
                  <img id="InstagramIcon" src="../../assets/Icons/instagram.png">
                  <img id="TwitterIcon" src="../../assets/Icons/twitter.png">
                </div>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>

    <div id="ButtonsCardContent">
      <v-container>
        <v-card id="BottomCard" width="1400" color= "#7BABD9">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text>
              <a href="#StatisticsCard"><v-btn class="bt1" tile text color="white"> آمار </v-btn></a>
              <a href="#AboutCard"><v-btn class="bt1" tile text color="white"> درباره ي دانشگاه </v-btn></a>
              <a href="#DepartmentsCardContent"><v-btn class="bt1" tile text color="white"> شاخه‌های تحصیلی </v-btn></a>
              <a href="#MajorsCardContent"><v-btn class="bt1" tile text color="white"> رشته ها </v-btn></a>
              <a href="#VideoCard"><v-btn class="bt1" tile text color="white"> ویدیو </v-btn></a>
              <a href="#"><v-btn class="bt1" tile text color="white">  موقعیت </v-btn></a>
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>

    <div id="StatisticsCardContent">
      <v-container>
        <h1 id="StatsTitle"> آمار </h1>
        <!-- <img id="StatsIcon" src="../../assets/Icons/Stats.png"> -->
        <v-card id="StatisticsCard" width="1400" color="#FFFFFF">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text id="StatisticsCardTexts">
              <h1 id="NumOfStudentsText">  تعداد دانشجویان </h1>
              <h1 id="NumOfStudents"> 8917 </h1>
              <h1 id="StudentsToProfRatioText"> تعداد دانشجویان به ازای هر استاد </h1>
              <h1 id="StudentsToProfRatio"> 20.7 </h1>
              <h1 id="FemaleToMaleRatioText"> جنسیت دانشجویان </h1>
              <h1 id="FemaleToMaleRatio">خانم 75 : 25 آقا</h1>
              <h1 id="InternationalStudentsText"> دانشجویان بین‌الملل </h1>
              <h1 id="InternationalStudents"> 19% </h1>

            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>

    <div id="AboutCardContent">
      <v-container>
        <h1 id="AboutTitle"> درباره‌ی دانشگاه </h1>
        <v-card id="AboutCard" dark width="1400" color="#FFFFFF">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text>
              <h1 id="About"> Eindhoven University of Technology (TU/e) is a research-driven university of international standing, where excellent research and excellent education go hand in hand. In the areas of engineering science and technology, we focus on a balanced approach of education, research and valorization of knowledge.
                From our lively university campus, situated in the heart of the Netherlands’ high-tech Brainport region and equipped with high-quality lab facilities, we make an impact on scientific and societal issues. We do this by delivering excellent, groundbreaking research, often in close collaboration with industry, and by providing the education that turns our students into engineers for the future. Our engineers look beyond just technology. They understand what the world needs and can translate scientific knowledge into societal value. Our educational strategy allows students to participate fully in research and the high tech industry, or to start their own companies.
              </h1>
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>

    <div id="DepartmentsCardContent">
      <v-container>
        <h1 id="DepartmentsTitle"> شاخه‌های تحصیلی </h1>
      </v-container>
      <v-container fill-height grid-list-md text-xs-center>
        <div v-for="department in departments" :key="department.name">
          <v-hover v-slot:default="{ hover }">
            <div class="align">
              <v-card id="DepartmentsCard" dark width="360" mx-auto grid-list-md :elevation="3" :class="{ 'on-hover': hover }">
                <v-img class="white--text align-end" height="200px" :src="department.image">
                </v-img>
                <div id="DepartmentsCardBottom">
                  <v-card-actions :style="{ 'background-color': department.hex}">
                    <h4 text id="DepartmentNameText">
                      {{department.name}}
                    </h4>
                    <v-spacer />
                  </v-card-actions>
                </div>
              </v-card>
            </div>
          </v-hover>
        </div>
      </v-container>
    </div>

    <div id="MajorsCardContent">
      <v-container>
        <h1 id="MajorsTitle"> رشته‌ها </h1>
      </v-container>
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
                    <div class="chip" :style="isClicked4 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked4">
                      رتبه‌ی دانشگاه بر اساس رشته
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-container fill-height grid-list-md text-xs-center>
        <div id="Cards" class="align">
          <div v-for="subject in subjects" :key="subject.name">
            <v-hover v-slot:default="{ hover }">
              <div class="card-container" id="EachCard">
                <router-link :to="{name: 'ProgramsView', params: {programName: subject.name}}">
                  <v-card height= "240" width="520" mx-auto grid-list-md id="CardSubject" :elevation="3" :class="{ 'on-hover': hover }">
                    <v-img class="white--text align-end" height="180px" :src="subject.image">
                    </v-img>
                    <div id="CardBottom">
                      <v-card-text>
                        <span id="Circle" :style="subject.style"> </span>
                        <div id="SubjectName"> {{subject.name}} </div>
                        <div id="NumOfPrograms" :style="subject.style"> تعداد برنامه‌ها: {{subject.num }}  </div> <br>
                      </v-card-text>
                    </div>
                  </v-card>
                </router-link>
              </div>
            </v-hover>
          </div>
        </div>
        <!-- <div v-for="major in majors" :key="major.name">
        <v-hover v-slot:default="{ hover }">
        <div class="align">
        <v-card id="MajorsCard" dark width="360" mx-auto grid-list-md :elevation="3" :class="{ 'on-hover': hover }">
          <v-img class="white--text align-end" height="200px" :src="major.image">
          </v-img>
          <div id="MajorsCardBottom">
            <v-card-actions :style="{ 'background-color': major.hex}">
              <h4 text id="MajorsNameText">
                {{major.name}}
              </h4>
              <v-spacer />
            </v-card-actions>
          </div>
        </v-card>
        </div>
      </v-hover>
      </div> -->
      </v-container>
    </div>

    <div id="VideoCardContent">
      <v-container>
        <h1 id="VideoTitle"> ویدیو  </h1>
        <v-card id="VideoCard" dark width="1400" color="#FFFFFF">
          <div class="d-flex flex-no-wrap justify-space-between">
            <vue-core-video-player id="Player" @play="your_method" src="./your_video_source.mp4"></vue-core-video-player>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
  import AppbarHeader from '../FirstAppbarHeader'
  import axios from 'axios'
  export default {
    components: {
      'app-header': AppbarHeader
    },
    data () {
      return {
        name: 'dsf',
        city: 'dfgd',
        country: 'dfd',
        isClicked1: false,
        isClicked2: false,
        isClicked3: false,
        isClicked4: false,
        incClicked: false,
        decClicked: false,
        university: null,
        departments: [
          {
            name: 'ریاضی و علوم کامپیوتر',
            image: 'http://www.weby-design.com/wp-content/uploads/2020/04/computer-science.jpg',
            hex: '#E8AC00'
          },
          {
            name: 'طراحی صنعتی',
            image: 'https://images.squarespace-cdn.com/content/v1/57b5960bcd0f68597a836abf/1518781947657-5Z1EFYIMA31R143R7FBV/ke17ZwdGBToddI8pDm48kHxZxf_Xn4ruQGusEty1PBB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0h8vX1l9k24HMAg-S2AFienJw4Ox-It5JpONqKFNPQ8gt0KFeURZ4ITN5A3bzzonnA/Foto-1.jpg?format=1500w',
            hex: '#0C4B7E'
          },
          {
            name: 'مهندسی برق',
            image: 'https://www.atticanada.com/wp-content/uploads/elec.jpg',
            hex: '#EA6932'
          },
          {
            name: 'مهندسی پزشکی',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Biomedical_Engineering_Laboratory.jpg',
            hex: '#7550A6'
          },
          {
            name: 'مهندسی صنایع و علوم نوآوری',
            image: 'https://www.intecreus.com/images/industry/industrial-engineering.jpg',
            hex: '#E61D2F'
          },
          {
            name: 'مهندسی عمران',
            image: 'https://www.icbt.lk/wp-content/uploads/2018/06/Civil-Structural-Engineering-min.jpg',
            hex: '#336A13'
          }
        ],
        subjects: [{
          name: 'حقوق',
          image: 'https://www.middlesex.mu/__data/assets/image/0028/516475/llm-banner-img.jpg',
          style: {
            backgroundColor: '#E8AC00'
          },
          num: 54
        },
          {
            name: 'دندان‌پزشکی',
            image: 'https://modernsmiles.com/wp-content/uploads/2018/12/modern-smiles-cleanings-prevent-gum-disease-300x200.jpeg',
            style: {
              backgroundColor: '#0C4B7E'
            },
            num: 78
          },
          {
            name: 'ریاضیات',
            image: 'https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg',
            style: {
              backgroundColor: '#EA6932'
            },
            num: 40
          },
          {
            name: 'علوم کامپیوتر',
            image: 'http://www.weby-design.com/wp-content/uploads/2020/04/computer-science.jpg',
            style: {
              backgroundColor: '#7550A6'
            },
            num: 120
          },
          {
            name: 'فلسفه',
            image: 'https://www.york.ac.uk/media/study/courses/undergraduate/philosophy/Philosophy-combined-course-page-new-image.jpg',
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
        this.isClicked4 = false
      },
      toggleIsClicked2: function () {
        this.isClicked1 = false
        this.isClicked2 = true
        this.isClicked3 = false
        this.isClicked4 = false
      },
      toggleIsClicked3: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = true
        this.isClicked4 = false
      },
      toggleIsClicked4: function () {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = true
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
        axios.post(`http://localhost:8084/universityPage`, {
          name: this.$route.query.name,
          country: this.$route.query.country,
          city: this.$route.query.city
        })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
    // mounted () {
    //   axios.get('http://localhost:8084/ + this.countryName + "/" + this.universityName')
    //     .then(response => {
    //       this.university = [...response.data]
    //     })
    // }
  }
</script>

<style scoped>
  #X {
    width: 90%;

    /* margin-bottom: 5%; */
  }
  #EP {
    background-color: #E7E7E7;
    border-radius: 20px;
    right: 6%;
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
  .align{
    display:flex;
    flex-flow:row wrap;
    position: relative;
    right: 4.5%;
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
  #CardSubject {
    float: right;
    border-radius: 10px;
    background-color: #E7E7E7;
    margin-left: 20px;
    margin-top: 34px;
  }

  #EachCard {
    float: left;
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
  html {
    scroll-behavior: smooth;
  }
  #UniversityDetailsPage {
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
  #UniversityBackground {
    object-fit: cover;
    object-position: 80% 40%;
    width: 100%;
    height: 337px;
  }
  #MainCardContent {
    position: relative;
    bottom: 110px;
  }
  #Card {
    height: 300px;
  }
  #CardTexts {
    width: 70%;
    position: relative;
    top: 190px;
  }
  #CardLogo {
    position: relative;
    top: -20px;
    height: 120px;
  }
  #UniversityLogo {
    position: relative;
    height: 200px;
    top: 30px;
  }
  #UniversityNameFarsi {
    position: relative;
    bottom: 180px;
    color: #125D7D;
    text-align: right;
  }
  #UniversityNameEnglish {
    position: relative;
    font-size: 15px;
    bottom: 180px;
    color: #AE0000;
    margin-top: 10px;
    text-align: right;
  }
  #UniversityCountry {
    color: #AE0000;
    text-align: right;
    position: relative;
    font-size: 15px;
    bottom: 180px;
  }
  #UniversityContinent {
    position: relative;
    font-size: 15px;
    bottom: 180px;
    color: #125D7D;
    text-align: right;
  }
  #UniversityCity {
    position: relative;
    font-size: 15px;
    bottom: 180px;
    color: #125D7D;
    text-align: right;
  }
  #UniversityContinent, #UniversityCity, #UniversityCountry {
    /* margin-top: -20px; */
    position: relative;
    right:40px;
  }
  #UniversityContinent, #UniversityCity, #UniversityCountry {
    margin-top: 0px;
    position: relative;
    right:40px;
  }
  #UniversityContinent {
    margin-top: 30px;
  }
  #RankText {
    position: relative;
    font-size: 20px;
    bottom: 470px;
    left: -90%;
    color: #125D7D;
  }
  #UniversityRank {
    position: relative;
    font-size: 17px;
    bottom: 470px;
    left: -90%;
    color: #125D7D;
  }
  #Website {
    position: relative;
    font-size: 15px;
    bottom: 380px;
    right: 83%;
    color: #E16506;
    text-decoration: underline;
  }
  #ButtonsCardContent, #StatisticsCardContent, #AboutCardContent, #VideoCardContent, #DepartmentsCardContent, #MajorsCardContent {
    position: relative;
    bottom: 110px;
  }
  #StatisticsCard, #AboutCard, #Card, #DepartmentsMainCard, #MajorsMainCard{
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px 5px #CBE3F5;
    opacity: 0.99
  }
  #MajorsCard, #DepartmentsCard {
    border-radius: 0px;
  }
  #BottomCard {
    border-radius: 50px;
    opacity: 0.9;
    height: 70px;
  }
  #StatisticsCard {
    height: 100px;
  }
  #AboutCard {
    height: 300px;
  }
  a:link {
    text-decoration: none;
  }
  .bt1:hover {
    background-color: #9DC5EB;
  }
  .bt1 {
    margin-right: 80px;
    position: relative;
    left: 30px;
  }
  #StatsText {
    position: relative;
    left: 480px;
    top: 23px;
    color: #042D4B;
    display:inline;
  }
  #NumOfStudentsText {
    display:inline;
  }
  #NumOfStudents, #NumOfStudentsText {
    position: relative;
    left: 370px;
    top: 10px;
    font-size: 15px;
    color: #0F455C;
  }
  #NumOfStudents {
    left: 370px;
  }
  #StudentsToProfRatioText, #StudentsToProfRatio {
    position: relative;
    top: -33px;
    font-size: 15px;
    left: 120px;
    color: #0F455C;
  }
  #FemaleToMaleRatioText, #FemaleToMaleRatio {
    position: relative;
    font-size: 15px;
    left: -130px;
    top: -76px;
    color: #0F455C;
  }
  #InternationalStudentsText, #InternationalStudents {
    position: relative;
    font-size: 15px;
    top: -119px;
    left: -380px;
    color: #0F455C;
  }
  /* #AboutTitle {
    position: relative;
    left: 465px;
    color: #042D4B;
    display:inline;
    top: 30px;
  } */
  /* #HorizontalLine {
    position: relative;
    top: 40px;
    border: solid #053A62 1px;
  } */
  #About {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 15px;
    text-align: left;
    position: relative;
    color: #0F455C;
    top: 60px;
  }
  #DepartmentsMainCard {
    height: 50px;
    border-radius: 50px;
  }
  #MajorsMainCard {
    border-radius: 50px;
  }
  #DepartmentsTitle, #MajorsTitle, #VideoTitle, #StatsTitle, #AboutTitle {
    color: white;
    text-align: right;
    margin-bottom: 20px;
  }
  #Player {
    height: 500px;
    width: 1400px;
    border-radius: 5px;
  }
  #DepartmentsCard, #MajorsCard {
    display: inline-block;
    margin: 20px 20px 20px 0px;
  }
  #DepartmentsCardBottom, #MajorsCardBottom {
    background-color: #E7E7E7;
  }
  #DepartmentNameText, #MajorsNameText {
    text-decoration: none;
    font-weight: lighter;
    color: white;
  }
  #SearchAndFilter {
    color: #4468B0;
  }
  #ContinentIcon, #CountryIcon, #CityIcon {
    width: 40px;
    position: relative;
    bottom: 210px;
    left: 330px;
  }
  #CountryIcon {
    border-radius: 20px;
    width: 38px;
    height: 38px;
  }
  #WebsiteIcon {
    width: 30px;
    position: relative;
    bottom: 350px;
    right: 90%;
  }
  #TwitterIcon, #FacebookIcon, #InstagramIcon {
    width: 30px;
    position: relative;
    bottom: 350px;
    right: 83%;
    margin-right: 10px;
  }
  #FacebookIcon {
    border-radius: 10px;
  }
  #MajorsCard, #DepartmentsCard {
    transition: opacity .4s ease-in-out;
  }

  #MajorsCard:not(.on-hover), #DepartmentsCard:not(.on-hover) {
    opacity: 0.8;
  }
  @media only screen and (max-width: 1263px) {
    #Website {
      right: 80%;
    }
    .bt1 {
      margin-right: 0px;
      position: relative;
      right: 5px;
    }
    #StatisticsCard {
      height: 250px;
    }
    #StatsText {
      left: 340px;
    }
    #NumOfStudents, #NumOfStudentsText {
      left: 200px;
    }
    #StudentsToProfRatioText, #StudentsToProfRatio {
      left: -160px;
    }
    #FemaleToMaleRatioText, #FemaleToMaleRatio {
      top: 40px;
      left: 197px;
    }
    #InternationalStudentsText, #InternationalStudents {
      top: -2px;
      left: -150px;
    }
    #AboutTitle {
      left: 320px;
    }
    #AboutCard {
      height: 400px;
    }
    #UniversityDetailsPage {
      height: 4400px;
    }
    #ContinentIcon, #CountryIcon, #CityIcon {
      left: 230px;
    }
    #WebsiteIcon {
      width: 30px;
      position: relative;
      bottom: 350px;
      right: 90%;
    }
    #TwitterIcon, #FacebookIcon, #InstagramIcon {
      right: 80%;
    }
    #Card {
      height: 350px;
    }
  }
  @media only screen and (max-width: 883px) {
    .bt1 {
      margin-right: 0px;
      position: relative;
      right: 5px;
    }
    #Website {
      right: 75%;
    }
    #StatisticsCard {
      height: 300px;
    }
    #StatsText {
      left: -30px;
    }
    #StudentsToProfRatioText, #StudentsToProfRatio,
    #InternationalStudentsText, #InternationalStudents {
      top: 0px;
    }
    #NumOfStudents, #NumOfStudentsText, #FemaleToMaleRatioText, #FemaleToMaleRatio {
      top: 43px;
    }
    #AboutTitle {
      left: -0px;
    }
    #UniversityDetailsPage {
      height: 6000px;
    }
    #AboutCard {
      height: 400px;
    }
    #ContinentIcon, #CountryIcon, #CityIcon {
      left: 50%;
    }
    #TwitterIcon, #FacebookIcon, #InstagramIcon {
      right: 78%;
    }
  }
  @media only screen and (max-width: 610px) {
    #UniversityNameFarsi {
      font-size: 20px;
    }
    #UniversityNameEnglish {
      font-size: 15px;
    }
    #RankText {
      bottom: 350px;
    }
    #UniversityRank {
      bottom: 347px;
    }
    #Website {
      right: 65%;
    }
    .bt1 {
      display: block;
      margin: auto;
    }
    #BottomCard {
      height: 240px;
    }
    #StatisticsCard {
      height: 600px;
    }
    #StudentsToProfRatioText, #StudentsToProfRatio,
    #InternationalStudentsText, #InternationalStudents,
    #FemaleToMaleRatioText, #FemaleToMaleRatio, #NumOfStudentsText, #NumOfStudents {
      left: 0px;
    }
    #StudentsToProfRatioText, #StudentsToProfRatio {
      top: 100px;
    }
    #FemaleToMaleRatioText, #FemaleToMaleRatio {
      top: 200px;
    }
    #InternationalStudentsText, #InternationalStudents {
      top: 300px;
    }
    #UniversityDetailsPage {
      height: 6500px;
    }
    #AboutCard {
      height: 500px;
    }
    #ContinentIcon, #CountryIcon, #CityIcon {
      left: 50%;
    }
    #WebsiteIcon {
      width: 30px;
      position: relative;
      bottom: 350px;
      right: 90%;
    }
    #Website {
      left: 30px;
    }
    #TwitterIcon, #FacebookIcon, #InstagramIcon {
      bottom: 300px;
      right: 60%;
    }
    #WebsiteIcon {
      bottom: 300px;
    }
    #Website {
      bottom: 330px;
    }
    #RankText, #UniversityRank {
      bottom: 470px;
    }
  }
  @media only screen and (max-width: 580px) {
    #TwitterIcon, #FacebookIcon, #InstagramIcon {
      bottom: 320px;
      right: 110px;
    }
    #WebsiteIcon {
      bottom: 320px;
    }
    #Website {
      bottom: 350px;
    }
    #RankText, #UniversityRank {
      bottom: 490px;
    }
  }
  @media only screen and (max-width: 480px) {
    #UniversityNameFarsi {
      font-size: 15px;
    }
    #UniversityNameEnglish, #RankText, #UniversityRank, #Website, #UniversityContinent, #UniversityCity, #UniversityCountry{
      font-size: 10px;
    }
    #About {
      font-size: 10px;
    }
    #RankText {
      bottom: 290px;
    }
    #UniversityRank {
      bottom: 298px;
    }
    #Website {
      right: 65%;
    }
    #UniversityContinent {
      margin-top: 10px;
    }
    #UniversityCity, #UniversityCountry {
      margin-top: -30px;
    }
  }
  @media only screen and (max-width: 240px) {
    #UniversityNameFarsi {
      font-size: 15px;
    }
    #UniversityNameEnglish, #RankText, #UniversityRank, #Website, #UniversityContinent, #UniversityCity, #UniversityCountry{
      font-size: 10px;
    }
    #About {
      font-size: 10px;
    }
    #RankText {
      bottom: 290px;
    }
    #UniversityRank {
      bottom: 298px;
    }
    #Website {
      right: 65%;
    }
    #UniversityContinent {
      margin-top: 10px;
    }
    #UniversityCity, #UniversityCountry {
      margin-top: -30px;
    }

  }
</style>
