<template>
  <div class="home">
    <router-link to="/news_channel">
      <mt-button >
        <img src="../assets/news-log.png" height="20" width="20" slot="icon">
        知天下
      </mt-button>
    </router-link>

    {{ name }}
    <mt-button @click="fun">点击改变msg</mt-button>
    <br>
    msg: {{ msg }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      name: 'test-demo-vuex'
    }
  },
  computed: {...mapGetters(['msg'])}, // 对应getters中的msg
  methods: {...mapActions(['fun'])} // 对应 Actions中fun方法
}
</script>

<style lang='less'>
  body {
    margin: 0;
    font-size:14px;
    font-family:"Microsoft YaHei",sans-serif;/*设备默认字体*/
    color:#333;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  /*reset css*/
  *, ::before, ::after{
    margin:0;
    padding:0;
    /*清除移动端默认的点击高亮效果*/
    -webkit-tap-highlight-color:transparent;
    /*设置以边框开始计算宽度*/
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }

  a {
    color:#333;
    text-decoration:none;
  }

  a:hover {
    text-decoration:none;
  }

  ul, ol{
    list-style:none;
  }

  input {
    border:none;
    outline:none;
    /*清除移动端默认的表单样式*/
    -webkit-appearance:none;
  }

  #app {
    height: 100%;

    > .home {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: url('../assets/home-bg.jpg');
    }

    > .home .mint-button {
      width: 44vw;
    }
  }
</style>
