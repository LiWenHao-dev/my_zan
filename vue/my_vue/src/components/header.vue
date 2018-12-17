<template>
    <div class="app-header">
        <div class="shou" v-show="s">
            <div class="shou-top">
                <img src="http://localhost:2500/img/phone/shouye.png" @click="getshouye">
                <div v-show="s" @click="getshouye" class="x">X</div>
            </div>
            <div class="shou-center">
                <img src="http://localhost:2500/img/phone/default_avatar.jpg">
                <p>赞那度会员</p>
            </div>
            <div class="shou-bottom">
                <ul class="shou-bottom-left">
                    <li v-for="(item,i) in list1" @click="getshouye">
                        <router-link :to="'/'+item.tag">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        
        <mt-header>
            <router-link to="/" slot="left">
                <a><span class="mui-icon mui-icon-bars" @click="getshouye()"></span></a>
                <a><span class="mui-icon mui-icon-search"></span></a>
            </router-link>
        </mt-header>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                s:false,
                list1:[{name:"目的地",tag:"mudi"},{name:"赞品旅程",tag:"lvcheng"},{name:"海外自由行",tag:"haiwai"},{name:"轻奢下团",tag:"qingshe"},{name:"大航海时代",tag:"hanghai"},{name:"精品别墅",tag:"bieshu"},{name:"精选酒店",tag:"jiudian"},{name:"国内短假",tag:"duanjia"},{name:"个人中心",tag:"green"}]
            }
        },
        methods:{
            getshouye(){
                this.s=!this.s
            },
        },
        created(){
        }

    }
</script>
<style>
    *{padding:0;margin:0;}
    .mui-icon-bars:before,.mui-icon-search:before{color:#fff;}
    .mui-icon-search:before{}
    li{list-style:none;}
    a{color:#666;}
    .shou{width: 375px;height: 667px;position: fixed;z-index: 20;background: #fff;box-sizing:border-box;padding:18px;}
    .shou .shou-top .x{float: right;margin-top: 13px;border: 1px solid #ccc;border-radius: 50%;width: 23px;text-align: center;}
    .shou .shou-center img{margin-left: 142px;width: 60px;border-radius: 50%;}
    .shou .shou-center p{text-align:center;}
    .shou .shou-bottom a{display: block;width: 120px;height: 30px;background-image: url(http://localhost:2500/img/phone/icons.svg);
        background-repeat: no-repeat;background-size: 32px;background-position: 0 -254px;padding-left: 35px;line-height: 35px;margin-top:19px;}
    .shou .shou-bottom li:nth-child(2) a{background-position:0 3px;}
    .shou .shou-bottom li:nth-child(3) a{background-position:0 -28px;}
    .shou .shou-bottom li:nth-child(4) a{background-position:0 -54px;}
    .shou .shou-bottom li:nth-child(5) a{background-position:0 -82px;}
    .shou .shou-bottom li:nth-child(6) a{background-position:0 -112px;}
    .shou .shou-bottom li:nth-child(7) a{background-position:0 -142px;}
    .shou .shou-bottom li:nth-child(8) a{background-position:0 -166px;}
    .shou .shou-bottom li:nth-child(9) a{background-position:0 -283px;}
</style>