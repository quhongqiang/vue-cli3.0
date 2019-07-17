<template>
  <div class="hello" @click="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    dataList: Object
  },
  mounted() {
    console.log(this);
  },
  methods: {
    hello() {
      alert(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 999;
  color: red;
  background: #fff;
  opacity: 0.8;
}
</style>
