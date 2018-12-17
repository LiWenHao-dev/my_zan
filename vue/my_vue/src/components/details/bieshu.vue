<template>
    <div class="bieshuq">
        <div class="icon">
            <img src="http://localhost:2500/img/phone/5.png"><!--@click="getbieshu"-->
        </div>
        <div class="bieshuq-info" v-for="(item,i) in divbieshu">
            <img :src="`http://localhost:2500/`+item.pic"> 
            <p class="bieshuq-title">{{item.title}}</p>
            <p class="bieshuq-detail">{{item.details}}</p>
            <p class="bieshuq-price">￥{{item.price}}/人起</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                divbieshu:[]
            }
        },
        methods:{
            /*别墅 */
            getbieshu(){
                var url="index/getIndexbieshu";
                this.$http.get(url).then(result=>{
                this.divbieshu=result.body;
                console.log(this.divbieshu[0].pic);
                })
            }
        },
        created(){
            this.getbieshu();
        }
    }
</script>
<style>
    p{margin:0;}
    .icon{width:375px;height:51px;background:#fff;}
    .bieshuq-info{width:375px;height:230px;background:#fff;box-sizing:border-box;padding:10px;}
    .bieshuq-info>img{width:100%;height:127px;}
    .bieshuq-title{color:#484848;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 14px;display: block;}
    .bieshuq-detail{    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    display: block;}
    .bieshuq-price{border-bottom:1px dotted #ccc;padding-bottom:10px;}
</style>