<!-- Star Icon -->
<template>
<div id="UniversitiesPage">

  <div id="UniversitiesContent">
    <!-- Title & Searching -->
    <br>
    <h1 id="UniversitiesTitle"> !همین حالا شروع کنید </h1> <br>
    <v-text-field id="SearchTextFeild" dark label="جستجوی دانشگاه" hide-details="auto"></v-text-field>
    <div id="View">
      <h3 id="ViewText"> طریقه نمایش </h3>
      <ul>
        <li>
          <router-link :to="{name: 'UniversitiesListView'}" id="ListView"> لیست </router-link>
        </li>
        <li>
          <router-link :to="{name: 'UniversitiesDetailView'}" id="DetailsView"> جزییات </router-link>
        </li>
      </ul>
    </div>

    <!-- Detailed View Universities List Cards -->
    <div v-for="university in universities" :key="university.UniversityName" >
      <v-hover v-slot:default="{ hover }">
      <v-card width="450" mx-auto grid-list-md id="Card" :elevation="3" :class="{ 'on-hover': hover }">
        <v-img class="white--text align-end" height="200px" :src="UI">
          <v-card-title> {{university.UniversityName}} </v-card-title>
        </v-img>

        <div id="CardBottom">
          <v-card-subtitle id="CardSubtitle" class="pb-0"> تعداد دانشجویان بین المللی: {{university.IntlStudents}}</v-card-subtitle>

          <v-card-text id="CardText" class="text--primary">
            <div>{{university.Country}}</div>
          </v-card-text>

          <v-card-actions>
            <router-link id="DetailsText" :to="{name: 'UniversityDetails', params: {universityName: university.UniversityName, countryName: university.Country}}">
              <v-btn color="#71ACF0" text id="DetailsText">
                اطلاعات دانشگاه
              </v-btn>
            </router-link>
            <v-btn color="#71ACF0" text id="BookMarkText">
                  ذخیره
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-hover>

    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      universities: null,
      UI: 'https://gdkfiles.visitdenmark.com/files/484/146932_aarhus_universitetspark.jpg?width=1024'
    }
  },
  mounted () {
    axios.get('http://localhost:8084/uni/show')
      .then(response => {
        this.universities = [...response.data]
      })
  }
}
</script>

<style scoped>
body #UniversitiesPage {
  background-color: #171717;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  padding-bottom: 30px;
}

#UniversitiesTitle {
  color: white;
  font-family: "Segoe UI", sans-serif;
  text-align: right;
  font-weight: normal;
  margin-right: 20px;
}

#DetailsText {
  text-decoration: none;
  font-weight: bold;
  margin-left: 48px;
}

#BookMarkText {
  font-weight: bold;
  text-align: center;
}

#Card {
  float: left;
  margin: 20px 20px 20px 0px;
}

#SearchTextFeild {
  text-align: left;
}

#CardSubtitle,
#CardText {
  text-align: right;
}

#UniversitiesContent {
  margin-left: 50px;
  margin-right: 50px;
}

#CardBottom {
  background-color: #E7E7E7;
}

#View {
  color: white;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: -49px;
  margin-right: 10px;
}

ul li {
  /* list-style: none; */
  display: inline;
  margin: 0px 20px 0px 0px;
  font-weight: lighter;
  list-style-type: circle;
}

#ListView, #DetailsView {
  text-decoration: none;
  color: rgb(236, 211, 118);
}

h3 {
  margin: 0px 0px 0px 40px;
  font-weight: lighter;
  color: rgb(255, 200, 0);
}

.v-text-field {
  margin: 0px 250px 30px 0px;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
