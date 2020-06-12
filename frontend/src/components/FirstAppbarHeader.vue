<template>
  <div id="Header">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="topnav" id="myTopnav">
      <v-app-bar id="Header" color="#171717" dense fixed flat prominent height="70px">
        <!-- Left side of header -->
        <img id="LogoIcon" src="../assets/Icons/Logo.png" />
        <v-menu bottom origin="center center" open-on-click transition="fab-transition">
          <template v-slot:activator="{ on }">
            <router-link :to="{name: 'Home'}">
              <div dark text id="Apply" v-on="on">اپلیکاتو</div>
            </router-link>
          </template>
          <!-- <v-list color="#71ACF0">
          <v-list-item id="ListItem" dark v-for="(item, index) in items" :key="index" :to="item.link">
              <v-list-title>
                 {{ item.title }}
              </v-list-title>
          </v-list-item>
          </v-list>-->
        </v-menu>
        <v-spacer />
        <div id="ResponsiveNav">
          <v-menu bottom origin="center center" open-on-click transition="fab-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="#FFC61B" dark text id="Apply" v-on="on">اپلیکاتو</v-btn>
            </template>
          </v-menu>
        </div>
        <div id="LeftSideOfHeader">
          <router-link :to="{name: 'UniversitiesDetailView'}">
            <v-btn text color="white" id="Universities">دانشگاه‌ها</v-btn>
          </router-link>
          <router-link :to="{name: 'CountriesDetailView'}">
            <v-btn text color="white" id="Countries">کشورها</v-btn>
          </router-link>
          <router-link :to="{name: 'SubjectsDetailView'}">
            <v-btn text color="white" id="Fields">رشته‌ها</v-btn>
          </router-link>
          <router-link to>
            <v-btn text color="white" id="ContactUs">ارتباط با ما</v-btn>
          </router-link>
          <router-link to>
            <v-btn text color="#0793FF" id="AppName">اپلیکاتور</v-btn>
            <img id="ApplicatorIcon" src="../assets/Icons/Applicator.png" />
          </router-link>
        </div>
        <router-link v-if="!loggedIn" :to="{name: 'SignIn'}">
          <img id="LoginIcon" src="../assets/Icons/login.png" />
        </router-link>
        <router-link v-else :to="{name: 'ApplicantPersonalInfo'}">
          <img id="LoginIcon" src="../assets/Icons/login.png" />
        </router-link>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  beforeCreate: function() {
    if (localStorage.getItem("token")) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
  created : function() {
    if (localStorage.getItem("token")) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }  
  },
};
</script>

<style scoped>
#Header {
  z-index: 100;
}
#ResponsiveNav {
  display: none;
}
#Universities:hover,
#Countries:hover,
#Fields:hover,
#ContactUs:hover,
#AppName:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  opacity: 1;
  border: none;
}
#Apply,
#Universities,
#Countries,
#Fields,
#ContactUs,
#AppName {
  letter-spacing: 0px;
  color: black;
  display: inline-block;
  transition: 0.1s;
  text-decoration: none;
  color: white;
  font-family: "B Koodak";
  font-weight: 900;
  font-size: 24px;
}
#Universities,
#Countries,
#Fields,
#ContactUs,
#AppName {
  opacity: 0.9;
  text-align: center;
  vertical-align: baseline;
  right: 0px;
  height: 80%;
}
#Apply {
  font-family: "MRT_Ghalam-2";
  font-size: 40px;
  margin-top: 8px;
  color: #ffc61b;
  margin-right: 15px;
}
#Buttons {
  margin-left: 55px;
}
#ApplicatorIcon {
  width: 30px;
  position: relative;
  left: 10px;
  top: 10px;
  margin-top: 10px;
}
#LogoIcon {
  width: 55px;
  margin-top: 5px;
  position: relative;
}
#LoginIcon {
  width: 45px;
  position: relative;
  top: 3px;
  margin-top: 10px;
}
#LeftSideOfHeader {
  position: relative;
  left: 25px;
  height: 100%;
}
@media only screen and (max-width: 800px) {
  #Apply,
  #Universities,
  #Countries,
  #Fields,
  #ContactUs,
  #AppName {
    font-size: 10px;
    margin-top: 20px;
  }
  #Apply {
    margin-top: 30px;
  }
  #ContactUs {
    display: none;
  }
  #ApplicatorIcon {
    width: 15px;
  }
}
@media only screen and (max-width: 610px) {
}
@media only screen and (max-width: 480px) {
}
@media only screen and (max-width: 240px) {
}
</style>
