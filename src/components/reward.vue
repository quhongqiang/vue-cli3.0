<template>
  <div class="reward">
    <p>如果觉得文章不错,请我吃个辣条吧~~ O_o</p>
    <div class="money"><div class="button" @click="isShow = !isShow">打赏</div></div>
    <transition name="fade">
      <ul class="img" v-show="isShow">
        <li><img src="../../static/wx.png" alt="微信"></li>
        <li><img src="../../static/zfb.png" alt="支付宝"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "reward",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    // reward () {
    //   this.isShow != this.isShow
    //   if (this.isShow == true) {
    //     this.isShow = false;
    //   }else {
    //     this.isShow = true;
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
.reward {
  position: relative;
  z-index: 999;
  p {
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    color: #fff;
  }
  .money {
    padding: 20px 0 40px;
    text-align: center;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .img {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 566;
    li {
      img {
        width: 260px;
        margin: 0 20px 30px;
        height: 270px;
      }
    }
  }
}
</style>
