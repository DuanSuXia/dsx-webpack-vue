<template>
    <div class="resourceUse">
        <!--<div id="myChart" :style="{width: '400px', height: '200px'}"></div>-->
        <div class="title">{{title}}</div>
        <div class="progress-ratio">
            <div id="ratioCharts"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue'
    import echarts from 'echarts'
    Vue.prototype.$echarts = echarts;
    export default {
        data() {
            return {
                title:'资源使用情况'
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
    @import '../../assets/css/variable.scss';
    .resourceUse{
        width:100%;
        height:100%;
        padding:10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:flex-start;
        border:1px solid red;
        .title{
            width:100%;
            height:15%;
            font-size:16px;
            color: #68cefd;
        }
        .progress-ratio{
            width:100%;
            height:85%;
            #ratioCharts{
                width:100%;
                height:100%;
                border: 1px solid red;
            }
        }
    }
    /*1366  1440  1680  1920  */
    @media screen and (min-width:1366px) and (max-width:1440px){
        .title{
            font-size:16px;
        }
    }
    @media screen and (min-width:1440px) and (max-width:1680px){
        .title{
            font-size:18px;
        }
    }
    @media screen and (min-width:1680px) and (max-width:1920px){
        .title{
            font-size:20px;
        }
    }
    @media screen and (min-width:1920px){
        .title{
            font-size:22px;
        }
    }
</style>