<template>
  <div id="flexStudy" class="p-container-father">
    <div class="p-container-first">
      <div class="p-fun-row">
        <el-input
          placeholder="请输入内容"
          v-model="searchText"
          clearable>
        </el-input>
        <el-button type="primary" @click="oneSearch()" round>搜索</el-button>
      </div>
      <div class="p-title-row">
        <span>编号</span>
        <span>名称</span>
      </div>
      <div v-for="l in list" class="p-item-row">
        <div>{{l.id}}</div>
        <div>{{l.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
    import '@/assets/scss/page/flexStudy.scss';
    export default {
        name: 'flexStudy',
        data(){
          return {
            list:[],
            searchText:''
          }
        },
        created(){
        },
        methods:{
          oneSearch(){
            this.$http.get(
              '/sug/sug?code=utf-8',
              {
                params:{
                  q: this.searchText
                }
              }
            )
              .then( response => {
                let list = response.data.result;
                let goods = [];
                for (let i in list) {
                  let item = {
                    id: list[i][1],
                    name: list[i][0]
                  };
                  goods.push(item);
                }
                list = goods;
                this.list = list;
                console.log(47, list);
              })
              .catch( err => {
                console.log(err);
              });
          }
        }
    }
</script>
<style>
</style>
