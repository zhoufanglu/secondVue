<template>
    <div class="component-study">
        <h1 style="margin-bottom: 30px">component-study</h1>
        <test-one @getOneDataName="getOneData" :one="oneValue"></test-one>
        <test-two :two="twoValue"></test-two>
    </div>
</template>
<script>
    import testOne from "../template/test-1.vue"
    import testTwo from "../template/test-2.vue"
    export default {
        name: 'component-study',
        data(){
            return {
                oneValue:'one',
                twoValue:'two'
            }
        },
        components:{
            "test-one":testOne,
            "test-two":testTwo
        },
        methods:{
            getOneData(data){
                console.log(25,data);
            }
        },
        created(){
            //this.getOneData;
        }
    }
</script>
<style lang="scss" type="text/scss">
    .component-study{

    }
</style>
