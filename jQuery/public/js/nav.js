$(function(){
    $("<link rel='stylesheet' href='css/nav.css'>").appendTo("head")
    $.ajax({
        url:"/nav/getIndexdflexa",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success: function(res){
        var mm=res.a;
        //console.log(res[0].countryid);
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(2)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.b;
        //console.log(res.length);
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(3)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.c;
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(4)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.d;
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(5)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.e;
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(6)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.f;
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(7)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        var mm=res.g;
        var html="";
            for(var i=0;i<mm.length;i++){
                html+=`
                <a id="qwer" href="http://localhost:2500/riproduct.html?countryid=${mm[i].countryid}">${mm[i].countryname}</a>`
            }
            var divpinjie=document.querySelectorAll(".d-flex>div:nth-child(8)>div:nth-child(2).my_hot");
            for(var d of divpinjie){
                d.innerHTML=html;
            }
        }
    })

    
   

    $.ajax({
        url:"http://localhost:2500/nav.html",
        type:"get",
        success:function(res){
            $(".nav").replaceWith(res);
            $.ajax({
                url:"http://localhost:2500/user/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.ok==0){
                        $("#signout").show().next().hide();
                    }else{
                        console.log(res.uname);
                        $("#uname1").html(res.uname);
                        $("#signout").hide().next().show();
                    }
                }
            })
            //注销
            $(".nav").on("click","#btnSignout",function(e){
                e.stopPropagation();
                $.ajax({
                    url:"http://localhost:2500/user/siginout",
                    type:"get",
                    success:function(){
                        location.reload();
                    }
                })
            })
        }
    })
    
     

    $(".nav2").hide();
                $(window).scroll(function() {
                    if($(document).scrollTop() >= 700) {
                        $(".nav2").addClass("fixnav nav2").slideDown();
                    } else {
                        $(".nav2").hide();
                    }
                })
})