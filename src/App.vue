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
  </div>
</template>

<script>
  import '@/assets/scss/page/app.scss';
  export default {
    name: 'app',
    components: {

    },
    created(){

    },
    data() {
      return {
        isLoading:false
      }
    },
    mounted(){

    },
    methods: {

    }
  }
</script>
<style scoped>

</style>
