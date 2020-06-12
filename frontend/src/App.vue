<template>
  <v-app v-if="!url">
    <Loading> </Loading>
    <app-header/>
    <v-content>
      <link href='https://fonts.googleapis.com/css?family=Alegreya Sans SC' rel='stylesheet'>
      <div id="app">
        <router-view/>
      </div>
    </v-content>
  </v-app>
  <v-app v-else>
    <Loading> </Loading>
    <app-header2/>
    <v-content>
      <link href='https://fonts.googleapis.com/css?family=Alegreya Sans SC' rel='stylesheet'>
      <div id="app">
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import AppbarHeader from './components/FirstAppbarHeader'
import AppbarHeader2 from './components/SecondAppbarHeader'

import Loading from './components/Loading'
export default {
  name: 'App',
  url: false,
  hello: true,
  components: {
    'app-header': AppbarHeader,
    'app-header2': AppbarHeader2,
    Loading
  },
  beforeCreate : function() {
    if (this.$route.path === "/signin" || 
        this.$route.path === "/signup" || 
        this.$route.path === "/renewpassword" || 
        this.$route.path === "/signupvalidation") 
    {
      this.url = true;
    }
    else {
      this.url = false;
    }
  },
  watch:{
    $route (to, from){
      if (this.$route.path === "/signin" || 
          this.$route.path === "/signup" || 
          this.$route.path === "/renewpassword" || 
          this.$route.path === "/signupvalidation")
      {
        this.url = true;
      }
      else {
        this.url = false;
      }
    }
  } 
}
</script>

<style>
@font-face {
  font-family: "MRT_Ghalam-2";
  src: url('Fonts/MJGhalam.ttf');
}
@font-face {
  font-family: "B Koodak";
  src: url('Fonts/BKoodakBold.ttf');
}
#app {
  font-family: "B Koodak";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
