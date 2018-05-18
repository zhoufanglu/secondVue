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
        <span class="title-item">
          <router-link to="/count">count</router-link>
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
        //在页面加载时读取localStorage里的状态信息
        localStorage.getItem("vuex_store_second") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("vuex_store_second"))));
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{
            localStorage.setItem("vuex_store_second",JSON.stringify(this.$store.state))
        });
        //this.$router.push({path:'/home'})
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
