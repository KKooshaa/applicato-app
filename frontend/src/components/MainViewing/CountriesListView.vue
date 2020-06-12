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
        <v-btn height="30" depressed id="List" color="#E7E7E7"> <router-link :to="{name: 'CountriesListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#202020"> <router-link :to="{name: 'CountriesDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
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
            <v-btn height="60" class="bt" tile color="#704D37"> <div class="Continent">  آفریقا </div></v-btn>
            <v-btn height="60" class="bt" tile color="#412B5A"> <div class="Continent"> آمریکای جنوبی </div></v-btn>
            <v-btn height="60" class="bt" tile color="#00255C"> <div class="Continent"> آمریکای شمالی </div></v-btn>
            <v-btn height="60" class="bt" tile color="#025835"> <div class="Continent"> اروپا </div></v-btn>
            <v-btn height="60" id="bt6" class="bt" tile color="#DC9A0C">  <div class="Continent"> استرالیا و اقیانوسیه </div></v-btn>
          </v-card-text>
        </div>
      </div>
      <!-- Country List  -->
      <!-- List View Countries -->
      <div id="CountriesCard">
        <v-list id="List" color="black">
          <v-list-item id="ListItem" v-for="country in countries" :key="country.name">
            <v-list-item-content id="Countries"  :style="[
            country.continent == 'Asia' ? {'border-color': '#C40233'} :
            country.continent == 'North America' ? {'border-color': '#00255C'} :
            country.continent == 'Europe' ? {'border-color': '#025835'} :
            country.continent == 'Australia' || country.continent == 'Oceania' ? {'border-color': '#DC9A0C'} :
            country.continent == 'South America' ? {'border-color': '#412B5A'} :
            country.continent == 'Africa' ? {'border-color': '#704D37'} :
            {'background-color': '#C3C3C3'}]">
              <router-link class="ListText" :to="{}">
                <v-list-item-title class="ListText">
                  <span class="inner-circle"  :style="[
                  country.continent == 'Asia' ? {'border-color': '#C40233'} :
                  country.continent == 'North America' ? {'border-color': '#00255C'} :
                  country.continent == 'Europe' ? {'border-color': '#025835'} :
                  country.continent == 'Australia' || country.continent == 'Oceania' ? {'border-color': '#DC9A0C'} :
                  country.continent == 'South America' ? {'border-color': '#412B5A'} :
                  country.continent == 'Africa' ? {'border-color': '#704D37'} :
                  {'background-color': '#C3C3C3'}]">
                    <img id="Flag" :src="country.flag">
                  </span>
                  <div id="CName"> {{country.pName}} </div>
                  <div class="CountryInfo">   تعداد دانشگاه‌ها: {{country.numOfUniversities}} </div>
                  <div class="CountryInfo">      جمعیت:  {{country.population}}  |  </div>
                  <div class="CountryInfo"> زبان رسمی:  {{country.pOfficialLanguage}}  |   </div>
                  <div class="CountryInfo"> پایتخت: {{country.pCapitalName}}   |  </div>
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
        isClicked4: false,
        isClicked5: false,
        incClicked: false,
        decClicked: false,
        countries: [{
          name: 'ایرلند',
          flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
          style: {
            borderColor: '#025835'
          }
        },
          {
            name: 'کانادا',
            flag: 'https://cdn.countryflags.com/thumbs/canada/flag-800.png',
            style: {
              borderColor: '#00255C'
            }
          },
          {
            name: 'برزیل',
            flag: 'https://cdn.countryflags.com/thumbs/brazil/flag-800.png',
            style: {
              borderColor: '#412B5A'
            }
          },
          {
            name: 'نیجریه',
            flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
            style: {
              borderColor: '#704D37'
            }
          },
          {
            name: 'نیوزیلند',
            flag: 'https://cdn.countryflags.com/thumbs/ireland/flag-800.png',
            style: {
              borderColor: '#025835'
            }
          },
          {
            name: 'ژاپن',
            flag: 'https://cdn.countryflags.com/thumbs/japan/flag-800.png',
            style: {
              borderColor: '#C40233'
            }
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
    },
    mounted () {
      axios.get('http://localhost:8084/countryCategory')
        .then(response => {
          this.countries = [...response.data]
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
  body #CountriesPage {
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

  #CountriesContent {
    height: auto;
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
    right: 12px;
  }

  #SearchTextFeild {
    text-align: left;
  }

  #CountriesContent {
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

  #CountriesCard {
    /* margin-top: 50px; */
    margin-right: 3%;
  }

  /* #CountriesList {
    background-color: #94B5E7;
  } */

  .bt {
    position: relative;
    margin-left: -20px;
    text-decoration: none;
    width: 240px;
    height: 70px;
    right: 10px;
    letter-spacing: 0px;
  }
  #bt1 {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  #bt6 {
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
  #Countries {
    position: relative;
    border-radius: 10px;
    height: 60px;
    background-color: #C3C3C3;
  }
  .Continent {
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
    top: 9%;
    right: 3px;
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
    right: 0.6%;
    top: 10%;
  }
  #CName {
    color: #042D4B;
    font-size: 40px;
    float: right;
    position: relative;
    right: 5%;
    display: inline-block;
    bottom: 5px;
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
    #CName {
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
    body #CountriesPage {
      min-height: 240%;
    }
    #CName {
      right: 9%;
    }
    .CountryInfo {
      top: 0px;
    }
  }
</style>
