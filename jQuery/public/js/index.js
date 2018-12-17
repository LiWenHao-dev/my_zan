$(function(){
    /*传关键词*/
    $("button").on("click",function(){
        var kw=$("#val").val();
        if(kw!=="")
          location.href=
            `search.html?kwords=${kw}`;
    })
    
    /*轮播*/
    $.ajax({
        url:"/index/getIndexcarousel",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
            var html="";
            for(var i=0;i<res.length;i++){
                html+=`
                <div class="carousel-item ${i==0?'active':''}">
                <img src="${res[i].img}" alt="">
                </div>
                `
            }
            var divCarousel=document.querySelector(".carousel-inner");
            divCarousel.innerHTML=html;
        }
    })
    /* 首页品介楼层*/
    $.ajax({
        url:"/index/getIndexpinjie",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
            
        var html="";
            for(var i=0;i<res.length;i++){
                html+=`
                <div>
                <a href="http://localhost:2500/details.html?pid=${res[i].pid}">
                <img src="${res[i].pic}" alt="">
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>
                `
            }
            var divpinjie=document.querySelector(".pinjie");
            divpinjie.innerHTML=html;
        }
    })
    /*首页赞品楼层 */
    $.ajax({
        url:"/index/getIndexzanpin",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var html="";
            for(var i=0;i<res.length;i++){
                    html+=`
                <div>
                <a href="#">
                <img src="${res[i].pic}" alt="">
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>`
            }
            var divpinjie=document.querySelector(".zanpin");
            divpinjie.innerHTML=html;
        }
    })
    /*首页海外楼层 */
    $.ajax({
        url:"/index/getIndexhaiwai",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var html="";
            for(var i=0;i<res.length;i++){
                if(i%2==0){
                    html+=`
                <div>
                <a href="#">
                <img src="${res[i].pic}" alt="">
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>
                `
                }else{
                    html+=`
                    <div>
                    <a href="#">
                    <img src="${res[i].pic}" alt="">
                    <div id="d1">今日特价</div>
					<div id="d2"></div>
					<div id="d3"></div>
                    <div class="zz1">
                        <p class="my_size">${res[i].details}</p>
                        <h5 class="my_size yincang">${res[i].title}</h5>
                    </div>
                    </a>
                    </div>`
                }
            }
            var divpinjie=document.querySelector(".haiwai");
            divpinjie.innerHTML=html;
        }
    })
    /*首页别墅楼层 */
    $.ajax({
        url:"/index/getIndexbieshu",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var html="";
            for(var i=0;i<res.length;i++){
                if(i%2==1){
                    html+=`
                <div>
                <a href="#">
                <img src="${res[i].pic}" alt="">
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>
                `
                }else{
                    html+=`
                    <div>
                    <a href="#">
                    <img src="${res[i].pic}" alt="">
                    <div id="d1">限时特价</div>
					<div id="d2"></div>
					<div id="d3"></div>
                    <div class="zz1">
                        <p class="my_size">${res[i].details}</p>
                        <h5 class="my_size yincang">${res[i].title}</h5>
                    </div>
                    </a>
                    </div>`
                }
            }
            var divpinjie=document.querySelector(".bieshu");
            divpinjie.innerHTML=html;
        }
    })
    /*首页短假楼层 */
    $.ajax({
        url:"/index/getIndexduanjia",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var html="";
            for(var i=0;i<res.length;i++){
                if(i%2==1){
                    html+=`
                <div>
                <a href="#">
                <img src="${res[i].pic}" alt="">
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>
                `
                }else{
                    html+=`
                    <div>
                    <a href="#">
                    <img src="${res[i].pic}" alt="">
                    <div id="d1">限时特价</div>
					<div id="d2"></div>
					<div id="d3"></div>
                    <div class="zz1">
                        <p class="my_size">${res[i].details}</p>
                        <h5 class="my_size yincang">${res[i].title}</h5>
                    </div>
                    </a>
                    </div>`
                }
            }
            var divpinjie=document.querySelector(".duanjia");
            divpinjie.innerHTML=html;
        }
    })
    /*首页酒店楼层 */
    $.ajax({
        url:"/index/getIndexjiudian",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var html="";
            for(var i=0;i<res.length;i++){
                html+=`
                <div class="my_position">
                <a href="#">
                <img src="${res[i].pic}" alt="">
                <img src="img/index_pic/empty.png" class="biaoqian">
                <span class="span">
                <div class="zhu">住</div>
                <div class="wu">5</div>
                <div class="fu">付</div>
                <div class="si">4</div>
                </span>
                <div class="zz1">
                    <p class="my_size">${res[i].details}</p>
                    <h5 class="my_size yincang">${res[i].title}</h5>
                </div>
                </a>
                </div>`
            }
            var divpinjie=document.querySelector(".jiudian");
            divpinjie.innerHTML=html;
        }
    })

    
})