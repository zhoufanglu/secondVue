<template>
  <div id="es6">
    <div>es6666</div>
  </div>
</template>
<script>
  //import 测试
  import {a} from '@/assets/js/es6TestJs/exportTest'
  console.log(19, a);

  export default {
    name: 'es6',
    created() {
      let obj = {name: 'lfz'};
      //对象中添加属性方法
      Object.assign(obj, {age: '3'});
      console.log(12, obj);
      (() => {
        console.log('自执行函数')
      })();


    }
  }
</script>
<style>
</style>
