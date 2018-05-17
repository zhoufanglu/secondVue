<template>
  <div id="app">
    <div class="top-nav">
      <span class="logo"></span>
      <div class="title-left-panel">
        <span class="title-item">
          <router-link to="/project">项目</router-link>
        </span>
        <span class="title-item">
          <router-link to="/scoreCharts" active>评分表</router-link>
        </span>
        <span class="title-item">
          <router-link to="/papers">试题</router-link>
        </span>
        <span class="title-item">
            <router-link to="/interviewers" >面试官</router-link>
        </span>
        <span class="title-item">
          <router-link to="/flexStudy">flex</router-link>
        </span>
        <span class="title-item">
          <router-link to="/es6">es6</router-link>
        </span>
        <span class="title-item">
          <router-link to="/componentSendData">component study</router-link>
        </span>
        <!--<span class="title-item">
          <span>userName:{{updateName}}</span>
        </span>-->
      </div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
        radio3: '上海',
      }
    },
    methods: {

    },
      computed:{
          updateName(){
              this.$store.commit('updateUser','7777');
              return this.$store.state.userName;
          }
      }
  }
</script>
<style scoped>

</style>
