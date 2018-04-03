import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 0,
        userName: 'tog'
    },
    mutations: {
        add (state,num) {
            state.num = num;
        },
        updateUser (state,name){
            state.userName = name;
        }
    }
})
export default store;