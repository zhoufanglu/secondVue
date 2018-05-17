<template>
    <div class="test-2">
        <div class="title">组件2获取父组件的值：</div>
        <div>{{two}}</div>
    </div>
</template>
<script>
    export default {
        name: '',
        props:['two']
    }
</script>
<style type="text/scss" lang="scss">
    .test-2{
        display: flex;
        .title{
            color: $theme;
            font-weight: bolder;
        }
    }
</style>
