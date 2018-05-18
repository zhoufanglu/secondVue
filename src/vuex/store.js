import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:1
}
const mutations = {
    add(state,n){
        state.count+=n;
    },
    reduce(){
        state.count-=1;
    },
    setCount(state,val){
        state.count = val;
    }
}

const getters = {
    /*count(state){
        return state.count +=100;
    }*/
}

const store = new Vuex.Store({
    state,//数据
    mutations,//方法
    getters,//比如我们现在要对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上100.我们首先要在store.js里用const声明我们的getters属性。
})
export default store;