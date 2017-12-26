<template>
  <div id="app">
    <div class="top-nav">
      <span class="logo"></span>
      <div class="title-item">
        <span>
          <router-link to="/project">项目</router-link>
        </span>
        <span>
          <router-link to="/scoreCharts">评分表</router-link>
        </span>
        <span>
          <router-link to="/papers">试题</router-link>
        </span>
        <span>
          <router-link to="/interviewers">面试官</router-link>
        </span>
      </div>
    </div>
    <router-view></router-view>
    <loading id="loading"></loading>
  </div>
</template>

<script>
  import '@/assets/scss/page/app.scss'
  import Loading from '@/components/common/loading.vue'
  export default {
    name: 'app',
    components: {
      Loading
    },
    data() {
      return {

      }
    },
    created(){
    },
    methods: {

    }
  }
</script>
<style scoped>

</style>
