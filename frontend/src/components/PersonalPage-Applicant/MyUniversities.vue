<template>
  <div id="GeneralInfoPage">
    <app-header/>
    <div class="split left">
      <div class="centered l">
        <!-- <div id="MyUniversitiesText">دانشگاه‌های من</div>
        <link
          href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
          rel="stylesheet"
        />
        <div id="UniversitiesCard">
          <v-list id="List" color="black">
            <v-list-item id="ListItem" v-for="university in universities" :key="university.name">
              <v-list-item-content id="Universities">
                <router-link
                  class="ListText"
                  :to="{name: 'UniversityDetails',  params: {universityName: university.name, countryName: university.country}}"
                >
                  <v-list-item-title class="ListText">
                    <div id="UniversityFarsiName">{{university.farsiName}}</div>
                    <div id="UniversityEnglishName">({{university.name}})</div>
                    <div id="LeftList">
                      <div id="StarRating">
                        <v-rating dense color="#4C80AF" v-model="university.rating" small></v-rating>
                      </div>
                      <div id="UniversityCountry">{{university.country}}, {{university.city}}</div>
                      <div id="UniversityRank">رتبه 275</div>
                    </div>
                  </v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div> -->
      </div>
    </div>
    <div class="split right">
      <div class="centered r">
        <div id="Buttons">
          <router-link class="routerLink" :to="{name: 'ApplicantPersonalInfo'}">
            <div id="GeneralInfoButton">
              اطلاعات حساب کاربری
              <span id="Circle1"> 100 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyUniversities'}">
            <div id="MyUniversitiesButton"> دانشگاه‌های من </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantMyAdvisors'}">
            <div id="MyAdvisorButton"> مشاور من </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantCV'}">
            <div id="CVButton">
              سوابق و مدارک تحصیلی و علمی
              <span id="Circle2"> 43 </span>
            </div>
          </router-link>
          <router-link class="routerLink" :to="{name: 'ApplicantChangePassword'}">
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
import axios from "axios";

export default {
  components: {
    'app-header': AppbarHeader
  },
  data() {
    return {
      universities: [
        {
          farsiName: "روسکیلده دانشگاه",
          name: "Roskilde University",
          city: "Roskilde",
          country: "Denmark",
          established: 1972,
          style: {
            borderColor: "#C40233"
          },
          rating: 2
        },
        {
          farsiName: "دانشگاه صنعتی دانمارک",
          name: "Technical University Of Denmark",
          city: "Lyngby",
          country: "Denmark",
          established: 1829,
          image:
            "http://www.fora-etn.eu/wp-content/uploads/2017/05/Bygning_324-768x512.jpg",
          flag: "https://cdn.countryflags.com/thumbs/ireland/flag-800.png",
          style: {
            borderColor: "#C40233"
          },
          rating: 3
        },
        {
          farsiName: "دانشگاه صنعتی دانمارک",
          name: "Technical University Of Denmark",
          city: "Lyngby",
          country: "Denmark",
          established: 1829,
          image:
            "http://www.fora-etn.eu/wp-content/uploads/2017/05/Bygning_324-768x512.jpg",
          flag: "https://cdn.countryflags.com/thumbs/ireland/flag-800.png",
          style: {
            borderColor: "#C40233"
          },
          rating: 5
        },
        {
          farsiName: "دانشگاه کپنهاگ",
          name: "University Of Copenhagen",
          city: "Copenhagen",
          country: "Denmark",
          established: 1479,
          image:
            "https://expat-03cdkbceglbjg.stackpathdns.com/upload/guide/1565876845-university-copenhagen-news_item_slider-t1565876845.jpg",
          flag: "https://cdn.countryflags.com/thumbs/ireland/flag-800.png",
          style: {
            borderColor: "#C40233"
          },
          rating: 2
        },
        {
          farsiName: "دانشگاه دانمارک جنوبی",
          name: "University Of Southern Denmark",
          city: "Odense",
          country: "Denmark",
          established: 1998,
          image:
            "http://www.mladiinfo.eu/wp-content/uploads/bfi_thumb/kolding-campus-university-southern-denmark-x070116-1-1920x640-35nv5fjd9e017797btlzi8.jpg",
          flag: "https://cdn.countryflags.com/thumbs/ireland/flag-800.png",
          style: {
            borderColor: "#C40233"
          },
          rating: 3
        }
      ]
    };
  }
};
</script>
<style scoped>
  .split {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
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
    z-index: 100;
    width: 100%;
    height: 100%;
  }
  .l {
    top: 35%;
    position: relative;
    z-index: 100;
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
  #MyUniversitiesButton {
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
    color: red;
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

  #UniversitiesCard {
    margin-right: 3%;
  }

  #UniversitiesList {
    background-color: #94b5e7;
  }

  h3 {
    margin: 0px 0px 0px 40px;
    font-weight: lighter;
    color: #0793ff;
  }

  .ListText {
    text-align: right;
    text-decoration: none;
    color: #042d4b;
    position: relative;
    right: 1%;
  }
  #UniversityFarsiName,
  #UniversityEnglishName {
    display: inline-block;
  }
  #UniversityEnglishName {
    font-family: "Comic Sans MS";
  }
  #UniversityFarsiName {
    font-size: 20px;
  }
  #Universities {
    position: relative;
    border-radius: 10px;
    height: 60px;
    background-color: #c3c3c3;
    width: 900px;
  }
  #ListItem {
    position: relative;
    margin-top: 0.5%;
  }
  #LeftList {
    display: inline-block;
    float: left;
    margin-left: 3%;
    position: relative;
  }
  #StarRating,
  #UniversityRank,
  #UniversityCountry {
    color: white;
    /* float: left; */
    display: inline-block;
    background-color: black;
    border-radius: 20px;
    /* margin-left: 10%; */
    padding: 1% 2% 0% 2%;
    width: 160px;
    text-align: center;
  }
  #StarRating,
  #UniversityRank {
    width: 110px;
  }
  #MyUniversitiesText {
    font-size: 3rem;
    text-align: center;
    color: #ffc61b;
    font-family: "B Koodak";
  }
</style>
