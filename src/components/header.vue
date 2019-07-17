<template>
  <div class="header-wrap">
    <div class="me">
      <img class="img" src="@/assets/me-bg.png" alt="bg">
      <img class="img2" src="@/assets/photo.png" alt="me" @click="showMenu">
    </div>
    <div class="headers">
      <div class="header-logo">
        <span class="logo-line-before"></span>
        <span class="logo-line-center">人力终有穷尽,极尽方可升华~！</span>
        <span class="logo-line-after"></span>
      </div>
      <ul class="nav">
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/hove.svg" alt="首页">
            <span>首页</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/biaoqian.svg" alt="标签">
            <span>标签</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/fenlei.svg" alt="分类" class="bigIcon">
            <span>分类</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/shenghuo.svg" alt="生活趣事">
            <span>生活趣事</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/youqing.svg" alt="友情链接" class="bigIcon">
            <span>链接</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/about">
            <img src="@/assets/icon/guanyu.svg" alt="关于">
            <span>关于</span>
          </router-link>
        </li>
        <li class="exammple">
          <router-link to="/">
            <img src="@/assets/icon/我的简历.svg" alt="我的简历" class="bigIcon">
            <span>我的简历</span>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "header-wrap",
  data() {
    return {};
  },
  methods: {
    // 显示菜单菜单
    showMenu() {
      store.dispatch({
        type: "showSideBar"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  z-index: 1000;
  .me {
    width: 100px;
    height: 100px;
    position: relative;
    float: left;
    .img {
      width: 100%;
      height: 100%;
    }
    .img2 {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      animation: run 6s linear 0s infinite;
      -webkit-animation: run 6s linear 0s infinite;
      &:hover {
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
      }
    }
    @keyframes run {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes run {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
  .headers {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 50px;
    padding: 23px 0;
    line-height: 50px;
    .header-logo {
      display: inline-block;
      overflow: hidden;
      .logo-line-before,
      .logo-line-after {
        display: block;
        overflow: hidden;
        margin: 0 auto;
        width: 75%;
        height: 2px;
        background: #000;
      }
      .logo-line-before {
        position: relative;
        left: -100%;
        width: 75%;
        height: 2px;
        animation: aaa 3s infinite alternate;
        -webkit-animation: aaa 3s infinite alternate; /*Safari and Chrome*/
        -webkit-animation-fill-mode: both;
      }
      .logo-line-after {
        position: relative;
        right: -100%;
        width: 75%;
        height: 2px;
        animation: bbb 3s infinite alternate;
        -webkit-animation: bbb 3s infinite alternate; /*Safari and Chrome*/
        -webkit-animation-fill-mode: both;
      }
      @keyframes aaa {
        from {
          left: -100%;
        }
        to {
          left: 0;
        }
      }
      @-webkit-keyframes aaa {
        from {
          left: -100%;
        }
        to {
          left: 0;
        }
      }
      @keyframes bbb {
        from {
          right: -100%;
        }
        to {
          right: 0;
        }
      }
      @-webkit-keyframes bbb {
        from {
          right: -100%;
        }
        to {
          right: 0;
        }
      }
      .logo-line-center {
        font-size: 22px;
        font-weight: bolder;
        font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
      }
    }
    .nav {
      float: right;
      display: flex;
      li {
        font-size: 16px;
        padding: 0 15px;
        margin-right: 5px;
        img {
          width: 15px;
          height: 15px;
          float: left;
          margin: 16px 10px 16px 0;
        }
        .bigIcon {
          width: 18px;
          height: 18px;
          margin: 15px 10px 11px 0;
        }
      }
    }
  }
}
</style>
