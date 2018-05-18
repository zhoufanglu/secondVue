<template>
  <div id="flexStudy" class="p-container-father">
    <!--first-->
    <div class="p-container-first">

      <div class="p-fun-row">
        <el-input
          placeholder="请输入内容"
          v-model="searchText"
          clearable>
        </el-input>
        <el-button type="primary" @click="oneSearch()" round>搜索</el-button>
      </div>

      <div class="p-body-container" v-show="!isShowNoDataBody">
        <div class="p-title-row">
          <span>编号</span>
          <span>名称</span>
        </div>
        <div v-for="l in list" class="p-item-row">
          <div>{{l.id}}</div>
          <div>{{l.name}}</div>
        </div>
      </div>
      <div class="p-body-noData" v-show="isShowNoDataBody">
         <span>没有数据</span>
      </div>

    </div>
    <!--second-->
    <div class="p-container-second f-test-borer">
      <div class="p-second-panel">
          <div class="f-test-border">
          </div>
          <div class="f-test-border">
            <span>标题标题标题标题标题标题标题标题标题标题标题标题</span>
            <span>1</span>
            <span>1</span>
          </div>
      </div>

      <div class="p-second-panel">
        <div class="f-test-border">
        </div>
        <div class="f-test-border">
          <span>标题标题标题标题标题标题标题标题标题标题标题标题</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
    </div>
    <!--third-->
    <div class="p-container-third f-test-border p-color">
      <div><span title="aaaaa">one</span></div>
      <div>2</div>
      <div>3</div>
    </div>
    <div class="">
      <span>store test</span>
      <button @click="storeAdd()">store+1</button>
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
            searchText:'',
            isShowNoDataBody:true,
            num:10
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
                if(!list.length){
                  this.isShowNoDataBody = true;
                }else {
                  this.isShowNoDataBody = false;
                }
                console.log(47, list);
              })
              .catch( err => {
                console.log(err);
              });
          },
          storeAdd(){
              /**
               * vuex use
               */
              this.$store.commit('add',this.num);
              console.log(70,this.$store.state.num);
              this.num++;
          }
        }
    }
</script>
<style>
</style>
