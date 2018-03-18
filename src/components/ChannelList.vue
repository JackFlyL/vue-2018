<template>
  <div class="channel_list">
    <div class="header">
      <span>频道管理</span>
      <span class="close" @click="close">x</span>
    </div>
    <div class="container">
      <div class="con_selected">
        <p v-for="(val, key) in list" :key="key" @click="selectTab(key + 1)">{{ val.name }}</p>
        <p class="hidden"></p>
        <p class="hidden"></p>
      </div>
      <div class="alternative_tabs">
        <header class="cont_header">
          点击添加更多频道
        </header>
        <div class="con_alternative">
          <p v-for="(val, key) in listNotSelect" :key="key">{{ val.name }}</p>
          <p class="hidden"></p>
          <p class="hidden"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: [
        {
          name: '关注'
        },
        {
          name: '推荐'
        },
        {
          name: '视频'
        },
        {
          name: '两会'
        },
        {
          name: '新时代'
        },
        {
          name: '北京'
        },
        {
          name: '娱乐'
        },
        {
          name: '体育'
        },
        {
          name: '财经'
        },
        {
          name: '科技'
        }
      ],
      listNotSelect: [
        {
          name: '美食'
        },
        {
          name: '美文'
        },
        {
          name: '文玩'
        },
        {
          name: '职场'
        },
        {
          name: '科学探索'
        },
        {
          name: '星座'
        },
        {
          name: '股票'
        },
        {
          name: '家居'
        },
        {
          name: '美容瘦身'
        },
        {
          name: '健身'
        },
        {
          name: '商业'
        },
        {
          name: '数码'
        },
        {
          name: '互联网'
        },
        {
          name: '育儿'
        },
        {
          name: '健康'
        },
        {
          name: '房产'
        },
        {
          name: '教育'
        },
        {
          name: '时尚'
        },
        {
          name: '旅游'
        },
        {
          name: '电影'
        }
      ]
    }
  },
  methods: {
    close: function () {
      this.$emit('increment') // 通知父组件
    },
    selectTab: function (index) {
      this.$emit('changeTab', index)
    }
  }
}
</script>

<style lang='less' scoped>
  .header {
    position: relative;
    text-align: center;
    line-height: 44px;
    height: 40px;
    background: #fff;

    .close {
      position: absolute;
      right: 0px;
      top: 5px;
      font-size: 13px;
      font-weight: 900;
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
  }

  .container {
    height: calc(~"100vh - 80px");
    background: rgba(248, 248, 248, 0.9);

    > .con_selected, .con_alternative {
      display: flex;
      height: 200px;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 15px 15px;
      align-content: flex-start;

      > p {
        width: 19vw;
        height: 45px;
        background: rgba(241, 241, 241, .6);
        line-height: 44px;
        text-align: center;
        margin-bottom: 15px;
      }

      .hidden {
        background: unset;
      }
    }

    > .alternative_tabs {
      height: calc(~"100% - 200px");

      > .cont_header {
        color: #7d7d7d;
        font-size: 14px;
        padding-left: 15px;
      }
    }
  }
</style>
