<template>
  <div id="es6" class="p-border-round">
    <div class="title">es6666</div>
  </div>
</template>
<script>
  /**
   * export/import基本用法
   * */
  import * as testObj from '@/assets/js/es6TestJs/exportTest'
  console.log(11,testObj.a, testObj.personObj);
  //a,personObj 看做是只读的不需要修改。

  /**
   * export default /import 用法
   */
  import foo from '@/assets/js/es6TestJs/exportDefault'
  console.log(18,foo);
  /**
   * Class
   */
  class Student {
    constructor(name, age, classNumber) {
      this.name = name;
      this.age = age;
      this.classNumber = classNumber;
    }

    sayName() {
      console.log(""+this.name+"的学号是"+this.classNumber+"");
    }
  }
  console.log('-------------------------------------------------------');
  let student = new Student('lfz','18','0922131');
  Object.assign(student,{englishName:'tog'});
  student.sayName();
  console.log(37,student);

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
<style scope type="text/scss" lang="scss" >
  @import "../../assets/scss/style";
  .p-border-round{
    border: solid 1px red;
    @include border-round;
  }
  .title{
    @include link-colors(green,red,blue);
  }
</style>
