<template>
    <div class="vuex">
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <div>
            <button @click="add(2)">+</button>
            <button @click="reduce()">-</button>
        </div>
        <div>
            <span>改变count内的值</span>
            <button @click="changeCount()">变为666</button>
        </div>
        <div>-------------------Vue 数组/对象更新 视图不更新---------------</div>
        <div v-for="(i,index) in arr" style="padding: 30px">
            <span>{{i}}</span>
        </div>
        <div>{{obj.a}}+{{obj.b}}</div>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters } from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
                arr: [1,2,3],
                obj:{
                    a: 1,
                    b: 2
                }
            }
        },
        created(){
            // 数据更新 对象视图不更新
            this.arr[0] = 'A'
            this.arr.length = 1
            /*this.obj.c = 'OBKoro1';
            delete this.obj.a;
            console.log(this.obj);  // {b:2,c:'OBKoro1'}*/

        },
        methods:{
            ...mapMutations(['add','reduce','setCount']),
            changeCount(){
                console.log(32,this.count);
                this.setCount(666);
            }
        },
        computed:{
            // 使用对象展开运算符将此对象混入到外部对象中
            ...mapState(['count']),
            //...mapGetters(["count"])
        }

    }
</script>
<style>
</style>
