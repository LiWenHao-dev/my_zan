$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    $.ajax({
        url:"http://localhost:2500/header.html",
        type:"get",
        success:function(res){
            $(".header").replaceWith(res);
        }
    })
})
