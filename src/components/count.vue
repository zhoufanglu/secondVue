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
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters } from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',

            }
        },
        created(){
            //console.log(18,this.$store);

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
