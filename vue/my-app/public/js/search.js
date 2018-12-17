$(function(){
    if(location.search.indexOf("kwords=")!=-1){
        var kwords=decodeURI(
          location.search.split("=")[1]
        );
    }
    /*侧边栏city部分*/
    $(".mudidi>div>a").click(function(e){
        e.preventDefault();
        if($(".mudidi>div>a").hasClass("up")){
            $(".mudidi>div>a").removeClass("up").addClass("down")
        }else{
            
            $(".mudidi>div>a").removeClass("down").addClass("up")
        }
        if($(".city").hasClass("block")){
            $(".city").removeClass("block").addClass("none")
        }else{
            
            $(".city").removeClass("none").addClass("block")
        }
    })
    $.ajax({
        url:"/search/getsearchcity",
        type:"get",
        data:{kwords},
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
            var nn=res.a;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`<li><span>${nn[i].cityname}</span><span>${nn[i].count}</span></li>`
            }
            var divpinjie=document.querySelector(".city ul");
            divpinjie.innerHTML=html;
            /*风格部分*/
            var nn=res.b;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                    <div class="my-padding">
                        <input type="checkbox">
                        <span>${nn[i].style}</span>
                        <span>${nn[i].count}</span>
                    </div>`
            }
            var divpinjie=document.querySelector(".type");
            divpinjie.innerHTML=html;
            /*分类部分*/
            var nn=res.c;
            var html="",t=0;
            for(var i=0;i<nn.length;i++){
                html+=`<li class="my-bg"><a href="#" data-toggle="tab" data-target="#t${nn[i].type}">${nn[i].subtitle}</a></li>`
            }
            var divpinjie=document.querySelector(".fenlei ul");
            divpinjie.innerHTML=html;
            /*tabs部分*/
            var nn=res.d;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                <div class="tabs">
                    <img src="${nn[i].img}" alt="">
                    <div>
                        <p>${nn[i].subtitle}</p>
                        <p>￥${nn[i].price}<span>/人起</span></p>
                    </div>
                </div>`
            }
            var divpinjie=document.querySelector("#t1");
            divpinjie.innerHTML=html;
            var nn=res.e;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                <div class="tabs">
                    <img src="${nn[i].img}" alt="">
                    <div>
                        <p>${nn[i].subtitle}</p>
                        <p>￥${nn[i].price}<span>/人起</span></p>
                    </div>
                </div>`
            }
             var divpinjie=document.querySelector("#t2");
             divpinjie.innerHTML=html;
            var nn=res.f;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                <div class="tabs">
                    <img src="${nn[i].img}" alt="">
                    <div>
                        <p>${nn[i].subtitle}</p>
                        <p>￥${nn[i].price}<span>/人起</span></p>
                    </div>
                </div>`
            }
             var divpinjie=document.querySelector("#t3");
             divpinjie.innerHTML=html;
            var nn=res.g;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                <div class="tabs">
                    <img src="${nn[i].img}" alt="">
                    <div>
                        <p>${nn[i].subtitle}</p>
                        <p>￥${nn[i].price}<span>/人起</span></p>
                    </div>
                </div>`
            }
             var divpinjie=document.querySelector("#t4");
             divpinjie.innerHTML=html;
            var nn=res.h;
            var html="";
            for(var i=0;i<nn.length;i++){
                html+=`
                <div class="tabs">
                    <img src="${nn[i].img}" alt="">
                    <div>
                        <p>${nn[i].subtitle}</p>
                        <p>￥${nn[i].price}<span>/人起</span></p>
                    </div>
                </div>`
            }
             var divpinjie=document.querySelector("#t5");
             divpinjie.innerHTML=html;
        }
    })
    
    /*侧边设施部分*/
    $(".sheshi>div>a").click(function(e){
        e.preventDefault();
        if($(".sheshi>div>a").hasClass("up")){
            $(".sheshi>div>a").removeClass("up").addClass("down")
        }else{
            
            $(".sheshi>div>a").removeClass("down").addClass("up")
        }
        if($(".check").hasClass("block")){
            $(".check").removeClass("block").addClass("none")
        }else{
            
            $(".check").removeClass("none").addClass("block")
        }
    })
    /*侧边风格部分*/
    $(".fengge>div>a").click(function(e){
        e.preventDefault();
        if($(".fengge>div>a").hasClass("up")){
            $(".fengge>div>a").removeClass("up").addClass("down")
        }else{
            
            $(".type>div>a").removeClass("down").addClass("up")
        }
        if($(".type").hasClass("block")){
            $(".type").removeClass("block").addClass("none")
        }else{
            
            $(".type").removeClass("none").addClass("block")
        }
    })
    /*main部分*/
    $(".fenlei ul:first-child").on("click","li",function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).hasClass("my-bg")){
            $(this).addClass("my-bg1")
            $(this).siblings().removeClass("my-bg1")
        }
       let index=$(this).index()+1;
       console.log(index);
       if(index==1){
        $(".content").children("#t1").show().siblings().hide();
       }else if(index==2){
        $(".content").children("#t2").show().siblings().hide();
       }else if(index==3){
        $(".content").children("#t3").show().siblings().hide();
       }else{
        $(".content").children("#t4").show().siblings().hide();
       }
    })
    /*搜索*/
    // $.ajax({
    //     url:"/index/sou",
    //     type:"get",
    //     data:{kwords},
    //     dataType:"json",//ajax可自动将json转为obj
    //     success: function(res){
    //     var html="";
    //         for(var i=0;i<res.length;i++){
    //             html+=`
    //             `
    //         }
    //         var divpinjie=document.querySelector(".jiudian");
    //         divpinjie.innerHTML=html;
    //     }
    // })
    
})