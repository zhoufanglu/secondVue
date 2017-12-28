<template>
  <div id="loading">
    <img src="/src/assets/image/loading.gif">
    <div>加载中</div>
  </div>
</template>
<script>
  export default {
    name: 'loading',
    mounted(){

    }
  }
</script>
<style scoped>
  #loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    /*display: table-cell;*/
    vertical-align: middle;
    text-align: center;
  }
  #loading img{
    margin-top: 30rem!important;
  }
</style>
