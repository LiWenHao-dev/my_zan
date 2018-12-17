//用来处理和首页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");



router.get("/getcity",(req,res)=>{
    var countryid=req.query.countryid;
    var output={titmudi:[],mudi:[],titzanpin:[],zanpin:[],titqingshe:[],qingshe:[],tithaiwai:[],haiwai:[],titbieshu:[],bieshu:[],titjiudian:[],jiudian:[]};
    
    //用lid查当前商品信息
    //目的地楼层
    var sql0="SELECT * FROM zan_city where countryid=? and type=1";
    var sql1="select * from zan_biaoti where countryid=? and type=1";
    //赞品路程楼层
    var sql2="SELECT * FROM zan_city where countryid=? and type=2";
    var sql3="select * from zan_biaoti where countryid=? and type=2";
    //轻奢楼层
    var sql4="SELECT * FROM zan_city where countryid=? and type=3";
    var sql5="select * from zan_biaoti where countryid=? and type=3";
    //海外楼层
    var sql6="SELECT * FROM zan_city where countryid=? and type=4";
    var sql7="select * from zan_biaoti where countryid=? and type=4";
    //别墅楼层
    var sql8="SELECT * FROM zan_city where countryid=? and type=5";
    var sql9="select * from zan_biaoti where countryid=? and type=5";
    //酒店楼层
    var sql10="SELECT * FROM zan_city where countryid=? and type=6";
    var sql11="select * from zan_biaoti where countryid=? and type=6";
    Promise.all([
      new Promise(function(open){
        pool.query(sql0,[countryid],(err,result)=>{
          if(err) console.log(err);
           output.titmudi=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql1,[countryid],(err,result)=>{
          if(err) console.log(err);
          output.mudi=result;
          open()
        })
      }),
      new Promise(function(open){
        pool.query(sql2,[countryid],(err,result)=>{
          if(err) console.log(err);
           output.titzanpin=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql3,[countryid],(err,result)=>{
          if(err) console.log(err);
          output.zanpin=result;
          open()
        })
      }),
        new Promise(function(open){
          pool.query(sql4,[countryid],(err,result)=>{
            if(err) console.log(err);
             output.titqingshe=result;
            open();
          })
        }),
        new Promise(function(open){
          pool.query(sql5,[countryid],(err,result)=>{
            if(err) console.log(err);
            output.qingshe=result;
            open()
          })
        }),

        new Promise(function(open){
          pool.query(sql6,[countryid],(err,result)=>{
            if(err) console.log(err);
             output.tithaiwai=result;
            open();
          })
        }),
        new Promise(function(open){
          pool.query(sql7,[countryid],(err,result)=>{
            if(err) console.log(err);
            output.haiwai=result;
            open()
          })
        }),
        new Promise(function(open){
          pool.query(sql8,[countryid],(err,result)=>{
            if(err) console.log(err);
             output.titbieshu=result;
            open();
          })
        }),
        new Promise(function(open){
          pool.query(sql9,[countryid],(err,result)=>{
            if(err) console.log(err);
            output.bieshu=result;
            open()
          })
        }),
        new Promise(function(open){
          pool.query(sql10,[countryid],(err,result)=>{
            if(err) console.log(err);
             output.titjiudian=result;
            open();
          })
        }),
        new Promise(function(open){
          pool.query(sql11,[countryid],(err,result)=>{
            if(err) console.log(err);
            output.jiudian=result;
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
        console.log("响应完成!");
      })
})
module.exports=router;