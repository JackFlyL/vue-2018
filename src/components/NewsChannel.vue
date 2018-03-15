<template>
  <div class="news-channel">
    <mt-header title="频道列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header_tabs">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
        <mt-tab-item id="4">选项四</mt-tab-item>
        <mt-tab-item id="5">选项五</mt-tab-item>
        <mt-tab-item id="6">选项六</mt-tab-item>
        <mt-tab-item id="7">选项七</mt-tab-item>
        <mt-tab-item id="8">选项八</mt-tab-item>
        <mt-tab-item id="9">选项九</mt-tab-item>
        <mt-tab-item id="10">选项四</mt-tab-item>
        <mt-tab-item id="11">选项五</mt-tab-item>
        <mt-tab-item id="12">选项六</mt-tab-item>
        <mt-tab-item id="13">选项七</mt-tab-item>
        <mt-tab-item id="14">选项八</mt-tab-item>
        <mt-tab-item id="15">选项九</mt-tab-item>
      </mt-navbar>
      <p @click="tooglePop()">+</p>
    </div>
    <mt-popup v-model="popupVisible"
              :closeOnClickModal="false"
              position="right">
      <channel-list v-on:increment="incrementTotal()"
                    :channel-type="channelType">
      </channel-list>
    </mt-popup>
    <pre>{{ channelType.name }}</pre>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(n, index) in todos" :title="'内容 ' + n.text" v-bind:key='index' />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n, index) in todos" :title="'测试 ' + n.text"  v-bind:key='index'/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n, index) in todos" :title="'选项 ' + n.text"  v-bind:key='index'/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import ChannelList from './ChannelList'

export default {
  name: 'NewsChannel',
  data () {
    return {
      dudu: 1,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个' }
      ],
      selected: `1`,
      popupVisible: false,
      channelType: { 'name': 'old' }
    }
  },
  methods: {
    tooglePop: function () {
      this.popupVisible = true
    },
    incrementTotal: function () {
      this.popupVisible = false
    }
  },
  components: {
    ChannelList: ChannelList
  }
}
</script>

<style lang='less' scoped>
  .mint-navbar {
    display: block;
    overflow-x: scroll;
    width: 91%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    .mint-tab-item {
      display: inline-block;
    }
  }

  .header_tabs {
    display: flex;

    p {
      flex: 1;
      text-align: center;
      line-height: 41px;
      font-size: 22px;
      font-weight: 900;
    }
  }
</style>
