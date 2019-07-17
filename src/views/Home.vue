<template>
  <div class="home">
    <HelloWorld :msg="msg" :dataList="dataList"/>
    <Reward />
    <v-Aside />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Aside from "@/components/aside.vue";
import Reward from "@/components/reward.vue";

export default {
  name: "home",
  data() {
    return {
      msg: "文章区域",
      dataList: {
        tie: "1",
        ttt: "2"
      }
    };
  },
  components: {
    HelloWorld,
    "v-Aside": Aside,
    Reward
  }
};
</script>

<style lang="less">
.home {
  position: relative;
  top: 100px;
  overflow: hidden;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
