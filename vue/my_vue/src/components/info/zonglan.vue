<template>
    <div class="app-product">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carousellist" :key="item.id">
                <img class="carousel" :src="`http://localhost:2500/`+item.img" />
            </mt-swipe-item>
        </mt-swipe>
        <h3>{{b.title}}</h3>
        <div class="product-main">
            <p>{{title.title}}</p>
            <div>{{title.subtitle}}</div>
        </div>
        <div class="product-main1" v-show="show">
            <p>{{title1.title}}</p>
            <div>{{title1.subtitle}}</div>
        </div>
        <div class="loadmore" @click="changeshow">{{text}}</div>
        <div class="taocan">
            <div class="baohan">
                <h4>费用包含</h4>
                <ul style="list-style:disc">
                    <li>行程中所列国际航班经济舱含税机票</li>
                    <li>行程中所列北欧城市内陆段经济舱含税机票</li>
                    <li>行程中所列当地7晚精品或豪华酒店住宿</li>
                    <li>行程中所列用餐费用（不含饮料）</li>
                    <li>当地车况良好的旅游大巴配经验丰富专业司机</li>
                    <li>行程中所列城市当地优秀中文导游</li>
                    <li>行程中所列景点门票费用</li>
                    <li>行程中所列活动费用</li>
                    <li>全程司机及导游小费</li>
                    <li>旅行意外保险</li>
                    <li>全程Wi-Fi设备使用（每个订单共享一台）</li>
                    <li>10 人以上安排全程陪同</li>
                </ul>
            </div>
            <div class="bubaohan">
                <h4>费用不包含</h4>
                <ul>
                    <li>个人旅游签证</li>
                    <li>行程中未列出的用餐费用</li>
                    <li>行程中未列出的景点门票费用</li>
                    <li>行程中未列出或标明需自费的活动费用</li>
                    <li>行程中未列出的个人消费</li>
                </ul>
            </div>
        </div>
    </div>
    <!--标题部分-->
</template>

<script>
    export default {
        data(){
            return {
                carousellist:[],
                b:[],
                title:[],
                title1:[],
                show:false,
                text:"加载更多",
                a:false,
                show1:true
            }
        },
        methods:{
            /*轮播部分*/
            getpid(){
                this.$route.params.pid;

            },
            getcarousel(){
                var url = "details/getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                this.carousellist = result.body.a;
                })
            },
            /*轮播下边的标题部分*/
            getb(){
                var url = "details/getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                this.b = result.body.f[0];
                })
            },
            gettitle(){
                var url="details//getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                    this.title=result.body.b[0]
                })
            },
            gettitle1(){
                var url="details//getdetails?"+this.$route.params.pid;
                this.$http.get(url).then(result=>{
                    this.title1=result.body.c[0]
                })
            },
            changeshow(){
                this.show=!this.show;
                if(this.show){
                    this.text="收起"
                }else{
                    this.text="加载更多"
                }
            },
            changeshow1(){
                this.show1=!this.show1
            }
            
        },
        created(){
            this.getcarousel();
            this.getb();
            this.getpid();
            this.gettitle();
            this.gettitle1();
        }
    }
</script>

<style>
    /*公共部分 */
    h3{font-weight:normal;box-sizing:border-box;font-size:20px;padding:10px;}
    /*轮播部分 */
    mt-swipe{height:300px;width:375px;border:1px solid red;}
    .app-product .mint-swipe{height:250px;}
    .app-product .carousel{width:100%;height:250px;}
    /*顶部价格部分 */
    .app-product-price{width:375px;height:44px;box-sizing:border-box;padding:10px;background-image:url(http://localhost:2500/img/details_pic/bg-pattern-diag.png);background-color:#333;color:#fff;font-weight:bold;font-size:20px;line-height:30px;}
    .app-product-price span{font-size:13px;}
    .app-product-bottom{display:flex;justify-content: space-between;box-sizing:border-box;padding:0 34px;padding-bottom:0px;}
    .product-main>p{color:#B9975B;text-align:center;}
    .product-main>div{box-sizing:border-box;padding:0 10px;font-size:14px;color:#777;}
    .product-main1>p{color:#B9975B;text-align:center;}
    .product-main1>div{box-sizing:border-box;padding:0 10px;font-size:14px;color:#777;}
    .loadmore{border:2px solid #E43F6E;color:#E43F6E;font-size:14px;text-align:center;padding:10px 0; }
    .baohan,.bubaohan{color:#777;font-size:12px;border:1px solid #a77fa1;border-radius:5px;line-height:23px;padding-left: 10px;margin-top:10px;}
    .taocan{box-sizing:border-box;padding:10px;margin-top:10px;}
    .baohan>h4,.bubaohan>h4{margin-top: -10px;
    display: block;
    background: #efeff4;
    width: 100px;
    text-align: center;
    margin-left: 20px;}
    .app-product-bottom{background-color:#304d64;color:#fff;}
    .app-product-bottom>div>a{color:#8ca6c2;}
    .app-product-bottom>div>p{color:#8ca6c2;}
    .app-product-bottom>div{box-sizing:border-box;padding-top:10px;}
    .changecolor{color:#fff;}
</style>