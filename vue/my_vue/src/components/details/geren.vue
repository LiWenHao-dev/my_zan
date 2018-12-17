<template>
 <div>
    <div class="geren1"  style="display:none;" v-show="chengg">
        <div class="img"></div>
        <div class="login">
            用户名：<input type="text" name="uname" v-model="uname">
            密码：<input type="text" name="upwd" v-model="upwd">
            <button @click="signin">提交</button>
        </div>
    </div>
    <div v-show="!chengg">
        <div class="bgc">
            <div class="shou-center">
                <img src="http://localhost:2500/img/phone/default_avatar.jpg">
                <p>赞那度会员</p>
            </div>
        </div>
        <div class="info">
            <div class="my-div"></div>
            <p class="arrow">我的信息</p>
            <p class="arrow">我的预定</p>
            <p class="arrow">我的想去</p>
            <div class="my-div"></div>
            <p class="arrow">赞享卡</p>
            <p class="arrow">优惠券</p>
            <div class="my-div"></div>
            <p class="arrow">电子周刊</p>
            <p class="arrow">邀请好友</p>
            <div class="my-div"></div>
            <p style="color:red;text-align:center;" @click="login()">退出</p>
        </div>
    </div>
 </div>
</template>
<script>
    export default {
        data(){
            return {
                uname:"",
                upwd:"",
                chengg:true
            }
        },
        methods:{
            submit:function(){
                console.log(this.uname);
                console.log(this.upwd);
                //已经获取到用户名和密码
            },
            signin(){
                this.axios.post("http://localhost:2500/user/signin",Qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
                })).then(res=>{
                    this.chengg=false;
                })
            },
            login(){
                this.chengg=true;
            }
        }
    }
</script>
<style scrop>
    .img{width:375px;height:250px;background-image:url(http://localhost:2500/img/feather-register.jpg);background-size:375px;}
    .login{padding:20px;}
    .bgc{width:375px;height:223px;background-image:url(http://localhost:2500/img/phone/bg-image-account-3.jpg);background-size:375px;}
    .shou-center img{margin-left: 156px;width: 60px;border-radius: 50%;margin-top:55px;}
    .shou-center p{text-align:center;color:#fff;}
    .info p{width:375px;height:43px;box-sizing:border-box;padding:10px 15px;margin:0;background:#fff;border-bottom:1px solid #eee;}
    .my-div{background:#f2f2f2;width:375px;height:21px;position: relative;z-index: 10;}
    .arrow{position:relative;}
    .arrow::after{
            content: '';
            width: 10px;
            height: 10px;
            border-top: 2px solid #eee;
            border-right: 2px solid #eee;
            transform: rotate(45deg);
            position: absolute;
            right: 15px;
            top: 13px;
    }
    button{margin-left:130px;}
</style>