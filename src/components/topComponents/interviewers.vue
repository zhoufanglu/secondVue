<template>
  <div id="interviewers">
    <div class="p-interview-table">
      <table>
        <thead>
          <tr>
            <th class="fn-no-select" v-if="showNumber" @click="numberSort('asce')">手机编号↑</th>
            <th class="fn-no-select" v-else @click="numberSort('desc')">手机编号↓</th>
            <th>序号</th>
            <th>手机名字</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(phone,index) in phoneList">
            <td>{{phone[1]}}</td>
            <td>{{index + 1}}</td>
            <td>{{phone[0]}}</td>
            <td>
              <span>编辑</span>
              <span>删除</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    import "@/assets/scss/page/interviewers.scss"
    export default {
        name: 'interviewers',
        data(){
          return {
            phoneList:[],
            showNumber:true
          }
        },
        mounted(){
          this.$http.get('/sug/sug?code=utf-8&q=%E6%89%8B%E6%9C%BA')
            .then( response => {
              this.phoneList = response.data.result;
            })
            .catch( err => {
              console.log(err);
            });
        },
        methods:{
          numberSort(orderType){ //根据编号排序
            this.showNumber = !this.showNumber;
            let arr = this.phoneList;
            if(orderType == 'asce'){
              arr.sort(function(x, y){
                return y[1] - x[1];
              });
            }else if(orderType == 'desc'){
              arr.sort(function(x, y){
                return x[1] - y[1];
              });
            }
          }
        }
    }
</script>
<style>
</style>
