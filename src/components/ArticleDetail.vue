<template>
  <div class="article">
    <mt-header title="文章内容">
      <router-link to="/news_channel" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content" v-html="tml"></div>
  </div>
</template>

<script>
export default {
  name: 'article_detail',
  data () {
    return {
      tml: 1
    }
  },
  created: function () {
    let routerParams = this.$route.params.dataObj || sessionStorage.getItem('nowTml')

    this.tml = routerParams

    sessionStorage.setItem('nowTml', routerParams)
  }
}
</script>

<style lang='less' scoped>
  .article {
    .content {
      padding: 10px 15px;
      line-height: 1.5;
    }
  }
</style>
