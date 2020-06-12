<template>
  <div id="UniversitiesPage">
    <app-header/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <div id="UniversitiesContent">
      <!-- Title & Searching -->
      <br>
      <h1 id="UniversitiesTitle">  دانشگاه‌ها </h1> <br> <br> <br> <br>
      <div id="View">
        <!-- <h3 id="ViewText"> طریقه نمایش:  </h3> -->
        <v-btn height="30" depressed id="List" color="#E7E7E7"> <router-link :to="{name: 'UniversitiesListView'}" id="ListView"> لیست </router-link> </v-btn>
        <v-btn height="30" depressed id="Details" color="#202020"> <router-link :to="{name: 'UniversitiesDetailView'}" id="DetailsView"> جزییات </router-link> </v-btn>
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
                    <v-text-field class="ma-0 pa-0 filterTextField" color="#FFC61B" outlined  background-color="#C3C3C3" solo dense flat placeholder="جستجوی دانشگاه" > <v-icon slot="append">search</v-icon> </v-text-field>
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
      <!-- List View Universities -->
      <div id="UniversitiesCard">
        <v-list id="List" color="black">
          <v-list-item id="ListItem" v-for="university in universities" :key="university.name">
            <v-list-item-content id="Universities">
              <router-link class="ListText" :to="{name: 'UniversityDetails',  params: {universityName: university.name, countryName: university.country}}">
                <v-list-item-title class="ListText">
                  <div id="UniversityFarsiName"> {{university.pName}} </div> <div id="UniversityEnglishName"> ({{university.name}}) </div>
                  <div id="LeftList">
                    <div id="StarRating" >
                      <v-rating
                        dense
                        color="#4C80AF"
                        v-model="university.rate"
                        small
                      ></v-rating>
                    </div>
                    <div id="UniversityCountry">
                      {{university.pCountry}}, {{university.pCity}}
                    </div>
                    <div id="UniversityRank">
                      رتبه {{university.rate}}
                    </div>
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
        universities: null
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
  body #UniversitiesPage {
    background-image: url("../../assets/STAR.jpg");
    background-repeat: round;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 250%;
    padding-bottom: 3%;
    bottom: 0px;
    margin-top: 60px;
  }

  #UniversitiesTitle {
    color: white;
    font-family: "B Koodak";
    text-align: right;
    font-weight: normal;
    margin-right: 20px;
  }
  #SearchTextFeild {
    text-align: left;
  }
  #UniversitiesContent {
    margin-left: 4%;
    margin-right: 3%;
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

  #UniversitiesCard {
    margin-right: 3%;
  }

  #UniversitiesList {
    background-color: #94B5E7;
  }

  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793FF;
  }

  .ListText {
    /* text-align: right; */
    text-decoration: none;
    color: #042D4B;
    position: relative;
    right: 1%;
  }
  #UniversityFarsiName, #UniversityEnglishName {
    display: inline-block;
    float: right;
  }
  #UniversityEnglishName {
    font-family: 'Comic Sans MS'
  }
  #UniversityFarsiName {
    font-size: 20px;
  }
  #Universities {
    position: relative;
    border-radius: 10px;
    height: 60px;
    background-color: #C3C3C3;
  }
  #ListItem {
    position: relative;
    margin-top: 0.5%;
  }
  #LeftList {
    /* display: inline-block; */
    /* float: left; */
    left: 40px;
    position: relative;
    margin: auto;
  }
  #StarRating, #UniversityRank, #UniversityCountry {
    color: white;
    float: left;
    display: inline-block;
    background-color: black;
    border-radius: 20px;
    padding: 0.5% 0.5% 0.5% 0.5%;
    width: fit-content(20em);
  }
  #UniversityRank, #UniversityCountry {
    margin-left: 10px;
}
</style>
