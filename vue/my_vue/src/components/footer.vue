<template>
    <div class="app-footer">
        <div class="footer-top">
            <div class="bg-icon1">
                <img src="http://localhost:2500/img/phone/media-icon.png">
            </div>
            <div class="ul">
                <b>微信媒体号：</b>
                <p>赞那度旅行人生</p>
                <p>旅行体验 & 生活方式</p>
                <img src="http://localhost:2500/img/phone/zanaducn.jpg">
            </div>
            <div class="ul1">
                <b>微信媒体号：</b>
                <p>赞那度旅行人生</p>
                <p>旅行体验 & 生活方式</p>
                <img src="http://localhost:2500/img/phone/zanaducn.jpg">
            </div>
        </div>
        <div class="footer-center">
            <div class="bg-icon2">
                <img src="http://localhost:2500/img/phone/media-icon.png">
            </div>
            <div class="ul">
                <p style="color:#333;">新浪微博</p>
                <b style="font-size:14px;">最新信息及网友互动</b>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="tell">
                <p>客服热线</p>
                <p>400-605-9588</p>
                <p style="margin-top:10px;">广告合作</p>
                <p>ad@zanadu.cn</p>
                <p style="color:red;">info@zanadu.cn</p>
            </div>
        </div>
        <div class="footer-text">
            <div>
                <p>北京赞那度国际旅行社有限公司</p>
                <p>旅行社业务经营许可证编号：L-BJ-CJ00559</p>
                <p>Copyright ZANADU赞那度 2011-2018</p>
                <p>京ICP备 11041827号 | 京ICP证120221</p>
                <p>京公网安备11010502036479号</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style>
    .app-footer{background: url(http://localhost:2500/img/phone/footer-bg.png) no-repeat, 
        linear-gradient(-180deg, rgba(124, 202, 234, 0.90) 0%, rgba(198, 232, 246, 0.46) 96%);
        width:375px;height:660px;background-size:100%;box-sizing:border-box;padding:0 20px;}
    .bg-icon1{width:35px;height:35px;overflow:hidden;}
    .bg-icon1 img{height:32px;display:block;margin-left:-120px;overflow:hidden;}
    .footer-top{display:flex;padding-top:50px;}
    .ul b,.ul1 b{font-size:15px;}
    .ul1{margin-left:20px;}
    .ul img,.ul1 img{width:120px;margin-top:10px;}

    .bg-icon2{width:35px;height:35px;overflow:hidden;}
    .bg-icon2 img{height:32px;display:block;margin-left:1px;overflow:hidden;}
    .footer-center{margin-top:20px; display:flex;}

    .footer-bottom,.footer-text{margin-top:20px;display:flex;justify-content:center;}
</style>