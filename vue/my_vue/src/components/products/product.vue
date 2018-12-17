<template>
    <div class="app-product">
        <!--价格-->
        <div class="app-product-price">
            ￥{{b.price}}<span>&nbsp;/人起</span>
        </div>
        <router-view></router-view>
        <div class="app-product-bottom">
            <router-link to="zong" tag="div" @click="changeshow1" v-show="show1">
                <a id="icon-star"><span class="mui-icon mui-icon-star"></span></a>
                <p>纵览</p>
            </router-link>
            <div @click="changeshow1" v-show="!show1">
                <a id="icon-star" style="color:#fff;"><span class="mui-icon mui-icon-star"></span></a>
                <p style="color:#fff;">纵览</p>
            </div>
            <router-link to="xing" tag="div">
                <a><span class="mui-icon mui-icon-map"></span></a>
                <p>行程</p>
            </router-link>
            <router-link to="jiu" tag="div">
                <a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
                <p>酒店</p>
            </router-link>
            <router-link to="ping" tag="div">
                <a id="icon-chatbubble"><span class="mui-icon mui-icon-chatbubble"></span></a>
                <p>评论</p>
            </router-link>
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