<template>
  <div class="hello">
    <!--轮播-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.pid">
          <img class="carousel" :src="`http://localhost:2500/`+item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="wrapper"><!-- v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" -->
      <div class="menu-container" ref="menuContainer">
        <div v-for="item in topic" :key="item.topid"><a href="#"><img :src="`http://localhost:2500/`+item.img"></a></div>
      </div>
    </div>
    <div class="divimage">
      <img src="http://localhost:2500/img/phone/1.png">
      <div class="my-b">
        <!--<div v-for="(item,i) in divimage" :key="i" :class="i==0?'show':'hide'" :id="`divimageItem${i+1}`" >-->
        <div v-for="(item,i) in divimage" :key="i" :class="getImgClass(i)">
          <img :src="`http://localhost:2500/`+item.pic" @click="toproduct(item.pid)">
          <div style="white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:14px;display:block;" class="title">{{item.title}}</div>
          <p>￥{{item.price}}/人起</p>
        </div>
        <button v-for="(item,i) in divimage" @click="getindex(i)" :class="getcolor(i)">{{i+1}}</button>
      </div>
    </div>
    <div class="remen">
     <div>
      <img src="http://localhost:2500/img/phone/2.png">
      <a href="#">查看更多</a>
     </div>
     <div class="remen_city">
      <div class="city_img" v-for="(item,i) in divremen" :key="i">
       <img :src="`http://localhost:2500/`+item.img">
       <p>{{item.cityname}}</p>
      </div>
     </div>
    </div>
    <div class="my-div"></div>
    <div class="my-video">
     <img src="http://localhost:2500/img/phone/home-banner.jpg" @click="video">
     <div v-show="vid">
      <div>
       <video src="http://localhost:2500/zanadu-brand.mp4" width="100%" controls></video>
       <button @click="video1">X</button>
      </div>
     </div>
    </div>
    <div class="my-div"></div>
    <!--赞品路程-->
    <div class="zanpina">
     <div>
      <img src="http://localhost:2500/img/phone/3.png">
      <a href="#">查看更多</a>
     </div>
     <div class="zanpin">
      <div class="zanpin_img" v-for="(item,i) in divzanpin" :key="i">
       <img :src="`http://localhost:2500/`+item.pic">
       <p style="white-space: nowrap;text-overflow:ellipsis;overflow:hidden;">{{item.title}}</p>
       <p>￥{{item.price}}/人起</p>
      </div>
     </div>
    </div>
    <div class="my-div"></div>

    <!--海外自由行-->
    <div class="haiwaia">
     <div>
      <img src="http://localhost:2500/img/phone/4.png">
      <a href="#">查看更多</a>
     </div>
     <div class="haiwai">
      <div class="haiwai_img" v-for="(item,i) in divhaiwai" :key="i">
       <img :src="`http://localhost:2500/`+item.pic">
       <p style="white-space: nowrap;text-overflow:ellipsis;overflow:hidden;">{{item.title}}</p>
       <p>￥{{item.price}}/人起</p>
      </div>
     </div>
    </div>
    <div class="my-div"></div>

    <!--别墅-->
    <div class="bieshua">
     <div>
      <img src="http://localhost:2500/img/phone/5.png">
      <a href="#">查看更多</a>
     </div>
     <div class="bieshu">
      <div class="bieshu_img" v-for="(item,i) in divbieshu" :key="i">
       <img :src="`http://localhost:2500/`+item.pic">
       <p style="white-space: nowrap;text-overflow:ellipsis;overflow:hidden;">{{item.title}}</p>
       <p>￥{{item.price}}/人起</p>
      </div>
     </div>
    </div>
    <div class="my-div"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[],
      topic:[],
      divimage:[],
      curImgIndex:0,
      divremen:[],
      divzanpin:[],
      divhaiwai:[],
      divbieshu:[],
      vid:false
    }
  },
  methods:{
      /*轮播*/   
      getCarousel(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "index/getIndexcarousel";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.list = result.body;
        })
      },
      /*轮播下topic */
      getopic(){
        var url="zan_phone/phonenav";
        this.$http.get(url).then(result=>{
          this.topic=result.body
        })
      },
      /*品介楼层 */
      getdivimage(){
        var url="index/getIndexpinjie";
        this.$http.get(url).then(result=>{
          this.divimage=result.body;
        })
      },
      /*热门目的地 */
      getremen(){
        var url="riproduct/getcity?countryid=1";
        this.$http.get(url).then(result=>{
          this.divremen=result.body.titmudi;
        })
      },
      /*赞品 */
      getzanpin(){
        var url="index/getIndexzanpin";
        this.$http.get(url).then(result=>{
          this.divzanpin=result.body;
        })
      },
      /*海外 */
      gethaiwai(){
        var url="index/getIndexhaiwai";
        this.$http.get(url).then(result=>{
          this.divhaiwai=result.body;
        })
      },
      /*别墅 */
      getbieshu(){
        var url="index/getIndexbieshu";
        this.$http.get(url).then(result=>{
          this.divbieshu=result.body;
        })
      },
      getindex(i){
        this.curImgIndex=i;
      },
      video(){
        this.vid=true;
      },
      video1(){
        this.vid=false;
      },
      toproduct(pid){
        console.log(pid);
        this.$router.push({path:"/home/product/pid="+pid})
      }
    },
    computed:{
      getImgClass(i){
        return function(i){
            return i==this.curImgIndex?"show":"hide";
        }
      },
      getcolor(i){
        return function(i){
          return i==this.curImgIndex?"c1":"c2";
        }
      }
    },
    created(){
      this.getCarousel();
      this.getopic();
      this.getdivimage();
      this.getremen();
      this.getzanpin();
      this.gethaiwai();
      this.getbieshu();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*公共 */
  .my-div{background:#f5f5f8;width:375px;height:21px;position: relative;z-index: 10;}
  .hello{background:#fff;}
  .hello .mint-swipe{height:250px;}
  .hello .carousel{width:100%;height:250px;}

  .hello .wrapper{width: 375px;height: 110px;margin-bottom: -10px;margin-bottom: -10px;}
  .hello .menu-container{height: 110px;overflow-x: auto;overflow-y: hidden; white-space: nowrap;}
  .hello .menu-container>div{width: 144px;display: inline-block;height: 70px;margin: 10px;border-radius: 5px;}
  
  .hello .menu-container>div img{width:100%;border-radius:5px;}
  .divimage{width:375px;height:428px;background:#f5f5f8;box-sizing: border-box;padding:20px 15px 30px;position: relative;z-index: 10;margin-top:-8px;}
  .show{display:block;}
  .hide{display:none;}
  .c1{background:#e43f6e;color:#fff;}
  .c2{background:#fff;}
  .my-b{box-sizing:border-box;background:#fff;padding:10px;}
  .my-b{width:100%;}
  p{margin:0;}
  .my-b img{width: 320px;height: 240px;}

  /*remen*/
    .remen,.zanpina,.haiwaia{width:375px;height:210px;background:#fff;box-sizing:border-box;padding:20px 15px 30px;}
    .remen a,.zanpina a,.haiwaia a,.bieshua a{display:block;float:right;margin-top:15px;font-size:14px;color:#888;}
    .remen .remen_city{height: 146px;display: -webkit-box;overflow-x: auto;overflow-y: hidden;white-space: nowrap;}
    .remen .city_img{width:123px;height:89px;position:relative;margin-right:10px;}
    .remen .city_img img{width:100%;border-radius:5px;}
    .remen .city_img p{position:absolute;top:44%;left:35%;z-index:10;color:#fff;font-weight:bold;font-size:16px;}

    /*video */
    .my-video{width:375px;height:136px;background:#fff;box-sizing:border-box;padding:20px 15px;}
    .my-video img{width:100%;}
    .my-video>div{position: fixed;top: 0;left: 0;width: 375px;height: 100%;background: rgba(0, 0, 0, 0.5);z-index: 9999;text-align:center;}
    .my-video>div>div{font-size: 40px;position: absolute;top: 50%;left: 0;margin-top: -110px}
    .my-video>div button{margin-top:20px;border-radius:20px;}

    /*赞品 */
    .zanpin,.haiwai,.bieshu{display: -webkit-box;overflow-x: auto;overflow-y: hidden;white-space: nowrap;}
    .zanpina{height:289px;}
    .zanpin_img{width:298px;height:233px;margin-right:10px;}
    .zanpin_img img{width:298px;height:155px;border-radius:5px;}


    /*海外 */
    .haiwaia{height:279px;}
    .haiwai_img{width:152px;height:216px;margin-right:10px;}
    .haiwai_img img{width:152px;height:131px;border-radius:5px;}

    /*别墅 */
    .bieshu{height:215px;}
    .bieshua{height:279px;background:#fff;box-sizing:border-box;padding:20px 15px 30px;}
    .bieshu_img{width:152px;height:199px;margin-right:10px;}
    .bieshu_img img{width:152px;height:131px;border-radius:5px;}
</style>
