<template>
  <div id="app">
    <div class="wrap-banner">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <Header />
      <newTime />
      <router-view/>
      <vue-particles
        class="particle"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        >
      </vue-particles>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import newTime from "@/components/newTime.vue";

export default {
  name: "app",
  components: {
    Header,
    newTime
  }
};
</script>
<style lang="less">
html,
body {
  height: 100vh;
  overflow-y: scroll;
}
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  .wrap-banner {
    // position: relative;
    // -webkit-align-items: center;
    // -ms-flex-align: center;
    // align-items: center;
    // display: -webkit-flex;
    // display: flex;
    width: 100%;
    min-height: 100vh;
    // justify-content: center;
    // z-index: 566;
    background-image: url("../static/bg2.jpg");
    background-size: cover;
    .particle {
      background-image: url("../static/bg2.jpg");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh;
      z-index: 555;
    }
  }
}
</style>
