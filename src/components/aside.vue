<template>
<transition name="el-zoom-in-left">
  <div class="aside" v-show="isReallShow">
    <img class="img" src="@/assets/photo.png" alt="我的头像" title="我的头像">
    <p class="name wow fadeInUp" data-wow-duration="1s">曲小强</p>
    <p class="title wow fadeInLeft" data-wow-duration="1.3s">我懒得告诉你为什么懒得不告诉你！~~</p>
    <ul class="my-com wow fadeInRight" data-wow-duration="1.6s">
      <li>
        <a href="https://github.com/quhongqiang" target="_blank">
          <img src="@/assets/icon/github.png" alt="GitHub">
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://blog.csdn.net/quhongqiang" target="_blank">
          <img src="@/assets/icon/csdn.png" alt="csdn">
          <span>我的CSDN</span>
        </a>
      </li>
    </ul>
    <div class="link wow fadeInUp" data-wow-duration="1.9s">
      <img src="@/assets/icon/link.png" alt="youqing">
      <span>推荐学习地址</span><br />
      <a href="http://www.w3school.com.cn/" target="_blank">w3school</a>
      <a href="http://www.runoob.com/" target="_blank">菜鸟教程</a>
      <a href="https://www.liaoxuefeng.com/" target="_blank">廖雪峰的官方网站</a>
      <a href="https://www.iconfont.cn/" target="_blank"></a>
      <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>
      <a href="http://jspang.com/" target="_blank">技术胖的博客</a>
      <a href="https://react.docschina.org/" target="_blank">React中文网</a>
      <br /><br /><br />
      <img src="@/assets/icon/link.png" alt="youqing">
      <span>推荐实用地址</span><br />
      <a href="https://tinypng.com/" target="_blank">熊猫压缩图片</a>
      <a href="https://ant.design/docs/react/introduce-cn" target="_blank">蚂蚁金服PC</a>
      <a href="https://mobile.ant.design/docs/react/introduce-cn" target="_blank">蚂蚁金服移动端</a>
      <a href="http://www.jq22.com/" target="_blank">JQ插件库</a>
      <a href="http://myjson.com/" target="_blank">JSON数据</a>
    </div>
    <div class="exit" @click="hideMenu">
      <img src="@/assets/icon/delete.png" alt="退出" title="关闭悬窗">
    </div>
  </div>
  </transition>
</template>

<script>
import { WOW } from "wowjs";
import store from "../store";
export default {
  data() {
    return {};
  },
  mounted() {
    new WOW({
      live: false
    }).init();
  },
  computed: {
    // 显示
    isReallShow() {
      return store.state.isShow;
    }
  },
  methods: {
    // 隐藏菜单
    hideMenu() {
      store.dispatch({
        type: "hideSideBar"
      });
    }
  }
};
</script>


<style lang="less" scoped>
a {
  border-bottom: 1px solid #a5a5a5;
  height: 23px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.aside {
  width: 320px;
  min-height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  text-align: center;
  color: #a5a5a5;
  cursor: pointer;
  .img {
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #f5f5f5;
  }
  .name {
    margin: 10px 0;
    letter-spacing: 2px;
  }
  .title {
    font-size: 14px;
  }
  .my-com {
    width: 70%;
    margin: 25px auto 0;
    display: flex;
    text-align: center;
    li {
      flex: 1;

      a::before {
        display: inline-block;
        vertical-align: middle;
        margin-right: 3px;
        content: " ";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: blue;
      }
      img {
        width: 14px;
        height: 14px;
        margin-right: 4px;
      }
      span {
        color: #a5a5a5;
        font-size: 14px;
      }
    }
  }
  .link {
    width: 90%;
    margin: 30px auto 0;
    margin-top: 30px;
    color: #fff;
    font-size: 14px;
    img {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
    a {
      color: #fff;
      margin-right: 20px;
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .exit {
    width: 40px;
    height: 40px;
    margin: 100px auto 0;
    img {
      width: 100%;
    }
  }
}
</style>
