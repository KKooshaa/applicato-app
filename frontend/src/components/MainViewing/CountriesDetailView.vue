<template>
  <div id="CountriesPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <div id="CountriesContent">
      <!-- Title & Searching -->
      <br>
      <h1 id="CountriesTitle"> کشورها </h1> <br> <br> <br> <br>
      <div id="View">
        <!-- <h3 id="ViewText"> طریقه نمایش:  </h3> -->
        <v-btn height="30" depressed id="List" color="#202020"> <router-link :to="{name: 'CountriesListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#E7E7E7"> <router-link :to="{name: 'CountriesDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
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
                    <v-text-field class="ma-0 pa-0 filterTextField" color="#FFC61B" outlined background-color="#C3C3C3" solo dense flat placeholder="جستجوی کشور " > <v-icon slot="append">search</v-icon> </v-text-field>
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
                        <div id="MaxCost">حداکثر هزینه‌ی ماهانه</div>
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
                      نام کشور
                    </div>
                    <div class="chip" :style="isClicked2 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked2">
                      هزینه‌ی زندگی
                    </div>
                    <div class="chip" :style="isClicked3 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked3">
                      توسعه‌ی انسانی
                    </div>
                    <div class="chip" :style="isClicked4 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked4">
                      آلودگی هوا
                    </div>
                    <div class="chip" :style="isClicked5 ? { 'background-color': '#FFC61B' } : null" @click="toggleIsClicked5">
                      کیفیت دانشگاه‌ها
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
                      <div id="MaxCost">حداقل شاخص کیفیت دانشگاه‌ها</div>
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
            <v-btn height="60" id="bt1" class="bt" tile color="#C40233"> <div class="Continent"> آسیا </div></v-btn>
            <v-btn height="60" id="bt2" class="bt" tile color="#704D37"> <div class="Continent">  آفریقا </div></v-btn>
            <v-btn height="60" id="bt3" class="bt" tile color="#412B5A"> <div class="Continent"> آمریکای جنوبی </div></v-btn>
            <v-btn height="60" id="bt4" class="bt" tile color="#00255C"> <div class="Continent"> آمریکای شمالی </div></v-btn>
            <v-btn height="60" id="bt5" class="bt" tile color="#025835"> <div class="Continent"> اروپا </div></v-btn>
            <v-btn height="60" id="bt6" class="bt" tile color="#DC9A0C">  <div class="Continent"> استرالیا و اقیانوسیه </div></v-btn>
          </v-card-text>
        </div>
      </div>

      <div class="align">

        <div v-for="country in countries" :key="country.name">
          <div class="card-container" id="EachCard">
            <div class="card-horizontal">
              <div class="card-front">
                <v-card class="card-front-content" height= "250" mx-auto grid-list-md id="Card" :elevation="3">
                  <v-img class="white--text align-end" height="180px" :src="country.image">
                  </v-img>
                  <div id="CardBottom">
                    <v-card-text>
                      <span class="inner-circle" :style="[
                      country.continent == 'Asia' ? {'border-color': '#C40233'} :
                      country.continent == 'North America' ? {'border-color': '#00255C'} :
                      country.continent == 'Europe' ? {'border-color': '#025835'} :
                      country.continent == 'Australia' || country.continent == 'Oceania' ? {'border-color': '#DC9A0C'} :
                      country.continent == 'South America' ? {'border-color': '#412B5A'} :
                      country.continent == 'Africa' ? {'border-color': '#704D37'} :
                      {'background-color': '#C3C3C3'}]">
                      <img id="Flag" :src="country.flag">
                      </span>
                      <div id="CountryName"> {{country.pName}} </div>
                      <div id="MoreCountryInfoText1" :style="[
                      country.continent == 'Asia' ? {'background-color': '#C40233'} :
                      country.continent == 'North America' ? {'background-color': '#00255C'} :
                      country.continent == 'Europe' ? {'background-color': '#025835'} :
                      country.continent == 'Australia' || country.continent == 'Oceania' ? {'background-color': '#DC9A0C'} :
                      country.continent == 'South America' ? {'background-color': '#412B5A'} :
                      country.continent == 'Africa' ? {'background-color': '#704D37'} :
                      {'background-color': '#C3C3C3'}]"> تعداد دانشگاه ها: {{country.numOfUniversities}}  </div> <br>
                      <div id="MoreCountryInfoText2" :style="[
                      country.continent == 'Asia' ? {'background-color': '#C40233'} :
                      country.continent == 'North America' ? {'background-color': '#00255C'} :
                      country.continent == 'Europe' ? {'background-color': '#025835'} :
                      country.continent == 'Australia' || country.continent == 'Oceania' ? {'background-color': '#DC9A0C'} :
                      country.continent == 'South America' ? {'background-color': '#412B5A'} :
                      country.continent == 'Africa' ? {'background-color': '#704D37'} :
                      {'background-color': '#C3C3C3'}]"> پایتخت:  {{country.pCapitalName}} </div>

                    </v-card-text>
                  </div>
                </v-card>
              </div>

              <div class="card-back">
                <v-card :style="[
               country.continent == 'Asia' ? {'background-color': '#C40233'} :
               country.continent == 'North America' ? {'background-color': '#00255C'} :
               country.continent == 'Europe' ? {'background-color': '#025835'} :
               country.continent == 'Australia' || country.continent == 'Oceania' ? {'background-color': '#DC9A0C'} :
               country.continent == 'South America' ? {'background-color': '#412B5A'} :
               country.continent == 'Africa' ? {'background-color': '#704D37'} :
               {'background-color': '#C3C3C3'}]"
              class="card-back-content" height="252px" mx-auto grid-list-md id="Card" :elevation="3">
                  <div id="CardBottom">
                    <v-card-text id="BackText">
                      <div id="BackFlagContent">
                        <img id="BackFlag" :src="country.flag">
                      </div>
                      <div id="BackCountryName">
                        {{country.pName}}
                      </div>
                      <div class="BackCountryInfo">
                        <br>
                        پایتخت: {{country.pCapitalName}}
                      </div>
                      <div class="BackCountryInfo">
                        <br>
                        زبان رسمی: {{country.pOfficialLanguage}}
                      </div>
                      <div class="BackCountryInfo">
                        <br>
                        جمعیت: {{country.population}}
                      </div>
                      <div class="BackCountryInfo">
                        <br>
                        تعداد دانشگاه‌ها: {{country.numOfUniversities}}
                      </div>
                      <router-link id="ExploreText" :to="{}">
                        <v-btn color="#C3C3C3" rounded id="ExploreText">
                          <h3 :style="[
                          country.continent == 'Asia' ? {'color': '#C40233'} :
                          country.continent == 'North America' ? {'color': '#00255C'} :
                          country.continent == 'Europe' ? {'color': '#025835'} :
                          country.continent == 'Australia' || country.continent == 'Oceania' ? {'color': '#DC9A0C'} :
                          country.continent == 'South America' ? {'color': '#412B5A'} :
                          country.continent == 'Africa' ? {'color': '#704D37'} :
                          {'color': '#C3C3C3'}]" id="MoreText">بیشتر </h3>
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
  <!-- </div> -->
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
        countries: null,
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
      axios.get('http://localhost:8084/countryCategory')
        .then(response => {
          this.countries = [...response.data]
        })
    }
  }
</script>

<style>
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

  #Flag {
    border-radius: 20px;
    width: 33px;
    height: 33px;
    position: relative;
    top: 7%;
    left: 0.5px;
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
    right: 1.6%;
    top: 76%;
  }
  .align{
    /* padding-top:40px; */
    /* width:100%; */
    display:flex;
    flex-flow:row wrap;
    /* justify-content:space-around;
    align-items:space-around; */
    position: relative;
    right: 4.5%;
  }
  .card-container{
    -webkit-perspective:1200;
    -moz-perspective:1200;
    perspective:1200;
  }
  .card-horizontal{
    height:250px;
    width:650px;
    -moz-transform-style:preserve-3d;
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d;
    transition:all .8s ease;
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
    max-width: 650px;
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
  body #CountriesPage {
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

  #CountriesTitle {
    color: white;
    font-family: "Segoe UI", sans-serif;
    text-align: right;
    font-weight: normal;
    margin-right: 20px;
  }

  #ExploreText {
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0px;
    position: relative;
    bottom: 15px;
  }

  #Card {
    /* margin: 20px 20px 20px 20px; */
    border-radius: 10px;
    background-color: #C3C3C3;
  }

  #CountryName {
    color: #042D4B;
    font-size: 40px;
    float: right;
    position: relative;
    right: 10%;
    top: 10px;
    display: inline-block;
  }

  #MoreCountryInfoText1, #MoreCountryInfoText2 {
    color: white;
    display: inline-block;
    text-align: left;
    font-size: 15px;
    font-weight: lighter;
    position: relative;
    float: left;
    bottom: 5px;
    border-radius: 10px;
  }
  #MoreCountryInfoText2 {
    margin-top: 10px;
    padding-left: 2%;
    padding-right: 2%;
    width: fit-content(20em);
  }
  #MoreCountryInfoText1 {
    padding-right: 2%;
    padding-left: 2%;
    width: fit-content(20em);

  }
  #CountriesContent {
    margin-left: 4%;
    margin-right: 3%;
  }
  #EachCard {
    margin-top: 5%;
    margin-left: 20px;
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

  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793FF;
  }
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
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
  #bt6 {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .Continent {
    color: white;
  }
  #BackText {
    color: #042D4B;
    text-align: right;
  }
  #BackCountryName {
    font-size: 50px;
    color: white;
    display: inline-block;
    position: relative;
    bottom: 5px;
    right: 1%;
  }
  .BackCountryInfo {
    font-size: 20px;
    color: white;
  }
  #ExploreText {
    float: left;
    display: inline-block;
    color: white;
  }
  #BackFlag{
    border-radius: 20px;
    width: 38px;
    height: 38px;
  }
  #BackFlagContent {
    display: inline-block;
  }
  #MoreText {
    position: relative;
    right: 25%;
  }
  @media only screen and (max-width: 1490px) {
    .bt {
      width: 200px;
    }
    .card-front, .card-back{
      max-width: 600px;
    }
  }
  @media only screen and (max-width: 1230px) {
    .bt {
      width: 151px;
    }
  }
  @media only screen and (max-width: 920px) {
    .bt {
      border-radius: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .card-front, .card-back{
      max-width: 400px;
    }
    #CountryName {
      position: relative;
    }
    #EachCard {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media only screen and (max-width: 1535px) {
    /* .card-front, .card-back{
      max-width: 400px;
      right: 10%;
    } */
    .align{
      flex-flow:none;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
