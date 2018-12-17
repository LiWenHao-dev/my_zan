$(function(){
    var countryid=location.search.split("=")[1] 
    
     $.ajax({
         url:"/riproduct/getcity",
         type:"get",
         data:{countryid},
         dataType:"json",//ajax可自动将json转为obj
         success: function(res){
             //目的地楼层
             var {titmudi,mudi}=res;
             var html="",a="";
             for(var i=0;i<titmudi.length;i++){
                 html+=`
                 <div style="${i>7?'display:none':''}">
                     <img src="${titmudi[i].img}" title="${titmudi[i].cityname}">
                     <div class="res[i].detail">
                         <p>${titmudi[i].cityname}</p>
                         <p>${titmudi[i].subtitle}</p>
                     </div>
                 </div>
                 `
                 a=`${mudi[0].title}`
             }
             var divCarousel=document.querySelector(".mudi");
             divCarousel.innerHTML=html;
             var h3=document.querySelector(".my-h2");
             h3.innerHTML=a;
             //赞品楼层
            var {titzanpin,zanpin}=res;
            var html="",a="";
            for(var i=0;i<titzanpin.length;i++){
                html+=`
                <div>
                    <div class="my-posi">
                        <a href="#"><img src="${titzanpin[i].img}" alt=""></a>
                        <div class="detail">
                            <a href="#"><p>${titzanpin[i].subtitle}</p></a>
                        </div>
                    </div>
                </div>
                `
                a=`${zanpin[0].title}`
            } 
            var divCarousel=document.querySelector(".zanpin");
            divCarousel.innerHTML=html;
            var h3=document.querySelector("h3 .my-h2");
             h3.innerHTML=a;
             //轻奢楼层
            var {titqingshe,qingshe}=res;
            var html="",a="";
            for(var i=0;i<titqingshe.length;i++){
                html+=`
                <div>
                    <a href="#"><img src="${titqingshe[i].img}" alt=""></a>
                    <div class="detail">
                        <a href="#"><p>${titqingshe[i].subtitle}</p></a>
                    </div>
                </div>
                `
                a=`${qingshe[0].title}`
            }
            var divCarousel=document.querySelector(".qingshe");
            divCarousel.innerHTML=html;
            var h3=document.querySelector("h3 .my-h22");
             h3.innerHTML=a;
             //海外楼层
            var {tithaiwai,haiwai}=res;
            var html="",a="";
            for(var i=0;i<tithaiwai.length;i++){
                
                html+=`
                <div>
                    <div class="my-posi">
                        <a href="#"><img src="${tithaiwai[i].img}" alt=""></a>
                        <div class="detail">
                            <a href="#"><p>${tithaiwai[i].subtitle}</p></a>
                        </div>
                    </div>
                </div>
                `
                a=`${haiwai[0].title}`
            }
            var divCarousel=document.querySelector(".haiwai");
            divCarousel.innerHTML=html;
            var h3=document.querySelector("h3 .my-h222");
             h3.innerHTML=a;
             //别墅楼层
            var {titbieshu,bieshu}=res;
            var html="",a="";
            for(var i=0;i<titbieshu.length;i++){
                html+=`
                <div>
                    <div class="my-posi">
                        <a href="#"><img src="${titbieshu[i].img}" alt=""></a>
                        <div class="detail">
                            <a href="#"><p>${titbieshu[i].subtitle}</p></a>
                        </div>
                    </div>
                </div>
                `
                a=`${bieshu[0].title}`
                
            }
            var divCarousel=document.querySelector(".bieshu");
            divCarousel.innerHTML=html;
            var h3=document.querySelector("h3 .my-h2222");
             h3.innerHTML=a;
             //酒店楼层
            var {titjiudian,jiudian}=res;
            var html="";
            for(var i=0;i<titjiudian.length;i++){
                html+=`
                <div>
                    <div class="my-posi">
                        <a href="#"><img src="${titjiudian[i].img}" alt=""></a>
                        <div class="detail">
                            <a href="#"><p>${titjiudian[i].subtitle}</p></a>
                        </div>
                    </div>
                </div>
                `
                a=`${jiudian[0].title}`
            }
            var divCarousel=document.querySelector(".jiudian");
            divCarousel.innerHTML=html;
            var h3=document.querySelector("h3 .my-h22222");
             h3.innerHTML=a;
        }
    })
})
