<template>
  <div id="interviewers">
    <el-switch class="p-switch-btn" v-model="switchValue" active-text="启用操作" inactive-text="禁用操作">123</el-switch>
    <div class="p-phone-table">
      <el-table :data="list"  size="medium " >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="序号" prop=""></el-table-column>
        <el-table-column label="编号" prop="number" :data="0"></el-table-column>
        <el-table-column label="名称" prop="name" :data="1"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button :disabled="!switchValue" @click="editClick(scope.row)" class="table-btn" type="text" size="small">编辑</el-button>
            <el-button :disabled="!switchValue" @click="delClick(scope.row)"class="table-btn" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
    import "@/assets/scss/page/interviewers.scss"
    export default {
        name: 'interviewers',
        data(){
          return {
            list:[],
            showNumber:true,
            switchValue: true
          }
        },
        mounted(){
          //this.$parent.$data.isLoading = true;
          /*this.$http.get('/sug/sug?code=utf-8&q=%E6%89%8B%E6%9C%BA')
            .then( response => {
              let list = response.data.result;
              let listJson = [];
              for(let i in list){
                let jsonItem = {
                  name:list[i][0],
                  number:list[i][1]
                };
                listJson.push(jsonItem);
              }
              this.list = listJson;
            })
            .catch( err => {
              console.log(err);
            });*/
          var instance = this.$http.create({
            headers: {'Content-Type': 'application/json'},
            baseUrl:''
          });
          instance.post(
            '/evaluation',
            {
            params:{
              username:"180@ynnx.com",
              password:"79031245"
            }
          })
            .then(function (response) {
              console.log(response)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        methods:{
          editClick(row){
            console.log(94,row);

          },
          delClick(row){
            console.log(85,row.number);
            const h = this.$createElement;
            this.$msgbox({
              title: '消息',
              message: h('p', null, [
                h('span', null, '确定要删除吗？ '),
                /*h('i', { style: 'color: teal' }, '确定要删除吗？')*/
              ]),
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = '删除中...';
                  console.log(this.list);
                  for(let i in this.list){
                    if(row.number == this.list[i].number){
                      this.list.splice(i,1);
                    }
                  }
                  instance.confirmButtonLoading = false;
                  done();
                  /*setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);*/
                } else {
                  console.log('aaa');
                  done();
                }
              }
            }).then(action => {
              this.$message({
                type: 'success',
                message: '删除成功'
              });
            });
          }
        }
    }
</script>
<style>
</style>
