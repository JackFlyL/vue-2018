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
        <mt-tab-item v-for="(val, index) in channelListDate" :key="index" :id="index">{{ val.name }}</mt-tab-item>
      </mt-navbar>
      <p @click="tooglePop()">+</p>
    </div>
    <mt-popup v-model="popupVisible" :closeOnClickModal="false" position="right">
<!--       父组件只需要绑定方法名就可以接收到子组件传递的参数啦 -->
      <channel-list @increment="incrementTotal" @changeTab="changeTab">
      </channel-list>
    </mt-popup>

    <!-- tab-container -->
    <mt-tab-container v-model="selected"
                      v-infinite-scroll="loadMore"
                      infinite-scroll-disabled="loading"
                      infinite-scroll-distance="1"
                      infinite-scroll-immediate-check="false">
      <mt-tab-container-item v-for="(value, indexId) in channelListDate" :id="indexId" :key="indexId">
        <ul>
          <li v-for="(val, key) in news" :key="key" @click="linkAricle(val.html)">
            <template v-if="val && !val.havePic">
              <div class="no_pic">
                <header class="item_header">{{ val.title }}</header>
                <footer class="item_footer">
                  <span>{{ val.channelName }}</span>
                  <span>{{ val.source }}</span>
                  <span>{{ val.pubDate }}</span>
                </footer>
              </div>
            </template>
            <template v-else-if="val.imageurls.length < 3">
              <div class="one_pic_cont">
                <header class="item_header">{{ val.title }}</header>
                <footer class="item_footer">
                  <span>{{ val.channelName }}</span>
                  <span>{{ val.source }}</span>
                  <span>{{ val.pubDate }}</span>
                </footer>
              </div>
              <div class="pic_div">
                <img v-lazy="val.imageurls[0].url" alt="oh, shit!">
              </div>
            </template>
            <template v-else-if="val.imageurls.length >= 3">
              <div class="more_pic">
                <header class="item_header">{{ val.title }}</header>
                <div class="item_cont">
                  <p><img v-lazy="val.imageurls[0].url" alt=""></p>
                  <p><img v-lazy="val.imageurls[1].url" alt=""></p>
                  <p><img v-lazy="val.imageurls[2].url" alt=""></p>
                </div>
                <footer class="item_footer">
                  <span>{{ val.channelName }}</span>
                  <span>{{ val.source }}</span>
                  <span>{{ val.pubDate }}</span>
                </footer>
              </div>
            </template>
            <template v-else>
              <div class="center" v-if="!news.length">
                很抱歉, 暂时没有该频道推文哦~
              </div>
            </template>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import ChannelList from './ChannelList'
import { Indicator, Toast } from 'mint-ui'

export default {
  name: 'NewsChannel',
  data () {
    return {
      dudu: 1,
      news: [],
      selected: '',
      popupVisible: false,
      channelListDate: [{}],
      curChannelId: ''
    }
  },
  created: function () {
    // es6写法时候  this下面没有$http 打印看出 this 是 仅仅是这个对象 而不是实例化的vueComponent对象 难道跟实现方式有关系么
    // 现写法 this 指向 VueComponent
    this.$http({
      url: `http://ali-news.showapi.com/channelList`,
      method: `get`,
      headers: { Authorization: 'APPCODE d8cb38a548224576a8bf88fdfc464c03' }
    }).then(({ data }) => {
      this.channelListDate = data.showapi_res_body.channelList
      this.selected = this.selected === '' ? 0 : this.selected
    }, () => {
      Toast({
        message: `服务器错误`,
        position: `bottom`,
        duration: 2000
      })
    })
  },
  methods: {
    tooglePop: function () {
      this.popupVisible = true
    },
    incrementTotal: function () {
      this.popupVisible = false
    },
    changeTab: function (index) {
      this.popupVisible = false
      this.selected = index.toString()
    },
    loadMore: function () {
      setTimeout(() => {
        let curResultLen = this.news.length / 10 + 1

        this.getNews(this.curChannelId, curResultLen, true)
        // Indicator.close()
      }, 1000)
    },
    getNews: function (id, curPage, isLoadMore) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      })

      this.$http({
        url: `http://ali-news.showapi.com/newsList`,
        method: `get`,
        params: {
          channelId: id,
          maxResult: 10,
          needAllList: false,
          page: curPage,
          needHtml: 1
        },
        headers: { Authorization: 'APPCODE d8cb38a548224576a8bf88fdfc464c03' }
      }).then(({ data }) => {
        Indicator.close()
        const results = data.showapi_res_body.pagebean.contentlist

        if (this.news.length && isLoadMore) {
          this.news = [...this.news, ...results]
          console.info(this.news, 'hahah')
          return
        }
        this.news = results
        console.info(this.news)
      }, () => {
        Toast({
          message: `没有啦`,
          position: `bottom`,
          duration: 2000
        })
      })
    },
    linkAricle: function (tml) {
      console.info(tml)
      // window.location.href = link
      this.$router.push({
        name: 'article_detail', // 组件在路由中注册时候的name
        params: {
          name: 'name',
          dataObj: tml
        }
      })
    }
  },
  components: {
    ChannelList: ChannelList
  },
  watch: {
    'selected': {
      handler: function (val, oldval) {
        this.curChannelId = this.channelListDate[val].channelId

        // 获取当前频道nes列表
        this.getNews(this.curChannelId, 1)
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .mint-navbar {
    display: block;
    overflow-x: scroll;
    width: 91%;
    padding-left: 9px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    .mint-tab-item {
      display: inline-block;
      margin-right: 10px;
    }
  }

  .mint-tab-container-item {
    ul li {
      display: flex;
      padding: 5px 10px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;

      > .one_pic_cont > .item_footer {
        color: #999;
        font-size: 12px;
      }

      .more_pic .item_header {
        padding-bottom: 7px;
      }

      .more_pic > .item_cont {
        display: flex;
        justify-content: space-between;
        height: 80px;
        margin-bottom: 10px;

        p {
          height: 80px;
          border: 1px solid #fff;
          border-radius: 3px;
          overflow: hidden;

          > img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .more_pic .item_footer {
        color: #999;
        font-size: 12px;
      }

      .no_pic {
        > .item_header {
          padding: 5px 0px 10px 0px;
          line-height: 1.5;
        }

        > .one_pic_cont > .item_footer, > .item_footer {
          color: #999;
          font-size: 12px;
        }
      }

      > .one_pic_cont {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

         > .item_footer {
          margin-top: 6px;
        }
      }

      > .pic_div {
        width: 120px;
        height: 80px;
        border: 1px solid #fff;
        border-radius: 3px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    ul li + li {
      border-top: none;
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

  image[lazy=loading] {
    width: 100%;
    height: 100%;
    background: #999999;
  }
</style>
