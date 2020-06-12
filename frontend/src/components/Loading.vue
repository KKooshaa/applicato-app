<template>
  <div id="Loading" v-if="loading">
    <div class="half-circle-spinner">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async created () {
      this.loading = true
      try {
        await
        fetch('http://localhost:8080/')
      } catch (e) {
        this.error = e
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
/* Loading Animation: https://epic-spinners.epicmax.co/?ref=madewithvuejs.com */
.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: relative;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: rgb(255, 200, 0) ;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: rgb(255, 200, 0);
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }
#Loading {
  position: absolute;
  margin-top: 400px;
  margin-left: 720px;
  z-index: 1;
}
</style>
