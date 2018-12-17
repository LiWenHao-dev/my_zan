//用来处理和首页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");

/*搜索功能*/
// router.get("/sou",(req,res)=>{
//     var kwords="日本"//req.query.kwords;
//     var arr=kwords.split(" ")
//     for(var i=0;i<arr.length;i++){
//         arr[i]=`subtitle like '%${arr[i]}%'`
//     }
//     var where=" "+arr.join(" and ")// SELECT * from zan_city where subtitle like '%日本%'
//     //SELECT * FROM zan_city WHERE  cityid>16 and subtitle like '%日本%'
// var sql="SELECT * FROM zan_city WHERE  cityid>16 and ";
// pool.query(sql+where,[],(err,result)=>{
// if(err) console.log(err);
// res.writeHead(200,{
// "Content-Type":"application/json;charset=utf-8",
// "Access-Control-Allow-Origin":"*"
// })
// console.log(result);
// res.write(JSON.stringify(result))
// res.end()
// })
// })

router.get("/getsearchcity",(req,res)=>{
    var kwords=req.query.kwords;
    var arr=kwords.split(" ")
    for(var i=0;i<arr.length;i++){
        arr[i]=`subtitle like '%${arr[i]}%'`
    }
    var where=" "+arr.join(" and ")
    var countryid=req.query.countryid;
    var output={a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[]};
    //SELECT cityname,count FROM zan_city WHERE countryid=18 AND cityname!=''

    //目的地楼层
    var sql0="SELECT cityname,count FROM zan_city WHERE countryid=18 AND cityname!=''";
    var sql1="SELECT * FROM style";
    var sql2="SELECT subtitle,type FROM zan_biaoti WHERE countryid=18";
    var sql3="SELECT * FROM zan_city WHERE cityid>16";
    var sql4="SELECT * FROM zan_city WHERE cityid>16 and type=2 and ";
    var sql5="SELECT * FROM zan_city WHERE cityid>16 and type=3 and ";
    var sql6="SELECT * FROM zan_city WHERE cityid>16 and type=4 and ";
    var sql7="SELECT * FROM zan_city where countryid=18 and cityid>16 ORDER by price ASC";
    Promise.all([
      new Promise(function(open){
        pool.query(sql0,[countryid],(err,result)=>{
          if(err) console.log(err);
           output.a=result;
          open();
        })
      }),
       new Promise(function(open){
         pool.query(sql1,[countryid],(err,result)=>{
           if(err) console.log(err);
           output.b=result;
           open()
         })
       }),
        new Promise(function(open){
            pool.query(sql2,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.c=result;
            open()
        })
        }),
        new Promise(function(open){
            pool.query(sql3,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.d=result;
            open()
        })
      }),
        new Promise(function(open){
            pool.query(sql4+where,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.e=result;
            open()
        })
      }),
        new Promise(function(open){
            pool.query(sql5+where,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.f=result;
            open()
        })
      }),
        new Promise(function(open){
            pool.query(sql6+where,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.g=result;
            open()
        })
      }),
        new Promise(function(open){
            pool.query(sql7,[countryid],(err,result)=>{
                if(err) console.log(err);
            output.h=result;
            open()
        })
      })
      ]).then(function(){
        res.writeHead(200,{
          "Content-Type":"application/json;charset=utf-8",
          "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output));
        res.end();
      })
})
module.exports=router;