<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- vue-lodaer scoped 代表css作用域 -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
