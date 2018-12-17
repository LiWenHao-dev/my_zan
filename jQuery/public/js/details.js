$(function(){
    var pid=location.search.split("=")[1]
    /*切换样式 */
    $(".section ul:first-child li:first-child").addClass("my-li")
    $(".section ul:first-child li:first-child").css("background",function(){return "#fff"})
    $(".section ul:first-child li").on("click",function(){
        $(this).addClass("my-li").siblings().removeClass("my-li")
        $(this).css("background",function(){return "#fff"}).siblings().css("background",function(){return "#cb5977"})
    })
    $(".section ul:first-child li:first-child").on("click",function(){
        $("#taocan").show().siblings().hide();
    })
    $(".section ul:first-child li:nth-child(2)").on("click",function(){
        $("#xingcheng").show().siblings().hide();
    })
    $(".section ul:first-child li:nth-child(3)").on("click",function(){
        $("#jiudian").show().siblings().hide();
    })

    /* 评论附表*/
    $(".pinglun button").on("click",function(){
        $(".pinglun .biao").css("display","block")
    })
    $(".pinglun .x").on("click",function(){
        $(".pinglun .biao").css("display","none")
    })
    /*评论中的小星星 */
    $(".biaobody").on("click","svg",function(){
        $(this).css("fill",function(){return "#ba4c68"}).prevAll("svg").css("fill",function(){return "#ba4c68"});
        $(this).nextAll("svg").css("fill",function(){return "#ccc"});
    })

    /*替换 */
    var count=0;
    var text="";
    $(".biao .biaonei button").on("click",function(){
        
        var $svgs=$("svg");
        //console.log($("svg").eq(1).css("fill"))
        for(var i=0;i<$svgs.length;i++){
          if($("svg").eq(i).css("fill")==="rgb(186, 76, 104)"){
              count++;
          }
        } 
        //console.log(index)//几颗星星
        text=$("#textarea").val();//输入的文字
        //console.log(text);
        if(text==""||count==""){
            alert("评论不能为空");
            return ;
        }else{
          
            $.ajax({
                url:"/details/insert",
                type:"get",
                data:{count,text,pid},
                dataType:"json",//ajax可自动将json转为obj
                success: function(res){
                    console.log(res);
                    alert("评论成功");
                    location.href=`details.html?pid=${pid}`;
                }
                }) 
                 console.log(text);
        }
    })
    /*有大问题 */

    /*参考航班 */
    $(".hangban .but button:first-child").on("click",function(){
        $("#z1").show().siblings().hide();
    })
    $(".hangban .but button:nth-child(2)").on("click",function(){
        $("#z2").show().siblings().hide();
    })
    $(".hangban .but button:last-child").on("click",function(){
        $("#z3").show().siblings().hide();
    }) 
    $.ajax({
        url:"/details/getdetails",
        type:"get",
        data:{pid},
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
            /*轮播*/
            var {a}=res;
            var html="";
            for(var i=0;i<a.length;i++){
                html+=`
                <li class="${i==0?'active':''}"><a href="#"><img src="${a[i].img}" alt=""></a></li>
                `
            }
            var div=document.querySelector("#banner-img-ul");
            div.innerHTML=html;
            var html="";
            for(var i=0;i<a.length;i++){
                html+=`
                <li class="${i==0?'active':''}" data-index="${i}"></li>
                `
            }
            var div=document.querySelector("#banner-indc-ul");
            div.innerHTML=html;
            function bannerImgs(){
                var imgsUl=document.getElementById("banner-img-ul");
                var activeLi = imgsUl.getElementsByClassName("active")[0];
                var imgsLis=imgsUl.children;
                for(var imgli of imgsLis){
                    imgli.className="";
                }
                if(activeLi.nextElementSibling){
                    activeLi.nextElementSibling.className="active";
                }else{
                    imgsLis[0].className="active";
                }
                
                var indcUl=document.getElementById("banner-indc-ul");
                var activeIndcLi = indcUl.getElementsByClassName("active")[0];
                var indcLis=indcUl.children;
                for(var indcli of indcLis){
                    indcli.className="";
                }
                if(activeIndcLi.nextElementSibling){
                    activeIndcLi.nextElementSibling.className="active";
                }else{
                    indcLis[0].className="active";
                }
            }
            var bannerTimer = setInterval(bannerImgs,3000);
            document.getElementById("banner-indc-ul").onclick=function(e){
                clearInterval(bannerTimer);
                if(e.target.nodeName=="LI" && e.target.className.indexOf("active") == -1){
                    var indcUl=document.getElementById("banner-indc-ul");
                    var indcLis=indcUl.children;
                    for(var indcli of indcLis){
                        indcli.className="";
                    }
                    e.target.className="active";
                    var i=e.target.getAttribute("data-index");
                    var imgsUl=document.getElementById("banner-img-ul");
                var activeLi = imgsUl.getElementsByClassName("active")[0];
                var imgsLis=imgsUl.children;
                for(var imgli of imgsLis){
                    imgli.className="";
                    }
                    imgsLis[i].className="active";
                }
                bannerTimer = setInterval(bannerImgs,3000);
                }
            /*介绍1 */
            var {b}=res;
            var html="";
            for(var i=0;i<b.length;i++){
                html+=`
                <h3>${b[i].title}</h3>
                <div class="jieshao1">${b[i].subtitle}${b[i].subtitle}</div>
                `
            }
            var div=document.querySelector(".main1");
            div.innerHTML=html;
            /*介绍2 */
            var {c}=res;
            var html="";
            for(var i=0;i<c.length;i++){
                html+=`
                <h3 style="margin-top:10px;">${c[i].title}</h3>
                <div class="jieshao2">${c[i].subtitle}</div>
                `
            }
            var div=document.querySelector(".main2");
            div.innerHTML=html
            /*行程部分*/
            var {d}=res;
            var html="";
            for(var i=0;i<d.length;i++){
                html+=`
                <h3>${d[i].oneday}</h3>
                <img src="${d[i].oneimg}" alt="">
                <p>${d[i].onesub}</p>
                <h3>${d[i].twoday}</h3>
                <img src="${d[i].twoimg}" alt="">
                <p>${d[i].twosub}</p>
                `
            }
            var div=document.querySelector("#xingcheng");
            div.innerHTML=html
            /*酒店信息*/
            var {e}=res;
            var html="";
            for(var i=0;i<e.length;i++){
                html+=`
                <div>
                    <img src="${e[i].img}">
                    <h3>${e[i].name}</h3>
                    <h4>${e[i].site}</h4>
                    <div>${e[i].title}</div>
                    <a href="#">查看酒店</a>
                </div>
                `
            }
            var div=document.querySelector("#jiudian");
            div.innerHTML=html;
            /* 主题和评论主题*/
            var zt=res.f;
            var html1="",html2="",html3="";
            for(var i=0;i<zt.length;i++){
                html1+=`
                <h2>${zt[i].title}</h2>
                <p style="color:#8ca6c2">${zt[i].details}</p>
                <div class="price"><span>￥${zt[i].price}</span>/人起</div>
                <button>现在预订</button>
                <b>
                    出境空港
                    <input type="radio" checked>北京
                    <input type="radio">上海
                    <input type="radio">其他城市
                </b>
                `
                html2+=`
                <img src="${zt[i].pic}" alt="" style="">
                <h1>${zt[i].title}</h1>
                <p>${zt[i].details}</p>
                `
                html3+=`
                评论标题&nbsp;&nbsp;&nbsp;<input type="text"  placeholder="${zt[i].title}" style="height:30px; width:90%;">
                `
            }
            var div=document.querySelector(".my-background");
            div.innerHTML=html1;
            var div=document.querySelector(".biaotou");
            div.innerHTML=html2;
            var div=document.querySelector("#pinglunbiaoti");
            div.innerHTML=html3;

            /*评论 */
            var {g}=res;
            var html="";
            for(var i=0;i<g.length;i++){
                html+=`
                <span style="display:block;float:left;">${g[i].count}星好评</span>
                <span style="    margin-left: -131px">${g[i].text}</span>
                <p style="margin-left: 154px;">${g[i].time}</p>
                `
            }
            var div=document.querySelector(".tihuan");
            div.innerHTML=html;
            /*想去部分 */
            var {h}=res;
            var html="";
            for(var i=0;i<h.length;i++){
                html+=`
                <span>
                    <img src="${h[i].avatar}" alt="">
                    <h5>${h[i].uname}</h5>
                </span>
                `
            }
            var div=document.querySelector(".xiangqu div:nth-child(5)");
            div.innerHTML=html;
        }
    })
    // $.ajax({
    //     url:"/details/insert"
    // })
})

