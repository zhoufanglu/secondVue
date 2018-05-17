<template>
    <div class="test-1">
        <div class="title">组件1获取父组件的值:</div>
        <div>{{one}}</div>
    </div>
</template>
<script>
    export default {
        name: '',
        props:['one'],
        data(){
            return {
                sendData:'one',
            }
        },
        created(){
            this.$emit('getOneDataName',this.sendData);
        }
    }
</script>
<style type="text/scss" lang="scss">
    .test-1{
        display: flex;
        .title{
            color: $theme;
            font-weight: bolder;
        }
    }
</style>
