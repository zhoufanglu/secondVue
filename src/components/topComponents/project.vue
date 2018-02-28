<template>
  <div id="project">
    <div class="project-left-nav">
      <span>
        <router-link to="/project/model_1">模块1</router-link>
      </span>
      <span>
        <router-link to="/project/model_2">模块2</router-link>
      </span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
      <span>模块6</span>
    </div>
    <div class="project-right-panel">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'project'
    }
</script>
<style scoped type="text/scss" lang="scss">
  .project-left-nav{
    display: inline-block;
    width: 200px;
    height: 100%;
    border: solid;
    span{
      display: block;
      cursor: pointer;
      &:hover{
        color: blue;
       }
    }
  }
  .project-right-panel{
    display: inline-block;
    height:100%;
    border: solid;
  }
</style>
