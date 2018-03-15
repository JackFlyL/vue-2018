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
  #app {
    height: 100%;

    > .home {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: url('../assets/home-bg.jpg');
      background-size: cover;
    }

    > .home .mint-button {
      width: 44vw;
    }
  }
</style>
