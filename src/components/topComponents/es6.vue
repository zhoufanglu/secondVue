<template>
  <div id="es6" class="p-border-round">
    <div class="title">es6666</div>

    <!--双向绑定-->
    <div>
      <div>简单双向绑定</div>
      <input id="modelWrite" type="text" >
      <span id="modelView"></span>
    </div>
  </div>
</template>
<script type="text/javascript">
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
      this.$http.post(
          '/api/data',
          {
              params:{
                  username:"180@ynnx.com",
                  password:"79031245"
              }
          })
          .then(function (data) {
              console.log(58,data.data)
          })
          .catch(function (error) {
              console.log(error);
          });

    }
  }
  /**
   * vue双向绑定原理
   */
  console.log('----------------------vue双向绑定原理---------------------------------');
  let obj = {} //为obj定义一个为 hello 的访问器属性
  //访问器属性
  Object.defineProperty(obj,"hello",{
      get(){
          console.log('调用了get')
      },
      set(val){
          console.log('set调用了，值为'+val+'');
      }
  })
  console.log(76,obj.hello)//会进get
  console.log(77,obj.hello = '666') //会进set
  console.log('-----------------------')
  //get 和 set 方法内部的 this 都指向 obj，
  // 这意味着 get 和 set 函数可以操作对象内部的值。
  // 另外，访问器属性的会"覆盖"同名的普通属性，因为访问器属性会被优先访问，
  // 与其同名的普通属性则会被忽略。
  Object.defineProperty(obj,"test",{
      set(val){
          document.querySelector('#modelWrite').value = val;
          document.querySelector('#modelView').innerText = val;
      }
  })
   document.addEventListener('keyup',function (e) {
       //obj.test = document.querySelector('#modelWrite').value;
       obj.test = document.querySelector('#modelWrite').value
       /*console.log(101,e.target.value)
       console.log(102,document.querySelector('#modelWrite').value);*/
   })

  //递归
  //求1-100的和
  /*let sum = 0,num = 100;
  let recursive = (num)=>{
      if(num === 0)
          return false;
      console.log(110,sum += num);
      recursive(num-1);
  }
  recursive(100);*/
  //闭包理解
  //调用方法A的时候，会把a这个变量给存下来

  /*let  A = (a)=>{
      let B = (b)=>{
          console.log(127,a+b);
          return a + b;
      }
      return B
  }
  let C = A(1);
  C(1)*/
  //console.log(126,C);
  /*var a = 10;
  function A(){
      console.log(a);//10（读的能力）
      a = 20;//（写的能力）
      console.log(a);//20
  }
  A();*/

  let arr =  [1,2,2,4,7,8,2,1];
  //console.log(139,...new Set(arr) )
  console.log(139,arr.sort((a,b)=>{
      return a<b;
  }));
  arr = arr.sort((a,b)=>{
      return a<b;
  })
  let i,j,k
  // 执行前[8, 7, 4, 2, 2, 2, 1, 1]
  for (i = 0; i < arr.length - 1; i++) {
     /* for(j = i+1; j<arr.length; j++){
          if(arr[i] === arr[j]){
              for(k = i;k<arr.length;k++){
                  arr[k] = arr[k+1]
              }
              arr.length--;
          }
      }*/
      if (arr[i] === arr[i + 1]) {
          for (j = i; j < arr.length; j++) {
              arr[j] = arr[j + 1];
          }
          arr.length--;
      }
  }
  //执行后 [8, 7, 4, 2, 2, 1]
  console.log(152,arr)


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
