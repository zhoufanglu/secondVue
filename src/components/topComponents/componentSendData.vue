<template>
    <div class="component-study">
        <h1 style="margin-bottom: 30px">component-study</h1>
        <test-one @getOneDataName="getOneData" :one="oneValue"></test-one>
        <test-two :two="twoValue"></test-two>
        <el-cascader size="large" :options="options" v-model="area" @change="areaChange()">
        </el-cascader>
    </div>
</template>
<script>
    import testOne from "../template/test-1.vue"
    import testTwo from "../template/test-2.vue"
    import { provinceAndCityData, regionData, CodeToText, TextToCode } from 'element-china-area-data'//省市区组件
    export default {
        name: 'component-study',
        data(){
            return {
                oneValue:'one',
                twoValue:'two',
                options:provinceAndCityData,
                area:['12300']
            }
        },
        components:{
            "test-one":testOne,
            "test-two":testTwo
        },
        methods:{
            getOneData(data){
                console.log(25,data);
            },
            areaChange(){
                console.log(33,this.area);
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
